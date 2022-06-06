import homeStyles from "../../styles/structure/Homepage.module.scss";
import React, { useState } from "react";

const SideSection = () => {
  const [experience, setExperience] = useState(false);
  const [tools, setTools] = useState(false);
  const [impact, setImpact] = useState(true);

  return (
    <>
      <div className={homeStyles.sideSectionBox}>
        <span className={homeStyles.sideHeading}>
          Latest passion project (ongoing)
        </span>
        <span className={homeStyles.sideImage}>
          <img
            src="/sectionb/astute-design.png"
            className={homeStyles.imageSideBar}
          />
        </span>
        <span className={homeStyles.sideBarTitle}>
          Using a design system to build a personal finance ecosystem
        </span>
        <span className={homeStyles.sideBarTagline}>
          Make Keep and Grow you Money
        </span>

        {/* Impact button */}
        <span className={homeStyles.sideBarContent}>
          <button
            onClick={() => setImpact(!impact)}
            className={impact ? homeStyles.openButton : homeStyles.closedButton}
          >
            Impact
            {impact ? (
              <img src="icons/less.svg" className={homeStyles.icon} />
            ) : (
              <img src="icons/more.svg" className={homeStyles.icon} />
            )}
          </button>
          {impact ? (
            <span className={homeStyles.sidebarBody}>
              I am driven to make an impact, and I have managed to pursue this
              through the social start-up I started at 19 years old. I started
              and continue to manage a personal finance fintech that has been
              featured in Daily Finance UK (2021), listed in the Mail and
              Guardian Top 200 South Africans (2021) and a finalist as one of
              the best student start-ups in the Global Start-up Awards Southern
              Africa (2018). These are some of the accolades the project I
              started has garnered for its social impact in developing users
              understanding of financial literacy, whilst also improving the
              health of their personal finances.
            </span>
          ) : null}
        </span>

        {/* Experience button */}
        <span className={homeStyles.sideBarContent}>
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
            <span className={homeStyles.sidebarBody}>
              With Astute, a new project of Kukura Capital, I have been able to
              affirm my design principles and patterns that I have established
              over the past 6 years. More so I am able to apply them with
              confidence to easily design for agile and scalable development of
              high quality digital products. Furthermore, this project has
              allowed me to continue to refine my mobile development
              competencies as a flutter developer and stay in tune with best
              practices and updates, such as the new Material Design 3 release.
            </span>
          ) : null}
        </span>

        {/* Tools button */}
        <span className={homeStyles.sideBarContent}>
          <button
            onClick={() => setTools(false)}
            className={
              tools ? homeStyles.openButton : homeStyles.closedButtonHidden
            }
          >
            Tools
            {tools ? (
              <img src="icons/less.svg" className={homeStyles.icon} />
            ) : (
              <img src="icons/more.svg" className={homeStyles.icon} />
            )}
          </button>
          {tools ? (
            <span className={homeStyles.sidebarBody}>Insert tools</span>
          ) : null}
        </span>
      </div>
    </>
  );
};

export default SideSection;
