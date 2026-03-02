'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Divider, DividerWithMargin } from '@/components/Divider';

const HomeClient = () => {
  const t = useTranslations();
  const [loading, setLoading] = useState(true);
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeParagraphs, setActiveParagraphs] = useState<Record<number, boolean>>({});

  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [autoRevertTimer, setAutoRevertTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const logoRef = useRef<HTMLImageElement>(null);

  const homeWritingLines = t.raw('home.lines') as string[];

  const paragraphs: string[][] = [];
  let currentParagraph: string[] = [];
  homeWritingLines.forEach((line) => {
    if (line === '\u00A0') {
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph);
      }
      paragraphs.push(['\u00A0']);
      currentParagraph = [];
    } else {
      currentParagraph.push(line);
    }
  });
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph);
  }

  const handleVideoLoaded = () => {
    setLoading(false);
  };

  const originalText = t('home.subtitle');
  const codeText = "console.log('Building digital excellence... one pixel at a time.');";

  const typeText = async (text: string, speed = 50) => {
    setDisplayText('');
    setShowCursor(true);

    for (let i = 0; i <= text.length; i++) {
      setDisplayText(text.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  };

  const handleSubtitleHover = async () => {
    if (isTyping) return;
    setIsTyping(true);

    if (autoRevertTimer) {
      clearTimeout(autoRevertTimer);
      setAutoRevertTimer(null);
    }

    for (let i = originalText.length; i >= 0; i--) {
      setDisplayText(originalText.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, 20));
    }

    await typeText(codeText, 40);
    setIsTyping(false);

    const timer = setTimeout(async () => {
      if (!isTyping) {
        setIsTyping(true);

        for (let i = codeText.length; i >= 0; i--) {
          setDisplayText(codeText.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 15));
        }

        await typeText(originalText, 30);
        setShowCursor(false);
        setIsTyping(false);
      }
      setAutoRevertTimer(null);
    }, 5000);

    setAutoRevertTimer(timer);
  };

  const handleSubtitleLeave = async () => {
    if (isTyping) return;
    setIsTyping(true);

    if (autoRevertTimer) {
      clearTimeout(autoRevertTimer);
      setAutoRevertTimer(null);
    }

    for (let i = codeText.length; i >= 0; i--) {
      setDisplayText(codeText.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, 15));
    }

    await typeText(originalText, 30);
    setShowCursor(false);
    setIsTyping(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveParagraphs((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = paragraphRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    setDisplayText(originalText);
  }, [originalText]);

  return (
    <section className="bodySection bodySection-Home">
      <div className="videoBackground">
        {loading && (
          <div className="loadingIndicator">
            <div className="loadingSpinner"></div>
          </div>
        )}
        <video
          className="backgroundVideo"
          src="/videos/sf01.mov"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoaded}
          onCanPlayThrough={handleVideoLoaded}
          onPlaying={handleVideoLoaded}
        ></video>
        <div className="videoOverlay"></div>
      </div>

      <DividerWithMargin />
      <div className="logoContainer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/images/logo-w.svg"
          alt="logoAtHome"
          className="logoAtHome"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/comma.svg" alt="logoComma" className="logoComma logoComma-Home" />
      </div>

      <h2
        className="homeSubdesc typing-subtitle"
        onMouseEnter={handleSubtitleHover}
        onMouseLeave={handleSubtitleLeave}
        style={{ cursor: 'pointer' }}
      >
        {displayText}
        {showCursor && <span className="typing-cursor">|</span>}
      </h2>

      <Divider />
      <div className="homeWriting">
        {paragraphs.map((paragraph, pIndex) => (
          <div
            key={pIndex}
            ref={(el) => { paragraphRefs.current[pIndex] = el; }}
            data-index={pIndex}
            className="writing-paragraph"
            style={{ minHeight: paragraph[0] === '\u00A0' ? '0.5em' : 'auto' }}
          >
            {paragraph[0] !== '\u00A0' &&
              paragraph.map((line, lIndex) => (
                <div
                  key={lIndex}
                  className={`animated-line ${activeParagraphs[pIndex] ? 'active' : ''}`}
                  style={{ animationDelay: `${lIndex * 0.5}s` }}
                >
                  {line}
                </div>
              ))}
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
};

export default HomeClient;
