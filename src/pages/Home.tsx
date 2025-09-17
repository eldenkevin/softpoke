import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import logo_w from "../assets/logo-w.svg";
import comma from "../assets/comma.svg";
import { Divider, DividerWithMargin } from "../components/Divider";
import mainVideo from "../assets/sf01.mov";


const Home: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeParagraphs, setActiveParagraphs] = useState<
    Record<number, boolean>
  >({});

  // 타이핑 효과 상태
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [autoRevertTimer, setAutoRevertTimer] = useState<number | null>(null);

  // 로고 레퍼런스
  const logoRef = useRef<HTMLImageElement>(null);

  // 번역된 텍스트로 homeWritingLines 생성
  const homeWritingLines = t('home.lines', { returnObjects: true }) as string[];

  // 문단 구성 로직
  const paragraphs: string[][] = [];
  let currentParagraph: string[] = [];
  homeWritingLines.forEach((line) => {
    if (line === "\u00A0") {
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph);
      }
      paragraphs.push(["\u00A0"]);
      currentParagraph = [];
    } else {
      currentParagraph.push(line);
    }
  });
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph);
  }

  const handleVideoLoaded = () => {
    setLoading(false); // 비디오가 로드되면 로딩 상태를 해제
  };

  // 타이핑 효과 함수들
  const originalText = t('home.subtitle');
  const codeText = "console.log('Building digital excellence... one pixel at a time.');";

  const typeText = async (text: string, speed = 50) => {
    setDisplayText("");
    setShowCursor(true);

    for (let i = 0; i <= text.length; i++) {
      setDisplayText(text.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  };

  const handleSubtitleHover = async () => {
    if (isTyping) return;
    setIsTyping(true);

    // 기존 타이머 제거
    if (autoRevertTimer) {
      clearTimeout(autoRevertTimer);
      setAutoRevertTimer(null);
    }

    // 기존 텍스트 지우기
    for (let i = originalText.length; i >= 0; i--) {
      setDisplayText(originalText.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 20));
    }

    // 코드 텍스트 타이핑
    await typeText(codeText, 40);
    setIsTyping(false);

    // 5초 후 자동으로 원래 텍스트로 돌아가기
    const timer = setTimeout(async () => {
      if (!isTyping) {
        setIsTyping(true);

        // 코드 텍스트 지우기
        for (let i = codeText.length; i >= 0; i--) {
          setDisplayText(codeText.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 15));
        }

        // 원래 텍스트 타이핑
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

    // 자동 복귀 타이머 제거
    if (autoRevertTimer) {
      clearTimeout(autoRevertTimer);
      setAutoRevertTimer(null);
    }

    // 코드 텍스트 지우기
    for (let i = codeText.length; i >= 0; i--) {
      setDisplayText(codeText.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 15));
    }

    // 원래 텍스트 타이핑
    await typeText(originalText, 30);
    setShowCursor(false);
    setIsTyping(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
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

  // 초기 텍스트 설정
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
          src={mainVideo}
          autoPlay
          loop
          muted
          playsInline // 모바일 브라우저에서 자동 재생을 위해 추가
          onLoadedData={handleVideoLoaded} // 비디오 로드 후 이벤트 처리
        ></video>
        <div className="videoOverlay"></div> {/* 검정색 덮개 */}
      </div>

      <DividerWithMargin />
      <div className="logoContainer">
        <img
          ref={logoRef}
          src={logo_w}
          alt="logoAtHome"
          className="logoAtHome"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY * -10;
            const rotateY = (x - centerX) / centerX * 10;

            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          }}
        />
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Home"
        />
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
            ref={(el) => (paragraphRefs.current[pIndex] = el)}
            data-index={pIndex}
            className="writing-paragraph"
            style={{ minHeight: paragraph[0] === "\u00A0" ? "0.5em" : "auto" }}
          >
            {paragraph[0] !== "\u00A0" &&
              paragraph.map((line, lIndex) => (
                <div
                  key={lIndex}
                  className={`animated-line ${
                    activeParagraphs[pIndex] ? "active" : ""
                  }`}
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

export default Home;
