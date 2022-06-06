import homeStyles from "../../styles/structure/Homepage.module.scss";
import React, { useState } from "react";
import styles from "../../styles/structure/SectionC.module.scss";
import Link from "next/link";

const SectionC = () => {
  const [experience, setExperience] = useState(false);
  const [tools, setTools] = useState(false);
  const [impact, setImpact] = useState(true);

  return (
    <>
      <div className={homeStyles.pageRow}>
        <div className={homeStyles.leftColumn}>
          <div className={homeStyles.column}>
            <span className={styles.subheading}> Other projects</span>

            {/* first card */}
            <div className={styles.cardBox}>
              <div className={styles.imageBox}>
                <img src="score/thumbnail.png" className={styles.thumbnail} />
              </div>
              <div className={styles.contentBox}>
                {" "}
                Score | Helping you build your credit score whilst helping you
                manage your debt.
                <span className={homeStyles.linkTextPlainButton}>
                  <Link href="case-study/score">
                    <a className={homeStyles.internalLink}>
                      Full Case Study{" "}
                      <span className={homeStyles.cardIcon}> ↗</span>
                    </a>
                  </Link>
                </span>
              </div>
            </div>

            {/* second card */}

            <div className={styles.cardBox}>
              <div className={styles.imageBox}>
                <img src="wavy/thumbnail-1.png" className={styles.thumbnail} />
              </div>
              <div className={styles.contentBox}>
                {" "}
                Wavy | Your digital financial friend that will help you
                determine if you should invest?
                <span className={homeStyles.linkTextPlainButton}>
                  <Link href="case-study/wavy">
                    <a className={homeStyles.internalLink}>
                      Full Case Study{" "}
                      <span className={homeStyles.cardIcon}> ↗</span>
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={homeStyles.rightColumn}>
          <span className={styles.subheading}>
            Now that we have met,
            <span className={styles.subheadingHighlighted}>
              {" "}
              you can call Muno. I would love if we connected.
            </span>
          </span>

          {/*contact form */}

          <div className={styles.formBox}>
            <form
              target="_blank"
              action="https://formsubmit.co/muno.gwata@gmail.com"
              method="POST"
              className={styles.form}
            >
              <input
                type="hidden"
                name="_subject"
                value="New submission from Personal Website!"
              ></input>
              <span className={styles.inputRow}>
                <span className={styles.inputLabel}>Name:</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Please provide your name"
                  required
                  className={styles.input}
                ></input>
              </span>
              <span className={styles.inputRow}>
                <span className={styles.inputLabel}>Email:</span>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Please provide your email address"
                  required
                ></input>
              </span>
              <span>
                <textarea
                  className={styles.inputMessage}
                  placeholder="Please type your message here"
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </span>
              <span>
                <button type="submit" class={styles.submitButton}>
                  Submit Form
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionC;
