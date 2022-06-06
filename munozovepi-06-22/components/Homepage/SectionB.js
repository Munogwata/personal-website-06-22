import homeStyles from "../../styles/structure/Homepage.module.scss";
import React, { useState } from "react";
import Link from "next/link";
import SideSection from "./SideSection";
import styles from "../../styles/structure/SectionB.module.scss";

const SectionB = () => {
  const [tools, setTools] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className={styles.singleColumn}>
        <div>
          <div className={styles.sectionHeading}>
            What I contribute to sustainable and scaleable economic development.
          </div>

          <div className={styles.tabRow}>
            <button
              className={
                toggleState === 1 ? styles.tabActive : styles.tabDeactive
              }
              onClick={() => toggleTab(1)}
            >
              Diverse experiences
            </button>
            <button
              className={
                toggleState === 2 ? styles.tabActive : styles.tabDeactive
              }
              onClick={() => toggleTab(2)}
            >
              Design Skills
            </button>
            <button
              onClick={() => toggleTab(3)}
              className={
                toggleState === 3 ? styles.tabActive : styles.tabDeactive
              }
            >
              Development skills
            </button>

            <button
              onClick={() => toggleTab(4)}
              className={
                toggleState === 4 ? styles.tabActive : styles.tabDeactive
              }
            >
              Entreprenuerial spirit
            </button>
          </div>

          {/* the experience container*/}

          {toggleState === 1 ? (
            <div className={styles.skillsContainer}>
              <div className={styles.summaryContainer}>
                <span className={styles.summaryBody}>
                  I have a diverse skill set, and believe that this critical in
                  order to build rich and high quality products for the global
                  community.
                  <br />
                  <br />
                  In addition, I raised in a scope of different countries,
                  ranging from the United States of America to Kenya, and
                  therefore have benefited in have an apperication for
                  collobration and learning from different cultures and
                  communities arround the world.
                </span>
              </div>
              <div className={styles.containerHeight}>
                <div className={styles.line}></div>
              </div>

              <div className={styles.contentContainer}>
                <span className={styles.headingContainer}>
                  Diverse education , experience and skills
                </span>

                {/* An experience tile */}
                <span className={styles.experienceRow}>
                  <img
                    src="sectionb/up-icon.png"
                    className={homeStyles.cardImage}
                  />
                  <span className={styles.experienceContentRow}>
                    <span className={styles.experienceHeading}>
                      University of Pretoria BA Law ( major in International
                      Relations)
                    </span>
                    <span className={styles.experienceContent}>
                      Golden Key Reciepient & University of Pretoria Academic
                      Merit Award
                    </span>
                  </span>
                </span>

                {/* An experience tile */}
                <span className={styles.experienceRow}>
                  <img
                    src="sectionb/up-icon.png"
                    className={homeStyles.cardImage}
                  />
                  <span className={styles.experienceContentRow}>
                    <span className={styles.experienceHeading}>
                      University of Pretoria LLB{" "}
                    </span>
                    <span className={styles.experienceContent}>
                      Appointed as judge on the University Constititutional
                      Tribunal & winner of national legal essay.
                    </span>
                  </span>
                </span>

                {/* An experience tile */}
                <span className={styles.experienceRow}>
                  <img
                    src="sectionb/kc-logo.png"
                    className={homeStyles.cardImage}
                  />
                  <span className={styles.experienceContentRow}>
                    <span className={styles.experienceHeading}>
                      Founder of Kukura Capital - 2016
                    </span>
                    <span className={styles.experienceContent}>
                      Designed and developed the web and mobile applications of
                      the platform; managed and produced the content of Kukura
                      Capital and consulted on same for other start-ups and
                      SMEs.
                    </span>
                  </span>
                </span>

                {/* An experience tile */}
                <span className={styles.experienceRow}>
                  <img
                    src="sectionb/webber-wentzel.png"
                    className={homeStyles.cardImage}
                  />
                  <span className={styles.experienceContentRow}>
                    <span className={styles.experienceHeading}>
                      Trainee attorney at Webber Wentzel -2020
                    </span>
                    <span className={styles.experienceContent}>
                      Trained at chambers ranked top law firm in Africa in the
                      following areas of law banking & finance, private equity,
                      mergers and acquisition, commercial insurance, financial
                      technology and general litigation.
                    </span>
                  </span>
                </span>

                {/* An experience tile */}
                <span className={styles.experienceRow}>
                  <img
                    src="sectionb/iqbusiness.png"
                    className={homeStyles.cardImage}
                  />
                  <span className={styles.experienceContentRow}>
                    <span className={styles.experienceHeading}>
                      Principal Consultant (Product Design) at IQbusiness - 2022
                    </span>
                    <span className={styles.experienceContent}>
                      Working as lead designer on project for Mauritius
                      Commercial Bank, to design from scratch their electronic
                      know your client platform.
                    </span>
                  </span>
                </span>
              </div>
            </div>
          ) : null}

          {/* the design container*/}

          {toggleState === 2 ? (
            <div className={styles.skillsContainer}>
              <div className={styles.summaryContainer}>
                <span className={styles.summaryBody}>
                  I have been part of creative initiatives throughout my life
                  including participating in national art competitions.
                  Fortunately, I have found a way to integrate my creative side
                  in the work I do and have crafted these into a talent to
                  design solutions.
                </span>
              </div>
              <div className={styles.containerHeight}>
                <div className={styles.line}></div>
              </div>

              <div className={styles.contentContainer}>
                <span className={styles.headingContainer}>
                  The tools I use to design scalable and sustainable solutions:
                </span>

                <span>
                  <img
                    src="sectionb/design-kit.png"
                    className={styles.imageKit}
                  />
                  <img
                    src="tools/design-tools(m).png"
                    className={styles.imageTabletKit}
                  />
                  <img
                    src="tools/design-tools(t).png"
                    className={styles.imageMobileKit}
                  />
                </span>

                <span className={styles.referenceHeading}>Reference list</span>
                <div className={styles.referenceContainer}>
                  <div className={styles.referenceListContainer}>
                    <span> Abstract </span>
                    <span> Adobe Cloud </span>
                    <span> Craft </span>
                    <span> InVision </span>
                    <span> Miro </span>
                    <span> Visio </span>
                  </div>
                  <div className={styles.referenceListContainer}>
                    <span> Material Design </span>
                    <span> Zeplin </span>
                    <span> Figma </span>
                    <span> Skecth </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* the entrepreneurship container*/}
          {toggleState === 3 ? (
            <div className={styles.skillsContainer}>
              <div className={styles.summaryContainer}>
                <span className={styles.summaryBody}>
                  I am able to develop websites and mobile applications. This is
                  a skill set I believe has been exceptionally beneficial in
                  aiding me in designing solutions that are scalable and
                  sustainable. Due to my development skills I am able to design
                  with reusable components and clean code at the forefront of my
                  design process. As a result my designs are easy to translate
                  into code.
                  <br />
                  <br />
                  Another added benefit is you get a UX engineer, I will happily
                  deal with the CSS that everyone else is trying to avoid.
                </span>
              </div>
              <div className={styles.containerHeight}>
                <div className={styles.line}></div>
              </div>

              <div className={styles.contentContainer}>
                <span className={styles.headingContainer}>
                  The tools; libraries; frameworks & languages I use to design
                  scalable
                  <br />
                  and sustainable solutions:
                </span>

                <span>
                  <img src="sectionb/dev-kit.png" className={styles.imageKit} />

                  <img
                    src="tools/dev-tools(m).png"
                    className={styles.imageTabletKit}
                  />
                  <img
                    src="tools/dev-tools(t).png"
                    className={styles.imageMobileKit}
                  />
                </span>

                <span className={styles.referenceHeading}>Reference list</span>
                <div className={styles.referenceContainer}>
                  <div className={styles.referenceListContainer}>
                    <span> Sass </span>
                    <span> CSS </span>
                    <span> HTML </span>
                    <span> Javascript</span>
                    <span> Typescript</span>
                    <span> Angular</span>
                  </div>
                  <div className={styles.referenceListContainer}>
                    <span> NextJS </span>
                    <span> ReactJS </span>
                    <span> Storybook</span>
                    <span> Bootstrap</span>
                    <span> Wordpress</span>
                    <span> Firebase</span>
                  </div>
                  <div className={styles.referenceListContainer}>
                    <span> Useberry </span>
                    <span> Google Analytics</span>
                    <span> Heroku</span>
                    <span> Strapi</span>
                    <span> GraphQL</span>
                    <span> Angular Material UI</span>
                  </div>
                  <div className={styles.referenceListContainer}>
                    <span> React Material UI</span>
                    <span> PostgreSQL</span>
                    <span> Python</span>
                    <span> Google Play &</span>
                    <span> Google Play Testing</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {/* the entreprenuership container*/}
          {toggleState === 4 ? (
            <div className={styles.skillsContainer}>
              <div className={styles.summaryContainer}>
                <span className={styles.summaryBody}>
                  “Brilliant thinking is rare, but courage is in even shorter
                  supply than genius.” - Peter Thiel.
                  <br />
                  <br />I am exceptionally entrepreneurial and I believe this
                  augments my skills, experience and drive compared to most.
                  Being entrepreneurial allows me to design innovatively with
                  market gap opportunity and user needs. Furthermore, it keeps
                  me bold to continuously test, iterate and further develop a
                  product to its fullest potential testing - of course with a
                  lean approach.
                </span>
              </div>
              <div className={styles.containerHeight}>
                <div className={styles.line}></div>
              </div>

              <div className={styles.contentContainer}>
                <span className={styles.headingContainer}>
                  My involvement in entrepreneurship:
                </span>

                <ul className={styles.bulletList}>
                  <li>
                    Nominated for Global economic Awards Best Entrepreneur in
                    Personal Finance – 2023.
                  </li>
                  <li>
                    Nominated for the Global Economic Awards Most Innovative
                    Finance App - 2023.
                  </li>
                  <li>
                    Mail and Guardian Top 200 Young South Africans 2021 -
                    Category Entrepreneurship and Business.
                  </li>
                  <li>
                    Chairperson of University of Pretoria Entrepreneurship Club
                    2018.
                  </li>
                  <li>
                    Consultant at University of Pretoria Business Incubator 2018
                    -2019
                  </li>
                  <li>
                    Invited to the World Youth Summit to present a workshop on
                    the fourth industrial revolution 2019.
                  </li>
                  <li>
                    Global Start-Up Awards : Best Student Entrepreneur Finalist
                    2019.
                  </li>
                  <li>
                    African Entrepreneurship Awards: Sustainable Business 2019.
                  </li>
                  <li>Winner of Sage Pitching Competition 2017.</li>
                  <li>Winner of Maker Space Pitching Competition 2017.</li>
                </ul>
              </div>
            </div>
          ) : null}

          {/* refernce to my personal website stack */}

          <span className={styles.personalwebContainer}>
            <span>
              A good example of me using my favorite tools and design principles
              is demonstrated in the making this personal website.{" "}
            </span>
            <span className={homeStyles.linkTextPlainButton}>
              <a className={homeStyles.internalLink}>
                View Code <span className={homeStyles.cardIcon}> ↗</span>
              </a>
            </span>

            <button
              onClick={() => setTools(!tools)}
              className={
                tools ? homeStyles.openButton : homeStyles.closedButton
              }
            >
              Stack
              {tools ? (
                <img src="icons/less.svg" className={homeStyles.icon} />
              ) : (
                <img src="icons/more.svg" className={homeStyles.icon} />
              )}
            </button>

            {tools ? (
              <span>
                <img
                  src="tools/web-tools(df).png"
                  className={styles.imageKit}
                />

                <img
                  src="tools/web-tools(t).png"
                  className={styles.imageTabletKit}
                />
                <img
                  src="tools/web-tools(m).png"
                  className={styles.imageMobileKit}
                />
              </span>
            ) : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default SectionB;
