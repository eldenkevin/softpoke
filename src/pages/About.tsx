import React from 'react';
import '../App.css';
import comma from '../assets/comma.svg';
import { Divider, DividerWithMargin } from '../components/Divider';

const About: React.FC = () => {
  return (

    <section className="bodySection bodySection-About">
      <DividerWithMargin />
      <h1 className='bodyTitle01'>Diverse</h1>
      <div> <img src={comma} alt="logoComma" className="logoComma logoComma-AboutUs" /></div>
      <h1 className='bodyTitle02'>experiences<br />
        cultivate expertise.</h1>

      <h2 className='bodyDesc01'>Delivering user experiences that not only meet but exceed expectations, captivating users through exceptional design.</h2>
      <Divider />

      <div className='aboutText01'>
      <div className='emptyAbout01'></div>
        <div className='aboutText02'><p>OUR STORY</p></div>
        <div className='aboutText03'>
          <p>
            Since 2023, Softpoke Studio has been dedicated to transforming digital design and development. We have collaborated with over 12 startups and enterprises on more than 23 projects, providing custom UI/UX design and comprehensive development from scratch. Our expertise and technology are here to elevate your success.
          
          </p>

          <p>
          <br />
            Our design and development experience spans geographies, cultures, industries, and business objectives. We think systematically, build strategic plans, and design scalable digital products with speed and precision. Regardless of industry or platform, we deliver optimal solutions at every stage.
          </p>

          <p>
          <br /><br /><br />
            At Softpoke Studio, we believe that a brand with impact has a soul. It&apos;s purposeful, authentic, unique, and transparent. Above all, it adapts and evolves over time. A brand with soul is expansive and connects deeply with others. Let&apos;s create a brand with lasting value, together.
          </p>

          <p><br />
            We achieve the ideal user experience by creating visually appealing UI that adheres to OS guidelines (iOS, Android, etc.), while prioritizing the user. This ensures we deliver both functionality and beauty through design.
          </p>

          <p><br />
            If you require development as well, we can connect you with our in-house developer for smaller projects or trusted development partners for larger projects.
          </p>

          <p><br /><br /><br />
            We are committed to continuous innovation and improvement, offering comprehensive UI/UX design and development expertise that spans visual aesthetics to the functional user journey. Our approach goes beyond merely following the project brief. We focus on addressing the core needs of businesses, understanding that users ultimately care about the results. We dedicate ourselves to enhancing every aspect of the user experience, treating each project as our own, and never compromising on quality.
          </p>
        </div>
      </div>



      <Divider />



    </section>
  );
};

export default About;
