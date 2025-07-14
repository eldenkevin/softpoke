import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import logo_w from "../assets/logo-w.svg";
import comma from "../assets/comma.svg";
import { Divider, DividerWithMargin } from "../components/Divider";
import mainVideo from "../assets/sf01.mov";

const homeWritingLines = [
  "We are ",
  "designers,",
  "developers,",
  "strategists,",
  "visionaries,",
  "writers,",
  "and creators.",
  "\u00A0",
  "\u00A0",
  "Dedicated to the art",
  "of crafting and innovating,",
  "we are passionately committed",
  "to excellence",
  "and endlessly curious.",
  "\u00A0",
  "\u00A0",
  "We collaborate",
  "with pioneers",
  "and trailblazers.",
  "\u00A0",
  "\u00A0",
  "We work on ",
  "passion projects.",
  "\u00A0",
  "\u00A0",
  "We bring ideas",
  "to life.",
  "\u00A0",
  "\u00A0",
  "Inspired & relentless.",
];

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

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeParagraphs, setActiveParagraphs] = useState<
    Record<number, boolean>
  >({});
  const logoCommaRef = useRef<HTMLImageElement>(null);

  const handleVideoLoaded = () => {
    setLoading(false); // 비디오가 로드되면 로딩 상태를 해제
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

  // 최초 로딩 시 로고 컴마 한 바퀴 회전
  useEffect(() => {
    const el = logoCommaRef.current;
    if (el) {
      el.classList.add("rotate-once");
      const handleAnimationEnd = () => {
        el.classList.remove("rotate-once");
      };
      el.addEventListener("animationend", handleAnimationEnd);
      return () => {
        el.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, []);

  return (
    <section className="bodySection bodySection-Home">
      <div className="videoBackground">
        {loading && (
          <div className="loadingIndicator">
            <div className="loadingSpinner"></div>
            <div className="loadingText">Loading...</div>
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
        <img src={logo_w} alt="logoAtHome" className="logoAtHome" />
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Home"
          ref={logoCommaRef}
        />
      </div>

      <h2 className="homeSubdesc">
        {" "}
        Driving innovation and excellence in design <br />
        and development, one project at a time.{" "}
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
