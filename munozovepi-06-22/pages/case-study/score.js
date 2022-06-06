import Head from "next/head";
import homeStyles from "../../styles/structure/Homepage.module.scss";
import styles from "../../styles/pages/Casestudy.module.scss";
import React, { useState } from "react";

export default function Score() {
  const [problemStatement, setStatement] = useState(true);
  const [objective, setObjective] = useState(false);
  const [market, setMarket] = useState(false);
  const [research, setResearch] = useState(false);
  const [findings, setFindings] = useState(false);
  const [constraints, setConstrains] = useState(false);
  const [outcomes, setOutcomes] = useState(false);
  const [requirements, setRequirements] = useState(false);
  const [instruction, setInstruction] = useState(false);

  return (
    <div className={styles.page}>
      <Head>
        <title>Munozovepi Gwata </title>
        <meta
          name="Munozovepi is a product designer and developer who focuses on driving financial inclusion through digital products."
          content="Fintech Product Designer and Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.desktopContainer}>
        <div>
          <div className={styles.screenshots}>insert screenshots</div>

          <div className={styles.title}>
            Title: Score, build your credit score.
          </div>

          <div className={styles.bodyBold}>
            Role: Product Designer.
            <br />
            Timeline: 31 May to 29 October 2021
          </div>

          <div className={styles.body}>
            A good credit score is the foundation of financial success. This may
            sounds counter -intuitive considering that a credit score is built
            on your debt usage, and debt is often written off as a bad thing?
            (Please appreciate the pun).
            <br />
            <br />
            However, debt is not all bad, and this how Score helps you get your
            perfect credit score.
            <br />
            How? Score removes all the confusion, by showing you which debt is
            good, overpriced or just a bad idea.
          </div>
          <div className={styles.subtitle}>User Case Study</div>

          {/*problem statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setStatement(!problemStatement)}
            >
              {problemStatement ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              Problem statement
            </button>
          </div>

          {problemStatement ? (
            <span className={styles.bodySmall}>
              Score is a designed solution to assist users manage their debt and
              effectively build their credit score. Consumer credit in South
              Africa is at an all time high, as the pandemic worsened many
              households financial pressures. Many South Africans continue to
              struggle with managing their debt, and this year that was
              emphasised and confirmed by the Consumer Default Index of South
              Africa which shows that debt has surged to R1.9 trillion. It is
              clear that this debt is not being well managed as the chief data
              analyst of Experian South Africa confirmed that the rate in which
              South Africans defaulted on their loans substantially increased
              for the first time in the first quarter of this year. The biggest
              credit products that consumers are defaulting on are vehicle
              loans, credit cards and personal loans.
              <br />
              <br />
              Debt, when well managed can be an effective tool that consumers
              can leverage to advance and benefit their personal finances.
              However, when debt is poorly managed which is proving to be the
              current state of the consumer debt market in South Africa, it can
              have adverse effects for both consumers and the economy. The
              consumers end up compromising the integrity and development of
              their credit scores, and results financial excluding consumers.
              Financial exclusion has detrimental effects on economies as it
              scales social and economic inequality.
              <br />
              <br />
              Score is a mobile application that is designed to namely fight the
              outcome of financial exclusion, and promote and drive financial
              inclusion by offering users with an accessible debt management
              system, which is intentional about assisting the user build their
              credit score.
            </span>
          ) : null}

          {/*objective statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setObjective(!objective)}
            >
              {objective ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              Objectives
            </button>
          </div>

          {objective ? (
            <span className={styles.bodySmall}>
              The fundamental objective of Score is to prevent any furtherance
              of financial exclusion of consumers, which is a result of
              consumers being unable to effectively manage their debt.
              <br />
              <br />
              Score is designed to aid the debt management process for the user
              and subsequently improve the credit score of the user. Score is
              designed to help users incrementally achieve the perfect credit
              score and also assist the user in maintaining a good credit score.
              <br />
              <br />
              The objective of this is that with a strong credit score they are
              able to leverage good debt to advance their personal finances. The
              way Score aims on achieving this is by:
              <ul>
                <li>
                  Actively providing users with the necessary information to
                  build their credit score;
                </li>
                <li>
                  Making the process of debt management seamless and ensuring
                  that they are not overwhelmed whilst managing their debt;
                </li>
                <li>
                  Keeping the user motivated and encouraged to continue to build
                  their credit score by highlighting the benefits of a good
                  credit score;
                </li>
                <li>
                  Actively assisting the users with implementing the action
                  steps necessary to build their credit score; and
                </li>
                <li>
                  Actively assisting the users with tracking the developments in
                  their credit score.
                </li>
              </ul>
            </span>
          ) : null}

          {/*market statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setMarket(!market)}
            >
              {market ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              Market Opportunities
            </button>
          </div>

          {market ? (
            <span className={styles.bodySmall}>
              For the purposes of context, when I refer to the digital debt
              management market I am referring to digital products that are
              targeted at aiding consumers with the management of their debts.
              In this regard I am particularly focusing on the South African
              market. In this study I identified two interesting case studies
              which provide further insights on the gaps in the digital debt
              management market.
              <br />
              <br />
              <span>1. Clear Score</span>
              <br />
              <br />
              My first study was on Clear Score, and this is because Clear Score
              is perhaps the most visible digital debt management product in
              South Africa. Clear Score has a web application and mobile
              application that is available on the Android PlayStore.
              Interestingly enough, they do not have an app available from the
              Apple App Store, a problem I think can be resolved through Flutter
              app development. Clear Score provides the user with a free monthly
              credit score report which is accessible on the users profile
              through the web app or mobile app. In addition, subject to the
              users credit score it provides them with credit offers from
              different creditors.
              <br />
              Clear Score is effective in tracking the progress of its users
              credit score, but it is by no means an effective tool for active
              debt management and active credit score development. Furthermore,
              as Clear Score generates money through commissions it ,makes from
              the credit products it is able to sell to its users, this give a
              prima facie impression of conflict of interests.
              <br />
              It can be argued that by Clear Score providing its users with free
              monthly reports on their credit score, they are facilitating
              credit score development for their users. In support of this
              argument can be the fact that Clear Score also attempts to advise
              their users on what they are doing well, and further to this Clear
              Score curates articles that provide information on credit scores
              and how to build them.
              <br />
              <br />
              What Clear Score does well
              <ul>
                <li>
                  It allows the user to track the changes in their credit score;
                </li>
                <li>
                  It provides the user with tips on how to improve their credit
                  score;
                </li>
                <li>It shows the user what they doing well; and</li>
                <li>
                  It provides the user with information as to what payments they
                  have made and have not made.
                </li>
              </ul>
              Limitations of Clear Score:
              <ul>
                <li>It does not alert users to upcoming payments;</li>
                <li>
                  It does not allow the user to set targets and goals for their
                  credit score;
                </li>
                <li>
                  The representation of the tracking is unclear. For example,
                  the application will indicate that the user’s credit score has
                  gone up, but will also highlight that the credit score has
                  decreased by some points; and
                </li>
                <li>
                  New debt products are heavily marketed at the users, even
                  where users may be incompatible for the product being
                  advertised to them
                </li>
              </ul>
              The criticism of Clear Score may be unfair, as I think the focus
              of Clear Score is to provide users with a free monthly credit
              score report. Alternatively, Clear Score can be designed to assist
              users with find credit offerings? That part is not clear.
              Nonetheless, I do not think the primary focus of Clear Score is to
              aid the users in building their credit score. Therefore, I shift
              my focus to the next case study I conducted in order to identify
              the gaps in the digital debt management market.
              <br />
              <br />
              <span className={styles.bodySmallUnderline}>
                2. Debt management applications on the App stores
              </span>
              <br />
              <br />
              Alternative to Clear Score there are some digital products that
              have labelled themselves as debt management apps. Unlike Clear
              Score many of these applications have failed to pickup traction
              and interestingly enough they all have similar shortcomings.
              <br />
              <br />
              The shortcomings of these apps:
              <ul>
                <li>
                  They require that data be manually entered into the app and
                  therefore compromise the efficiency of the digital product;
                </li>
                <li>
                  The application relies on user’s input and therefore the
                  application cannot in turn provide the user with live updates
                  and this therefore hinders on the offering of the digital
                  product;
                </li>

                <li>
                  The application is poorly designed and the user interface
                  (“the UI”) adds complexity to the user experience and drives
                  the users away from the product; and
                </li>
                <li>
                  The product is over saturated with information and does not
                  utilise creative or innovative ways to represent data and
                  information, and subsequently the product becomes a deterrent
                  to the user.
                </li>
              </ul>
              <span className={styles.bodySmallUnderline}>
                Key takeaways from the markets analysis:
              </span>
              <br />
              <br />
              These two studies have allowed me to identify the overall
              shortcomings in the digital debt management market. Furthermore,
              in identifying the gaps in this market I am able to design Score
              as a direct response to these shortcomings, all with the aim of
              providing users with a product that drives a positive impact in
              their personal finances.
              <br />
              There are products in the respective app stores that try to
              facilitate active debt management. However, these products have
              failed to be successful primarily for the following reasons:
              <ul>
                <li> They rely to heavily on manual data inputs;</li>
                <li> The UI is uninspiring and overwhelming to use; and</li>
                <li>
                  {" "}
                  They do not seamlessly integrate necessary information such as
                  credit score information.
                </li>
              </ul>
              <br />
              The products in the debt management market are split between
              passive and active assistance of which does not really give the
              user a holistic experience and single platform in which that can
              effectively manage their debt. This is the gap that continues to
              exist in the debt management product market, and this is the
              problem that Score is designed to address. Target market The
              functionality of Score serves the benefit of the individual users
              who use the mobile application and also financial institutions
              whose client base broadens as more consumers have improved credit
              scores.
              <br />
              <br />
              <span className={styles.bodySmallUnderline}>Target market</span>
              <br />
              <br />
              The functionality of Score serves the benefit of the individual
              users who use the mobile application and also financial
              institutions whose client base broadens as more consumers have
              improved credit scores.
            </span>
          ) : null}

          {/*research statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setResearch(!research)}
            >
              {research ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              User Research
            </button>
          </div>

          {research ? (
            <span className={styles.bodySmall}>
              The methodology I used to conduct this user research was to engage
              in interviews with people in my network, and ask them on the
              experiences, opinion and perspectives on debt management and
              building a credit score.
              <br />
              <br />
              In doing this research I tried to ask each person whose true
              identities have been kept confidential and instead signed to a
              persona, the same set of questions. The following questions that I
              asked are:
              <ul>
                <li>What is their current understanding of credit scores?</li>
                <li>What their age?</li>
                <li>What is their highest academic qualification?</li>
                <li>What is their profession?</li>
                <li>
                  How do they use technology in their life’s to manage their
                  personal finances?
                </li>
              </ul>
              I chose these specific questions because I believed they would be
              most effective in providing the necessary information to design a
              product that has a good user experience which speaks to the needs
              of the target audience. To further achieve this target after each
              interview with the users I consolidates what I found to be their
              main pain points. This way it would be easier to identify common
              themes and patterns from the user research.
            </span>
          ) : null}

          {/*findings statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setFindings(!findings)}
            >
              {findings ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              Main Findings
            </button>
          </div>

          {findings ? (
            <span className={styles.bodySmall}>
              The user research allowed us to identify patterns which allows us
              to categories the users in the following main categories:
              <ul>
                <li>Uninformed User</li>
                <li>Overwhelmed User r</li>
                <li> Informed User</li>
                <li>Hesitant User</li>
              </ul>
              Each of the following categories has bespoke needs that have to be
              collectively considered in the design process. Even though
              distinct categories of users have been identified some users can
              be a combination of the different categories listed below.
              <br />
              The needs for each of these categories have been summarised as
              follows:
              <br />
              <br />
              <span className={styles.bodySmallUnderline}>
                Uninformed User:
              </span>{" "}
              <br />
              This user is uninformed about debt and credit scores and the
              correlation between the two and how they may have an impact on
              their personal finances. This user is looking to gain a better
              literacy about debt and credit scores. As eager as they may be to
              improve their financial literacy, it would remain important to
              present information and action plans in a simple format so that
              they do not become an Overwhelmed User.
              <br />
              <br />
              <span className={styles.bodySmallUnderline}>
                Overwhelmed User:
              </span>
              <br />
              This user feels that they have an information overload or
              information deficiency and this is playing a big role in their
              debt management and building a credit score. This user is looking
              for a simple process facilitated by a platform to manage their
              debt and their credit score as well as to develop their financial
              literacy.
              <br />
              <br />
              <span className={styles.bodySmallUnderline}>Informed User:</span>
              <br />
              This user has a good understanding and appreciation pertaining to
              building a credit score, and has in some manner built a system to
              track and manage their credit score. This user is looking for a
              tool that will bypass whatever current system they have in place
              because it proves to be more effective and efficient in managing
              their personal finances. Where this user distinctly differs from
              category a, the Overwhelmed User and b, the Informed User is that
              they are not looking to acquire further information primarily
              about debt management and credit scores. It is important to note
              that just because they have a good understanding about debt and
              credit scores, does not mean that they do not still require
              “financial literacy information”. It just means that the
              information required for this user would have to be more advanced
              and cater to their knowledge and understanding of debt and credit
              scores.
              <br />
              <br />
              <span className={styles.bodySmallUnderline}>Hesitant User:</span>
              <br />
              This user may be informed or uninformed but remains hesitant about
              debt management and building a credit score. This is mainly rooted
              in their discomfort with debt or with the use of financial
              technology. This user is mainly looking to gain their
              understanding of debt in order to build their confidence to
              explore credit financial products.
              <br />
              Furthermore, for the Hesitant User to be fully committed to using
              a product like Score they will have to be confident that the
              platform has credible and accurate information, and that the their
              data is safe and secure with the platform.
              <br />
              <br />
              <span className={styles.bodySmallUnderline}>
                Something which the research noted that may have been overlooked
                otherwise:
              </span>
              <br />
              Data security and privacy is mandated by laws, statute and public
              opinion, nonetheless the design of the product must make the user
              feel safe. It must be clear to the user at all times that their
              data is safe. This can be achieved through wording and policy or
              data security notifications, but also through things such as :
              Login and logout capacity; Easily accessible terms and conditions,
              and data policy; and Authentication checks. From the research, it
              is clear that the UI design also has an important role in making
              sure that the user feels safe when using Score.
            </span>
          ) : null}

          {/*constrains statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setConstrains(!constraints)}
            >
              {constraints ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              Constraints & Limitations
            </button>
          </div>

          {constraints ? (
            <span className={styles.bodySmall}>
              The limitations of this case study was the time frame to conduct
              the study. Ideally it would have been nice to get further feedback
              from the potential users.
              <br />
              <br />
              Provided that I had more time and the users were still available,
              I would have asked each user to go through the prototype and
              provide further feedback on what the current product design
              captured well, and what further improvements could be made.
            </span>
          ) : null}

          {/*outcomes statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setOutcomes(!outcomes)}
            >
              {outcomes ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              Outcomes
            </button>
          </div>

          {outcomes ? (
            <span className={styles.bodySmall}>
              I found that the user experience case study (“ UX case study ") to
              be exceptionally helpful in curating an effective design for
              Score. A lot of the feedback from the UX case study has been
              captured in the design process, which has been explored under the
              next section titled Score User Interface Design.
            </span>
          ) : null}

          <div className={styles.subtitle}> UI Design Process</div>

          {/*design requirements statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setRequirements(!requirements)}
            >
              {requirements ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}
              Design Requirements
            </button>
          </div>

          {requirements ? (
            <span className={styles.bodySmall}>
              With full regard of the findings that were extracted from the UX
              case study the following design requirements have been identified
              as essential for Score:
              <br />
              <ul>
                <li>
                  A feature that allows users to ask any questions they may have
                  about debt and credit scores;
                </li>
                <li>
                  A feature that provides the user to develop an understanding
                  of debt fundamentals;
                </li>
                <li>
                  A feature that helps the user feel calm and in control of
                  their personal finances, irrespective of the status of their
                  personal finances;
                </li>
                <li>
                  A feature that allows the user to remain confident that their
                  data is safe and remains confidential; and
                </li>
                <li>
                  A feature that allows the user to track their progress as it
                  relates to debt management and improving their credit score;
                </li>
              </ul>
              <span className={styles.bodySmallUnderline}>
                Fundamental Design Requirement For Score.
              </span>
              <br />
              <br />
              Nurturing and accepting the relationship between money and
              emotions through design. A common trend in Fintech UI design, is
              an acceptance that money influences the users emotions ,and
              therefore the design of the Fintech product needs to be well
              positioned to mediate and manage this relationship. A common way
              to do this is to humanise and socialise Fintech apps with emoji’s
              and pop up messages and alerts that actively manage the emotions
              of the user. These features have been included in the design of
              Score.
              <br />
              <br />
              <img src="/score/Screens.png" className={styles.image} />
              <br />
              <br />
              Furthermore, the selected colours and typography included in the
              design are strategic, so that Score can successfully keep the
              users motivated and calm throughout their experience with Score.
            </span>
          ) : null}

          {/*instruction statement */}
          <div>
            <button
              className={styles.button}
              onClick={() => setInstruction(!instruction)}
            >
              {instruction ? (
                <img src="/score/open.png" className={styles.icon} />
              ) : (
                <img src="/score/close.png" className={styles.icon} />
              )}{" "}
              Instructional Design
            </button>
          </div>

          {instruction ? (
            <span className={styles.bodySmall}>
              <span className={styles.bodySmallUnderline}>
                When the Homescreen becomes the teacher:
              </span>
              From extensive research and my experience in personal finance I
              confirmed a pattern of steps that needs to be followed and
              repeated in order to build and maintain a good credit score. This
              pattern can be identified as:
              <ul>
                <li>Reducing personal debt</li>
                <li>Paying debts on time</li>
                <li>Leveraging credit</li>
              </ul>
              Reflecting this in the design of the home screen effectively
              communicates and teaches the users the necessary ingredients for a
              good credit score. By the user clicking on these debt management
              principles presented in the form of a feature they are able to get
              further context and education on it, as shown in the example
              below. What I love about this paring between education and design
              is that it allows the user to comfortably transition from theory
              to practice.
              <br />
              <br />
              <img
                src="/score/Instructional-design(1).png"
                className={styles.image}
              />
              <br />
              <br />
              Design is used in the onboarding process to educate the user with
              foundational information about credit scores and debt management.
              The design in this context is structured to give the user
              fundamental education about credit scores and debt management,
              whilst refraining from overwhelming them. This is done by keeping
              the content lean, but also relatable and accesible through a
              design that is vibrant in colour, and friendly through strategic
              use of recognisable emojis and other icons.
              <br />
              <br />
              <img
                src="/score/Instructional-design(2).png"
                className={styles.image}
              />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
