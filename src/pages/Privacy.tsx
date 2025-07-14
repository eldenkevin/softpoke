import React from "react";
import "../App.css";
import { Divider, DividerWithMargin } from "../components/Divider";

const Privacy: React.FC = () => {
  return (
    <section className="bodySection bodySection-Privacy">
      <DividerWithMargin />
      <h1 className="bodyTitle01">Privacy Policy</h1>
      <h2 className="bodyDesc01">Effective Date: Jan 1, 2024</h2>
      <Divider />

      <div className="aboutText01">
        <div className="emptyAbout01"></div>
        <div className="aboutText03">
          <p>
            At Softpoke, we respect your privacy and are committed to protecting
            it.
          </p>
          <br />
          <h3>1. What We Collect</h3>
          <p>
            We only collect the information you choose to share with us—like
            your name, email, and project details—when you contact us.
          </p>
          <p>
            We also use basic analytics (e.g. Google Analytics) to understand
            how visitors use our website. This data is anonymous and used only
            to improve our site.
          </p>
          <br />
          <h3>2. How We Use It</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Collaborate on projects</li>
            <li>Improve our services</li>
          </ul>
          <p>We do not sell or share your personal data with third parties.</p>
          <br />
          <h3>3. Your Rights</h3>
          <p>
            If you&apos;d like to access, update, or delete your data, just
            email us at <a href="mailto:hi@softpoke.jp">hi@softpoke.jp</a>
          </p>
          <br />
          <h3>4. Security</h3>
          <p>
            We take reasonable steps to keep your information secure. If
            something ever goes wrong, we’ll let you know.
          </p>
          <br />
          <h3>5. That’s It</h3>
          <p>
            No hidden tracking, no spam, no selling data. Just respectful,
            honest work.
          </p>
          <br />
          <p>
            Questions? Feel free to reach out:{" "}
            <a href="mailto:hi@softpoke.jp">hi@softpoke.jp</a>
          </p>
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default Privacy;
