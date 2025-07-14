import React, { useEffect, useRef } from "react";
import "../App.css";
import comma from "../assets/comma.svg";
import { Divider, DividerWithMargin } from "../components/Divider";
import imgC01 from "../assets/img-c01.jpg";
import imgC02 from "../assets/img-c02.jpg";
import imgC03 from "../assets/img-c03.jpg";
import imgC04 from "../assets/img-c04.jpg";
import imgC05 from "../assets/img-c05.jpg";
import imgC06 from "../assets/img-c06.jpg";
import imgC07 from "../assets/img-c07.jpg";
import imgC08 from "../assets/img-c08.jpg";
import imgC09 from "../assets/img-c09.jpg";

const Contact: React.FC = () => {
  const photoGridItemsRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    photoGridItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      photoGridItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);
  return (
    <section className="bodySection bodySection-Work">
      <DividerWithMargin />
      <h1 className="bodyTitle01">Elevate</h1>
      <div>
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Contact"
        />
      </div>
      <h1 className="bodyTitle02">
        your brand strategy
        <br />
        and UX/UI.
      </h1>

      <div className="workText01">
        <div>
          <p className="workText02">ARE YOU READY?</p>
        </div>
        <div>
          <p className="workText03">
            We are thrilled to collaborate with creative, open-minded
            individuals who have innovative ideas and exciting new projects. We
            choose our partners carefully because we believe that building
            personal relationships based on trust is crucial.
            <br />
            We are dedicated to providing a personalized and unique approach to
            each project by working in small, focused teams tailored to meet
            each client and project&apos;s specific needs. If you&apos;re ready
            to work together, send us an email!
          </p>
        </div>

        <div className="photo-grid">
          <img src={imgC01} alt="Image 1" ref={(el) => (photoGridItemsRef.current[0] = el)} />
          <img src={imgC02} alt="Image 2" ref={(el) => (photoGridItemsRef.current[1] = el)} />
          <img src={imgC03} alt="Image 3" ref={(el) => (photoGridItemsRef.current[2] = el)} />
          <img src={imgC04} alt="Image 4" ref={(el) => (photoGridItemsRef.current[3] = el)} />
          <img src={imgC05} alt="Image 5" ref={(el) => (photoGridItemsRef.current[4] = el)} />
          <img src={imgC06} alt="Image 6" ref={(el) => (photoGridItemsRef.current[5] = el)} />
          <img src={imgC07} alt="Image 7" ref={(el) => (photoGridItemsRef.current[6] = el)} />
          <img src={imgC08} alt="Image 8" ref={(el) => (photoGridItemsRef.current[7] = el)} />
          <img src={imgC09} alt="Image 9" ref={(el) => (photoGridItemsRef.current[8] = el)} />
        </div>

        <div className="contactInfo01">
          <div className="emptyContact01"></div>
          <div className="contactInfo02">
            <p>
              We believe in the power of personal connections. <br />
              We take pride in responding to each email personally, ensuring
              every interaction is meaningful.
              <br />
              Reach out, say hi, and let&apos;s start a conversation about how
              we can bring your ideas to life.
            </p>
            <p className="contactInfo03">
              <br />
              Contact us
              <br />
              <a href="mailto:hi@softpoke.jp" className="contactInfo03">
                hi@softpoke.jp
              </a>
            </p>
          </div>
        </div>
        <Divider />
      </div>
    </section>
  );
};

export default Contact;
