import React from "react";
import "../App.css";
import comma from "../assets/comma.svg";
import { Divider, DividerWithMargin } from "../components/Divider";

const Service: React.FC = () => {
  return (
    <section className="bodySection bodySection-Service">
      <DividerWithMargin />
      <h1 className="bodyTitle01">Experts</h1>
      <div>
        <img
          src={comma}
          alt="logoComma"
          className="logoComma logoComma-Service"
        />
      </div>
      <h1 className="bodyTitle02">
        A dedicated team <br /> of industry specialists.
      </h1>

      <h2 className="bodyDesc01">
        We deliver a wide array of services tailored to your evolving needs,
        enabling your business to grow and scale seamlessly.
      </h2>
      <Divider />

      <div className="serviceBox01">
        <div className="serviceBox01-Wrap">
          <div className="serviceBox01-Title">
            <p>BRAND</p>
          </div>
          <div className="serviceBox01-Desc">
            <p>
              Brand Strategy
              <br />
              Logo & Identity
              <br />
              Style Guides
              <br />
              Voice & Tone
              <br />
              Brand Research
            </p>
          </div>
        </div>
        <div className="serviceBox01-Wrap">
          <div className="serviceBox01-Title">
            <p>DESIGN</p>
          </div>
          <div className="serviceBox01-Desc">
            <p>
              UX Design
              <br />
              UI Design
              <br />
              Web Design
              <br />
              Interaction Design
              <br />
              Art Direction
              <br />
              Creative Direction
            </p>
          </div>
        </div>
        <div className="serviceBox01-Wrap">
          <div className="serviceBox01-Title">
            <p>DEVELOPMENT</p>
          </div>
          <div className="serviceBox01-Desc">
            <p>
              Front-end
              <br />
              Back-end <br />
              Mobile App{" "}
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="serviceBox02">
        <div className="serviceBox02-Wrap">
          <div className="serviceBox02-No">
            <p>01</p>
          </div>
          <div className="serviceBox02-Title">
            <p>Discovery</p>
          </div>
          <div className="serviceBox02-Desc">
            <p>
              The discovery process starts with an initial meeting, either in
              person or over the phone, where we learn about the client&apos;s
              company and explain our process. Afterwards, the client completes
              a questionnaire to help us understand their design needs.
              <br />
              <br /> Softpoke then conducts a branding presentation to uncover
              the brand&apos;s personality, values, and essence. Based on this,
              our team begins the research and discovery phase, seeking graphic
              benchmarks and gaining deeper insights into the industry.
            </p>
          </div>
        </div>
        <div className="serviceBox02-Wrap">
          <div className="serviceBox02-No">
            <p>02</p>
          </div>
          <div className="serviceBox02-Title">
            <p>Conceptualization</p>
          </div>
          <div className="serviceBox02-Desc">
            After the discovery phase is complete, we create a strategy document
            that captures your brand&apos;s unique voice, ideal client, brand
            words, and style.
            <br />
            <br />
            Using this strategy as a reference, Softpoke begins concept
            development. We generate multiple concept options, and the client
            selects the most compelling one. From there, we proceed in the
            chosen direction.
          </div>
        </div>
        <div className="serviceBox02-Wrap">
          <div className="serviceBox02-No">
            <p>03</p>
          </div>
          <div className="serviceBox02-Title">
            <p>Creation</p>
          </div>
          <div className="serviceBox02-Desc">
            <p>
              Once a concept is approved, we iteratively refine it until
              perfect, creating essential content to meet your needs. Softpoke
              ensures deliverables are launch-ready. Simultaneously, our
              development team builds robust, scalable digital solutions. We
              guarantee seamless integration and functionality across all
              platforms, delivering high-quality products.
            </p>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default Service;
