import homeStyles from "../../styles/structure/Homepage.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import SideSection from "./SideSection";

const SectionA = () => {
  const [experience, setExperience] = useState(false);
  const [tools, setTools] = useState(false);

  return (
    <>
      <div className={homeStyles.pageRow}>
        {/*the left colum*/}
        <div className={homeStyles.leftColumn}>
          <div className={homeStyles.column}>
            <span className={homeStyles.heading1}>Hello there,</span>

            <span className={homeStyles.subheading}>
              I love to design solutions that drive financial inclusion.
            </span>
            <span className={homeStyles.boldBody}>
              I am currently working as a Principal Product designer at
              IQbusiness, where I am consulting on a project for Mauritius
              Commercial Bank (MCB), the largest and oldest bank in Mauritius.
              On this project I am the lead product designer responsible for the
              design of MCB’s new electronic know your client platform.
            </span>

            <button
              onClick={() => setExperience(!experience)}
              className={
                experience ? homeStyles.openButton : homeStyles.closedButton
              }
            >
              Experience
              {experience ? (
                <img src="icons/less.svg" className={homeStyles.icon} />
              ) : (
                <img src="icons/more.svg" className={homeStyles.icon} />
              )}
            </button>
            {experience ? (
              <span className={homeStyles.regularBody}>
                In designing this project from scratch, I have perfected my
                capacity to design complicated platforms that are communicated
                to the user with simplicity. Furthermore, I have further
                solidified my skills in working directly with stakeholders in
                support of the product owner to showcase the user experience
                architecture, software integration and architecture and user
                flows, as well as advocate for design decisions that favor the
                user. In addition, I have contributed to the development and
                application of the new design system adopted throughout the
                designs of the bank.
              </span>
            ) : null}

            <button
              onClick={() => setTools(!tools)}
              className={
                tools ? homeStyles.openButton : homeStyles.closedButton
              }
            >
              Tools used
              {tools ? (
                <img src="icons/less.svg" className={homeStyles.icon} />
              ) : (
                <img src="icons/more.svg" className={homeStyles.icon} />
              )}
            </button>

            {tools ? (
              <span className={homeStyles.regularBody}>
                <img src="tools/MCBtools-desktop.png" />
              </span>
            ) : null}

            <span className={homeStyles.subheading}>
              A career committed to sustainable and scalable economic growth.
            </span>

            <span className={homeStyles.regularBody}>
              My formal introduction to software engineering started in matric
              when I had to write code for my computer science AS / A-Level
              (Cambridge) exams.
              <br />
              <br />
              Following from this, I continued to up-skill as a designer and
              developer, in order to utilise these skills to build websites and
              mobile applications to help start-ups and small businesses
              leverage the opportunities of the digital economy.
            </span>

            <span className={homeStyles.boldBodyGreen}>
              I am a strong advocate of the importance of the role of technology
              for sustainable economic growth.
            </span>

            <span className={homeStyles.boldBodyLilac}>
              Highlighted below are of some of the works I have published on
              this topic.
            </span>

            {/*Article Card WEF */}
            <div className={homeStyles.articleCards}>
              <span className={homeStyles.cardRowHeading}>
                <img src="article/wef.png" className={homeStyles.cardImage} />
                World Economic Forum
              </span>
              <span className={homeStyles.cardRowContent}>
                <img
                  src="article/wef.png"
                  className={homeStyles.cardImageHidden}
                />

                <span>
                  <a
                    target="_blank"
                    href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiV2ISXpI_4AhXUEcAKHQT2CjIQFnoECAcQAQ&url=https%3A%2F%2Fwww.weforum.org%2Fagenda%2F2019%2F08%2Ffourth-industrial-revolution-education%2F&usg=AOvVaw3dadf8V8dYJlCqIble9Iga"
                    className={homeStyles.cardLink}
                  >
                    <span className={homeStyles.linkRow}>
                      <span>
                        To flourish in the 4th industrial revolution, we need to
                        rething these three things
                        <span className={homeStyles.cardIcon}> ↗</span>
                      </span>
                    </span>
                  </a>
                </span>
              </span>
            </div>

            {/*Article Card  TEDX*/}
            <div className={homeStyles.articleCards}>
              <span className={homeStyles.cardRowHeading}>
                <img src="article/tedx.png" className={homeStyles.cardImage} />
                Ted Talk
              </span>
              <span className={homeStyles.cardRowContent}>
                <img
                  src="article/wef.png"
                  className={homeStyles.cardImageHidden}
                />

                <span>
                  <a
                    href="https://www.youtube.com/watch?v=zZ6COXfb_W0&t=184s"
                    target="_blank"
                    className={homeStyles.cardLink}
                  >
                    <span className={homeStyles.linkRow}>
                      <span>
                        Redistributing the Global Economy | Sustainable finance,
                        entreprenuership & digital literacy
                        <span className={homeStyles.cardIcon}> ↗</span>
                      </span>
                    </span>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>

        {/*the right colum*/}
        <div className={homeStyles.rightColumn}>
          <SideSection />
        </div>
      </div>
    </>
  );
};

export default SectionA;
