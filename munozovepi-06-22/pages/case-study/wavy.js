import Head from "next/head";
import homeStyles from "../../styles/structure/Homepage.module.scss";
import styles from "../../styles/pages/Casestudy.module.scss";
import React, { useState } from "react";

export default function Wavy() {
  const [problemStatement, setStatement] = useState(true);
  const [objective, setObjective] = useState(false);
  const [impact, setImpact] = useState(false);
  const [market, setMarket] = useState(false);
  const [comp, setComp] = useState(false);
  const [research, setResearch] = useState(false);
  const [findings, setFindings] = useState(false);
  const [constraints, setConstrains] = useState(false);
  const [outcomes, setOutcomes] = useState(false);
  const [principles, setPrinciple] = useState(false);
  const [requirements, setRequirements] = useState(false);
  const [process, setProcess] = useState(false);
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
        <div className={styles.screenshots}>insert screenshots</div>

        <div className={styles.title}>Title: Wavy, Should I Invest?.</div>

        <div className={styles.bodyBold}>
          Role: Product Designer.
          <br />
          Timeline: 10 August to 10 January 2021
        </div>

        <div className={styles.body}>
          So you have always wanted to start building your own investment
          portfolio. However, the process to start has always been just a little
          too intimidating?
          <br />
          <br />
          Well not to worry, Wavy is here to help you easily make informed
          investment decisions
          <br />
          How? Wavy provides you with a comprehensive summary of the key
          indicators on your investment option, this way you can easily select
          the right investments for you.
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
            From the exciting six years that I have been in the personal finance
            space, I have always been consistently asked the question, "how do I
            know what to invest in? “. I completely empathise with this
            question, because when I started investing at the age of 17, I had
            the exact same question hesitating my investing journey. There are
            so many financial products (stocks, exchange traded funds, unit
            trust etc…) to choose from. Publicly listed financial products are
            required by law to provide the public with the necessary information
            on the respective financial product, however, a lot of the
            information on financial products is intimidating or time consuming
            for the average person to process, and therefore making it
            inaccessible to most people. Without access to financial information
            that is easy to process, the everyday consumer is barred entry to
            being their own investment manager.
            <br />
            <br />
            There are a small niche of people who can circumvent this problem by
            relying on professional financial advisors who paid to process
            through the verbose financial jargon and therefore assist their
            clients with building an investment portfolio. Outside of this
            niche, the remainder of people are fully reliant on themselves to
            make the necessary investment decisions to achieve their financial
            goals. This cannot be achieved if this category of people are not
            financially educated to make the right investment decisions.
            <br />
            <br />
            This hits at the crux of the problem, only 1 in 3 adults across the
            globe are financially literate (according to S&P Global ). Financial
            illiteracy is the common denominator and sustainer of ongoing global
            social and economic problems. Wavy is designed to resolve the
            problem of financial illiteracy by providing all users with the
            tools to develop their skill set, and expand their financial
            education in order to successfully become empowered investors.
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
            The objectives of Wavy can be grouped into two main categories:
            <ol>
              <li>Develop users confidence through financial education; and</li>
              <li> Drive financial inclusion through financial education.</li>
            </ol>
            <span className={styles.bodySmallUnderline}>
              1. Develop users confidence through financial education.
            </span>
            <br />
            Wavy wants to empower users to make confident and informed financial
            decisions, particularly as it relates to investing. Wavy wants to
            ensure that users are empowered to make informed financial decisions
            that allow them to build a profitable investment portfolio. This
            breaks down to the following objectives:
            <br />
            <br />
            <ul>
              <li>Improve the user’s familiarity with the capital markets;</li>
              <li>
                Build the confidence of the user, such that they are able to
                invest in the capital markets;
              </li>
              <li>
                Aid the user in achieving their personal finance objectives,
                such as building wealth;
              </li>
              <li>Improve the user’s investment portfolio performance;</li>
              <li>
                Help improve and develop the user’s financial literacy; and
              </li>
              <li>
                Help users build, develop and maintain important financial
                habits.
              </li>
            </ul>
            <span className={styles.bodySmallUnderline}>
              2. Drive financial inclusion and subsequently facilitate
              sustainable social and economic growth.
            </span>
            <br />
            Wavy wants to ensure that through financial education, financial
            inclusion is scaled. This breaks down into the following objectives:
            <ul>
              <li>
                Wavy wants to increase consumer investment in the capital
                markets;
              </li>
              <li>
                Wavy wants to facilitate financial and economic inclusion in the
                capital markets, through investments;
              </li>
              <li>
                Wavy wants to increase the wealth in households and fight the
                growing inequality gap; and
              </li>
              <li>
                Wavy wants consumers to have knowledge to take advantage of the
                financial benefits that come with investing in the capital
                markets, such as tax breaks.
              </li>
            </ul>
            It can also be noted that both categories of the objectives of Wavy
            are all done with the intent of strengthening the capital markets,
            which plays a critical role in facilitating and ensuring sustainable
            economic growth. Therefore, it can be concluded that all of Wavy’s
            objectives can be umbrellaed under the fundamental objective of
            aiding equitable economic development.
          </span>
        ) : null}

        {/*impact statement */}
        <div>
          <button className={styles.button} onClick={() => setImpact(!impact)}>
            {impact ? (
              <img src="/score/open.png" className={styles.icon} />
            ) : (
              <img src="/score/close.png" className={styles.icon} />
            )}
            Impact
          </button>
        </div>

        {impact ? (
          <span className={styles.bodySmall}>
            In order to ensure that the objectives of Wavy are achieved, and to
            track its impact on users, the following metrics will be monitored
            and reviewed:
            <br />
            <br />
            <ol>
              <li>
                User engagement with Wavy will be tracked to ensure that the
                user is referencing the app and using it to monitor and manage
                their investments
              </li>
              <li>Users show an increase in investing activity; and</li>
              <li>
                An increase in investment activity in the South African capital
                markets can be attributed too Wavy
              </li>
            </ol>
          </span>
        ) : null}

        {/*market statement */}
        <div>
          <button className={styles.button} onClick={() => setMarket(!market)}>
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
            <span className={styles.bodySmallUnderline}>
              1. The consumer need.
            </span>
            <br />
            Wavy provides consumers with a product that targets many of their
            financial needs - in a way that many other financial products in the
            market have neglected to do.
            <br />
            <br />
            The South African consumer does not lack the enthusiasm to develop
            their personal finances, what they do lack is easy access to a
            breadth of resources that allow them to start investing their
            finances.
            <br />
            <br />
            Where consumers have access to financial advisors, they are more
            inclined to over rely on these professionals to advise and assist
            them in building an investment portfolio. This route to investing is
            not without its concerning limitations, as most financial advisors
            who operate as an extension of a financial institution have
            compromised objectives. This is because financial advisors who are
            affiliated with certain financial institutions can easily be bias
            towards certain financial products that have influence on their
            remuneration packages.
            <br />
            <br />
            It is a very limited economic class of people who can afford the
            elite range of fund managers who consider a much broader scope of
            investment options. What Wavy does, is provide everybody equal
            access to a fair assessment of all financial listed products against
            the same metrics, therefore removing any prejudicial bias.
            Furthermore, Wavy goes the extra mile by developing the user’s
            financial education so that they can competitively and comparatively
            conduct financial analysis to achieve their financial goals.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              2. The financial sector need.
            </span>
            <br />
            At face value it would appear that Wavy is competing with the role
            of financial advisors and wealth planners, and overall competing
            with the financial sector on this score. This is to the contrary, as
            Wavy is a complimentary tool that serves as an effective mediator
            between consumer and financial sector.
            <br />
            <br />
            More often than not, consumers who invest through their financial
            advisor are not anymore financially literate because of it. It could
            be argued that their financial education is even stunted as a result
            of delegating this responsibility. Furthermore, it can be found that
            this dynamic also distorts consumers impression of the the financial
            sector. For example, if the performance of the advised investment
            portfolio temporarily goes down, a financially illiterate client is
            more vulnerable in allocating the blame of such a decline on the
            financial advisor and making compromising reactive decisions about
            their investing. Using the actions discussed in this example, the
            consequences become expounded for the financial industry where
            advisors are not trusted, because consumer inclination to invest
            also becomes compromised, and therefore chips away at the target
            market of financial institutions. This said, it is not to say that
            an investor who invest unadvised are not in the same position to
            cause undue misrepresentation of the financial sector through their
            own ill-advised investing activity.
            <br />
            <br />
            A balance needs to be achieved and this is done through Wavy.
            <br />
            <br />
            Wavy develops the consumers’ trust in the financial sector, by
            providing them with full transparency on their investments in a
            format that is easy for everyday consumers to understand, whilst
            simultaneously developing the users financial education. A
            financially educated consumer is a huge asset to any financial
            institute, because such a quality client is able to grow their
            personal finances in a manner that allows them to absorb more
            financial products outside of the scope of investing, and therefore
            allowing them to increase their bottom line.
            <br />
            <br />
            What Wavy does not offer financial institutions that financial
            advisors are able to offer the financial sector, is preferential
            treatment purely on the basis of affiliation. This furthers the
            credibility of Wavy, whilst also creating a gentle motivation for
            financial institutions to launch quality and competitive financial
            products to consumers.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              3. The economic need.
            </span>
            <br />
            For sustainable economic growth in South Africa, there needs to be
            more investment in the capital markets.
            <br />
            <br />
            There have been conclusive findings from research done by global
            institutions such as the World Bank that the capital markets play a
            critical role in sustaining economic development. A strong
            correlation can be deducted between strong capital markets and
            economic development.
            <br />
            <br />
            The impact and the effect of the capital markets is advanced when
            consumers are involved as active investors in the capital markets.
            This aids financial inclusion as well as social development.
            Economic inclusion is key for any substantive and sustainable
            economic growth, but also paramount to address social issues in
            South Africa. Wavy’s main target is to address inequality that flows
            from financial exclusion. Through Wavy, consumers are able to
            develop a sense of pride as a shareholder in multinational and local
            corporations; they can feel additional excitement from developing a
            stream of passive income; and they can develop and change the public
            perception that the capital markets of South Africa are reserved for
            an exclusive elite.
            <br />
            <br />
            This restores trust between consumers and the economy and it also
            motivates users to expand their interest in economic growth and
            development. This has the additional benefit, of the consumer
            augmenting their economic consciousness and starting to adopt
            behaviours and engage in activities that better their investments
            and further their economic growth, now that they would have a
            scaling interest in the economy. In South Africa, a like many other
            countries this is of significant importance because many consumers
            feel victim to the economy and not part of the economy. Wavy changes
            this dynamic by giving consumers’ a new perception and different
            opportunities to engage in the market
          </span>
        ) : null}

        {/*market statement */}
        <div>
          <button className={styles.button} onClick={() => setComp(!comp)}>
            {comp ? (
              <img src="/score/open.png" className={styles.icon} />
            ) : (
              <img src="/score/close.png" className={styles.icon} />
            )}
            Competative Analysis
          </button>
        </div>

        {comp ? (
          <span className={styles.bodySmall}>
            The market need for a product such as Wavy can be further examined
            when comparing it too “similar” or “competing” products on the
            market. There are some financial technology (“fintech”) applications
            that are aimed at easing the process of investing in listed
            financial products for consumers. Unlike Wavy, these products are
            not designed to assist users with selecting investments that are
            compatible with their financial goals, whilst simultaneously aiding
            users in the development of their financial education.
            <br />
            <br />
            Local Fintech applications with an investing focus (outside of the
            offerings provided by South African banks).
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Easy Equities</span>
            <br />
            Easy Equities is perhaps the most recognisable platform in South
            Africa that is designed to make investing in the capital markets
            easier for consumers. Easy Equities has undeniably succeeded in
            making the costs and overall process for investing tremendously
            easy. Users can start investing with a small amount of cash, and at
            low costs. It has neatly set up user accounts so that they can
            invest in the local capital or international markets. It also gives
            the users a tax free savings account that they can utilise whilst
            investing and building their portfolio.
            <br />
            <br />
            Easy Equities was very evolutional in bringing the capital markets
            to the people by removing a lot of barriers to entry, and this has
            been acknowledged by many South Africans, who have awarded the Easy
            Equities platform with high accolade such as the MTN App of the
            Year.
            <br />
            <br />
            Easy Equity excelled in what they aimed to do and that was to give
            people easy access to invest in the capital markets. They have made
            the onboarding process much easier and user friendly, however, they
            do not address the other barrier of entry to the capital markets,
            financial literacy. Without any financial literacy consumers will
            not have the sustained motivation to create an Easy Equites’ account
            in the first place.
            <br />
            <br />
            This is why Wavy prioritises financial education as an important
            factor for sustained financial inclusion. Wavy wants to give people
            the confidence and guidance to sustain their investing in the
            capital markets and choose financial products that are compatible
            with their financial needs and circumstances.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Franc</span>
            <br />
            Franc is a platform that tries to facilitate the investment decision
            process for its users on the basis of assessing the user’s financial
            circumstances and financial objectives.
            <br />
            <br />
            Franc asks the user a series of questions and based on their
            response will recommend a financial product that they believe to be
            most compatible with the users profile. It also tries to manage the
            expectations of the user by giving the user modest projects on
            potential earnings. Franc also has the Easy Equity offering, as it
            gives the user easy access to invest in financial products.
            Furthermore, Franc’s contributions in making the capital markets
            accessible have won it similar accolades to that of Easy Equities.
            <br />
            <br />
            Where Franc can be viewed as more comparable to Wavy, it still has
            three fundamental limitations that Wavy does not.
            <br />
            <br />
            Firstly, the financial product offering of Franc is limited to a
            fixed range of financial products. This undoubtedly constraints the
            options and potential earnings for the users. In their defence it
            can be argued that Franc, is purely for beginner investors and,
            therefore, the application is not trying not to overwhelm its users
            with too many investment options. However, this arguments exposes
            the second limitation of Franc. Franc is not developed to advance
            the user’s understanding of the financial markets, and even if where
            the user develops their understanding of the financial markets Franc
            is not adaptable to meet the needs of a more advanced user. The
            final limitation of Franc is that it limits the user to having one
            type of portfolio, and not multiple portfolios that cater to the
            different investing objectives.
            <br />
            <br />
            Wavy does not share any of Franc’s limitations. Wavy is designed to
            give the user access to any publicly listed financial product and
            does not limit the financial product range or scope in this regard.
            Furthermore, Wavy is designed to build the financial literacy of the
            user, and assist them in developing their investor confidence to
            make well informed financial decisions that are compatible with
            their financial circumstances and objectives. Finally, Wavy is
            designed to grow with the user and meet their evolving needs as the
            user develops and gains a deeper understanding of the financial
            markets.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Stash (Liberty)</span>
            <br />
            Stash has quite an interesting offering compared to the above
            considered products. Stash is designed to get users involved in the
            capital markets, by investing as little as their spare change into
            the markets. The fundamental objective of Stash is to get its user
            involved in the capital markets, and show that even the smallest
            investment can go a long way. The investments are made into tax free
            saving compatible financial products. Stash allows users to invest
            in a limited scope of financial products.
            <br />
            <br />
            It is hard to levy criticism on the clear limitation of Stash which
            daily mirror that of Franc, because it is quite clear that Stash is
            not prioritising any other objective, than to get the user involved
            in investing. Stash gets its users investing in the capital markets
            with ease. That said, Stash is poorly ranked by majority of its
            users for inefficiency within the application.
            <br />
            <br />
            The primary complaint is that Stash has a delayed verification
            process, which hinders its objective of easy entering in the
            financial markets. Also several of the user feedback is not
            satisfied with the withdrawal process from the product.
            <br />
            <br />
            The process on the investments needs to be well executed. Financial
            services credibility is a key asset to retain and gain users.
            <br />
            <br />
            The above listed platforms, Easy Equities, Franc and Stash are not
            new innovations within the fintech space, as they in many ways
            emulate already successful products that had huge and rapid success
            in other international markets. <br />
            <br />
            International Fintech applications with an investing focus (outside
            of the offerings provided by banks).
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Robinhood</span>
            <br />
            Robinhood developed a range of services, but our focus is the
            investing platform that they offer their users. Robinhood allows its
            users easy entry in the capital markets by removing many of the
            traditional barriers to entry. It allows users to buy and sell a
            vast option of securities, whilst also tracking the performance of
            their portfolios. Robinhood has a wide range of investing products
            and allows its users to perform more complex transactions that often
            cannot be carried out by the other mentioned platforms in this
            study. For example Easy Equities does not allow its users to execute
            short selling investment strategies, while Robinhood does.
            <br />
            <br />
            Robinhood also allows its users to do active trading through the
            platform and this is not a feature that Wavy plans to adopt.
            Robinhood gained a lot of popularity for how it easily allows a user
            to start investing at low costs and limited paperwork. This has
            proven to be a double edged sword in certain circumstances. A lot of
            criticism has been levied at Robinhood for allowing users to make
            certain investments that were irresponsible and reckless. Robinhood
            has also been accused of gamifying investing, this has a negative
            effect and impact on the perception and reputation investing. This
            is important to note and consider whilst designing and developing
            Wavy, as Wavy wants to strengthen the credibility, understandability
            and accountability of the financial sector, not compromise it.
            <br />
            <br />
            Robinhood highlights the importance of embedding the necessary
            guards in the product through the design in order to prevent
            reckless investing that could jeopardise the reputation of the
            product and the financial sector.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Stash (USA)</span>
            <br />
            Another Stash app, with the same name and similar use as the above
            mentioned Stash. This Stash however does not have a limited
            investment offering and has gained huge popularity in North America.
            <br />
            <br />
            Stash is aimed at supporting micro-investing. This is the main focus
            of the app and therefore it does not place any emphasis on teaching
            the user about investing in the financial markets. It has the same
            limitations as Stash and Franc in this regard. Just like Franc and
            Stash it focuses on the beginner investor and is not designed to
            adapt to the users developing understanding of the financial
            markets.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Acorns</span>
            <br />
            Acorns is a high breed between Stash and Franc as we know it in
            South Africa. Acorns is a micro-investing app that like Stash allows
            users to invest as little as their spare change into the financial
            markets. In Acorns the investment is in one of five portfolios. This
            product offering is more than what Franc has, but this still limits
            the user.
            <br />
            <br />
            The argument for this limited offering is to prevent the user from
            becoming overwhelmed with the huge volume of investment options
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              Main takeaway from the comparative and competitive market
              research:
            </span>
            <br />
            <br />
            <ol>
              <li>
                A common theme with all the products that we have examined is
                that they are not designed with the user growth in mind,
                primarily because the product is not prioritising the active
                development of the users financial education. Wavy aims to be a
                flexible product that grows with the user’s understanding of the
                capital markets.
              </li>
              <li>
                The products on the market have considered how to mitigate
                overwhelming their user from the multiple investment products.
                This is done either by manually limiting the range of the
                product offering, or by using the design of the interface to
                serve as an intuitive filter that aids the users in their
                investment selection process.
              </li>
            </ol>
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
            Through the user research, we identified the types of potential
            users and their respective challenges. We analysed the categories of
            users, and their specific needs if they are to start investing with
            Wavy. The objectives that Wavy has for each category are concise.
            <br />
            <br />
            The categories of the users have been curated from years of data
            that has been reviewed and considered from my work with Kukura
            Capital, which is one of the top personal finance platforms in South
            Africa. Kukura Capital assists people with the management of their
            personal finances. The categories highlight the main users for Wavy.
            A user can, however, be a combination of the identified categories.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>The Beginner</span>
            <br />
            The Beginner is a person who wishes to start investing but does not
            have a lot of knowledge or experience in investing in the capital
            markets. A beginner is the most vulnerable user of Wavy. This is
            because they can be very susceptible in the financial sector. Due to
            their lack of experience in investing they, a) rely very heavily on
            financial advice and, b) can be more inclined to make emotional and
            inconsistent investing decisions as a result of being too reactive
            to the fluctuations that may occur in their investment portfolio.
            This may result in prematurely selling and buying investments, and
            ultimately missing out on the opportunities that are presented by
            the financial markets.
            <br />
            <br />
            The Beginner will represent a huge base of the users of Wavy, and
            therefore, Wavy is designed to prioritise their needs. However, Wavy
            will be going the extra mile by also focusing on developing them
            into an Experienced or Household investor.
            <br />
            <br />
            The main pain-points of the Beginner:
            <ul>
              <li>
                A very limited understanding of the financial markets, which
                often translates poorly uninformed financial decisions;
              </li>
              <li>
                An over dependency on financial advice due to a limited
                understanding of the financial markets;
              </li>
              <li>
                Convoluted use of financial terms and financial indicators
                easily overwhelms the user and makes the process of investing
                inaccessible;
              </li>
              <li>
                Lack of experience of the capital markets which leads to fear in
                investing; and
              </li>
              <li>
                A strong dependency on credible guidance and assistance through
                the initial process of investing, withdrawing funds, and
                building investment portfolios.
              </li>
            </ul>
            The needs of the Beginner:
            <ul>
              <li>
                Their investment options narrowed down in accordance to their
                needs, so that they are not overwhelmed and rushed into
                investment decisions;
              </li>
              <li>
                The investing pace of the Beginner needs to be managed and
                monitored to prevent bad investment decisions;
              </li>
              <li>
                Their financial needs will have to be clearly identified in
                order to find products that are compatible; and
              </li>
              <li>
                Simple language needs to be used to give them access to making
                financial decisions.
              </li>
            </ul>
            Wavy’s objectives for the Beginner:
            <ul>
              <li>
                Wavy wishes to develop the user’s understanding of the capital
                markets and how to navigate these markets for the purposes of
                investing;
              </li>
              <li>
                Wavy wants to build the confidence of the Beginner by helping
                them to build the necessary financial habits to maintain, and
                grow their personal finances;
              </li>
              <li>
                In growing the confidence of a Beginner, Wavy aims that such
                users will not be susceptible to wrong financial advice. Users
                should be able to analyse any financial products advertised to
                them; and
              </li>
              <li>
                Wavy hopes that the Beginner will be interested in their
                continuous growth and development as an investor, such that they
                evolve into a Learner and an Experienced Investor.
              </li>
            </ul>
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              The Learner Investor
            </span>
            <br />
            The Learner is a user who is committed to their continuous
            development as an investor. They are always eager to deepen their
            understanding of the capital markets and investing in such markets.
            These users want to have every possible tool in the form of
            knowledge that can give them all the benefits when building
            investment portfolios.
            <br />
            <br />
            The main paint points for the learner:
            <ul>
              <li>
                Easily accessible information about the financial markets and
                investing, this user wishes to learn more about investing, in a
                very convenient way;
              </li>
              <li>
                The information about investing needs to be designed in a format
                which enables the user to naturally progress in their learning
                process; and
              </li>
              <li>
                This user would like practical examples presented to them so
                that they can have a realistic understanding of the utilisation
                of certain financial and investment principals
              </li>
            </ul>
            The needs of the learner:
            <ul>
              <li>
                Easy access to skills development, as it pertains to selecting
                investments from the capital markets and portfolio development.
              </li>
            </ul>
            The objective of Wavy for the Learner
            <ul>
              <li>
                Aid the Learner in their development as an investor by making
                learning about the markets a convenient and exciting process.
                This can be done by introducing a reward system; and
              </li>
              <li>
                Make the learning component that Wavy has to offer attractive to
                all users of the product because learning is the best guarantee
                to ensure that the platform is effective to all its users.
              </li>
            </ul>
            <span className={styles.bodySmallUnderline}>
              Household Investor
            </span>
            <br />
            This is the person who is allocated within their household or their
            social group such as a stockvel, to manage the finances of the
            respective group. This person already has an appreciation for basic
            finance principles and for this reason wishes to further grow group
            finances through the capital markets. They can be at any range of
            the spectrum ranging from Beginner or an Experienced Investor as it
            relates to their experience as an investor in the capital markets.
            <br />
            <br />
            The characteristic that defines this group is that they are very
            observant and prudent about financial decisions and approach
            investing with this sense of responsibility and diligence.
            <br />
            <br />
            The main pain points of the Household Investor:
            <ul>
              <li>
                They do not get easy access to a comprehensive summary of the
                main deciding factors about a financial product that will allow
                them to make a confident informed decision;
              </li>
              <li>
                Convoluted presentation of information as it relates to
                financial products, whilst also simultaneously not readily
                providing critical information;
              </li>
              <li>
                Not enough readily accessible information pertaining to costs,
                risks and other key metrics which they are used to, are readily
                available on the investment products that they wish to invest
                in; and
              </li>
              <li>
                Not enough platforms that effectively consolidate learning
                materials necessary to effectively navigate investing in the
                capital markets.
              </li>
            </ul>
            The needs of the Household Investor:
            <ul>
              <li>
                A credible feature within the platform that correctly shortlists
                and filters the financial products that are most suitable for
                the user’s needs.
              </li>
            </ul>
            The objectives of Wavy for the Household Investor:
            <ul>
              <li>
                Provide the user with recommendations of financial products that
                are most compatible with their focus; and
              </li>
              <li>
                Develop the user’s understanding of financial products and the
                capital markets so that they are able to expand and fully
                optimise the offerings of investing in the capital markets.
              </li>
            </ul>
            <span className={styles.bodySmallUnderline}>
              The Experienced Investor
            </span>
            <br />
            The Experienced Investors arise as a result of one or two
            circumstances:
            <ol>
              <li> They joined the platform as an Experienced Investor; or</li>
              <li>
                They developed into an Experienced Investor as the result of
                Wavy.
              </li>
            </ol>
            In either circumstances, this user has obtained the critical
            knowledge to make the necessary financial decisions whilst building
            their investment portfolios. This is a benefit that Wavy would like
            to exploit so that it can be used to the benefit of other users of
            the platform.
            <br />
            <br />
            The objectives of the Experienced Investor:
            <ul>
              <li>
                Affordable and easy access to make investments and manage
                investment portfolios; and
              </li>
              <li>
                Access to the necessary tools to perform more complex analysis
                on financial products and investment portfolios.
              </li>
            </ul>
            The needs of the Experienced Investor:
            <ul>
              <li>
                Capacity to carry out more complex investment strategies cost
                effectively;
              </li>
              <li>
                Transfer of existing portfolios in an efficient and easy way (in
                the event that they have been manning their portfolio using
                another platform); and
              </li>
              <li>
                Efficiency on the investment process, particularly as it relates
                to verification, deposits and withdrawals.
              </li>
            </ul>
            The objectives of Wavy for the Experienced User:
            <ul>
              <li>
                Offer a smart platform that gives the user the necessary tools
                to perform the financial analysis needed to make investment
                decisions; and
              </li>
              <li>
                Provide a platform that rivals competitors in efficiency as it
                pertains to all the key steps within investing.
              </li>
            </ul>
            The Bad Investor
            <br />
            <br />
            This user is a liability and by no means not the target market for
            Wavy. This “investor” is only keen on making quick money from the
            markets. They have no regard to develop their understanding of the
            capital markets, nor have understanding of the associated risks with
            investing. This user does exist and Wavy is designed to have the
            necessary mechanisms that act as a deterrent for such users, as they
            are liability to themselves and can further cause reputational risk
            for Wavy.
            <br />
            <br />
            [Note that the objective of the Bad Investor have been omitted
            because there is no correlation that is been drawn between their
            objectives and the needs we have identified for this type of user.]
            <ul></ul>
            The needs of the Bad investor:
            <ul>
              <li>
                They need to be restricted from making investment decisions that
                are reckless through thorough pre-emptive warnings;
              </li>
              <li>
                Their needs to be limit placed on volume and frequency of their
                investing, as this may be poorly influenced by misinformed
                expectations of investing in the capital markets; and
              </li>
              <li>
                This user needs to be able to legally acknowledge accountability
                for their investment decisions and that investing is associated
                with risk.
              </li>
            </ul>
            The objective of Wavy for the Bad Investor:
            <ul>
              <li>
                Develop this user into a Learner investor and ideally further
                their development so that they become an Experienced investor;
              </li>
              <li>Help them build good sustainable investing habits; and</li>
              <li>
                Assist them in building well thought out and sustainable
                investment portfolios.
              </li>
            </ul>
          </span>
        ) : null}

        {findings ? (
          <span className={styles.bodySmall}>
            The research highlighted the following:
            <ol>
              <li>
                It is going to be key to identify the profile (such as Beginner
                Investor, or Experienced Investor) of the user at the signing up
                stage, and track their development as an investor and adjust
                their exposure to certain features offered by the platform based
                on their investment skill level.
              </li>
              <li>
                In order to ensure development of the user’s understanding of
                investing, learning will have to be an embedded feature in the
                platform.
              </li>
              <li>
                Understanding the user will be important to hedge against
                reputational risk that can arise when users make reckless
                decisions that reflect on the lack of precautionary measures on
                the platform.
              </li>
              <li>
                Credibility of information provided by the platform will be of
                great importance due to the user’s reliability on such, to make
                informed financial decisions and improve their financial
                literacy
              </li>
              <li>
                Complex information pertaining to the capital markets or
                financial products will have to be lean and easy to process, so
                that the user is not intimidated by making decisions.
              </li>
            </ol>
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
            I think that there was a lot of benefit awarded to this case study
            given it is based on feedback that has cumulated from my six years
            of experience in the personal finance industry. On this note the
            case study could have been further enriched by gathering information
            from the experience of additional professionals in the personal
            finance sector. This will definitely be introduced upon the
            development of future versions of Wavy..
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
            Conclusion
          </button>
        </div>

        {outcomes ? (
          <span className={styles.bodySmall}>
            The research shows that in order for Wavy to give a competitive and
            comprehensive offering, it needs to be developed in phases. This
            will allow for user feedback, and the necessary considerations to
            develop into the most compatible product for the objectives the
            product aims to achieve.
            <br />
            <br />
            This is often the trend for successful Fintech products that have
            managed to have long term sustainable growth. Wherever platform
            development has been rushed, user experience is compromised as well
            as the reputation of the product.
            <br />
            <br />
            Following from this, the primary focus is to safeguard the integrity
            of the user experience. In order to maintain the integrity and
            quality of Wavy, it will have to be developed from a lean minimal
            viable product to its full offering over a series of phases that
            consistently integrates user feedback, and strategically layers and
            introduces its full features and services to it users.
          </span>
        ) : null}

        <div className={styles.subtitle}>UI Design Process</div>
        {/*problem statement */}
        <div>
          <button
            className={styles.button}
            onClick={() => setPrinciple(!principles)}
          >
            {principles ? (
              <img src="/score/open.png" className={styles.icon} />
            ) : (
              <img src="/score/close.png" className={styles.icon} />
            )}
            Problem statement
          </button>
        </div>

        {principles ? (
          <span className={styles.bodySmall}>
            From the user research the following principles have been identified
            as critical to the overall design process:
            <span className={styles.bodySmallUnderline}>Accessibility</span>
            <br />
            The fundamental focus of Wavy is to make the capital markets
            accessible. This has to be an intentional design that is represented
            in the design of Wavy, along with the language and all the
            components that make it.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Responsibility</span>
            <br />
            Wavy has a duty to put in place the necessary protocols and guide
            the user through its design to make responsible investment
            decisions. At no stage should Wavy encourage or facilitate reckless
            investing where it can be avoided.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              Financial literacy
            </span>
            <br />
            The main focus and objective of Wavy is to develop the user’s
            financial literacy so that they are able to increase and develop
            their understanding of investing. This proves to be very beneficial
            as it serves as an effective tool for risk management for the user
            and the platform.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Risk Management</span>
            <br />
            It is key for the users to be protected from avoidable risks, such
            as by providing credible financial information. It is paramount to
            teach the users on how to protect their investments, and manage risk
            and any potential losses in the most effective way. Furthermore,
            there is a duty of Wavy to ensure at all times that user information
            is secured and remains confidential.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Accountability</span>
            <br />
            Wavy, to its best ability aims to protect the user and guide them to
            make responsible investing decisions. It is important that the user
            retains accountability. The user must still be aware of their
            accountability in the financial decisions that they choose as the
            decisions fully depend on them.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Credibility</span>
            <br />
            In order for many of the above mentioned principles to take effect,
            it is important that the platform remains credible. Without
            credibility being associated with the platform, it will be rendered
            ineffective. In order for many of the above mentioned principles to
            take effect, it is important that the platform remains credible.
            Without credibility being associated with the platform, it will be
            rendered ineffective.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              Understanding the User
            </span>
            <br />
            It will be very important through objective metrics to identify the
            profile for the user. This will be important to manage the risk and
            expectations of the user through the design of the platform.,
            Through this knowledge, the platform is able to remain flexible and
            adaptable. In addition, knowing the user allows us to know the scope
            and the parameters the platform can offer, and this will result in
            Wavy maintaining its integrity.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              Integrity & Transparency
            </span>
            <br />
            It is very important that Wavy maintains its integrity at all times.
            Transparency goes hand in hand with protecting integrity. Trust in
            the product will safeguard its integrity.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Efficiency</span>
            <br />
            It is very important that user experience for the investing process
            is always efficient. The process can be automated to aid the signing
            up, verification, deposit and withdrawal. The principle of
            efficiency alike the above mentioned principles is guided and
            influenced by the other principles. Efficiency will never be at the
            expense of the credibility and integrity of the platform
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>Impact</span>
            <br />
            It is important that Wavy achieves its main objectives as this will
            warrant the impact that it is aiming for. The impact will be
            measured in accordance with how much improvements and economic
            growth is achieved as a result of Wavy.
            <br />
            <br />
          </span>
        ) : null}

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
            There are many design requirements that are important to give effect
            to the design principles. The following features have been
            highlighted because they have been crafted specifically to address
            the above mentioned design principles.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>1. User Profile</span>
            <br />
            Through subjective and objective metrics the identity of the user
            will have to be determined. This is important to inform Wavy what
            scope of access they should give the user.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              2. Comprehensive Summary of the financial product.
            </span>
            <br />
            The key considerations and factors of a financial product need to be
            sufficiently and effectively communicated to the user without
            compromising the credibility of the information. This feature allows
            for Wavy to be accessible. This is also necessary to develop the
            users’ financial literacy education, in order to deepen their
            understanding pertaining too investing in the capital markets.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              3. Financial Literacy Education
            </span>
            <br />
            Learning is indirectly embedded in the platform both directly and
            indirectly. This feature will be designed to attend to direct
            learning on the platform. The feature will serve the primary
            function of improving the financial literacy of the user, and keep
            them motivated and consistent with their learning. It is to effect
            the principle of skills development, along with responsibility,
            credibility, integrity and accountability. The fundamental aim of
            Wavy is to develop its users so that they can make informed
            financial decisions. This feature priorities this objective.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              4. Portfolio management.
            </span>
            <br />
            There must be easy access for the user to manage their portfolios
            and personal finances. This features is designed to allow the user
            to be able to make as many portfolios as they wish in alignment with
            their financial objectives. This will help them organise and achieve
            their personal finance objectives.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              5. Profile Tracker.
            </span>
            <br />
            In order to ensure that the impact of Wavy is measurable, it will be
            important to manage the profile of the user. This feature will track
            the position of the user when they signed up with the platform and
            from this point track what developments occur in their personal
            finance through the usage of wavy.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              6. Automated Verification Process.
            </span>
            <br />
            One of the biggest delays that users experience when signing up for
            investing accounts, is the delay that occurs when attempting to
            verify the user. It is important that Wavy takes advantage of the
            different financial APIs that exist on the market. This will suffice
            for an efficient user experience.
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              7. An efficient onboarding and payout system.
            </span>
            <br />
            Further to the verification process, it will be important that the
            user is able to timelessly see their deposits reflected in their
            account, as well as their withdrawals. This will strengthen the
            user’s overall experience of Wavy. It is important that there be a
            dedicated feature that handles the efficiency of the onboarding
            process along with subsequent financial activities that occur
            through the platform
            <br />
            <br />
          </span>
        ) : null}
        {/*design requirements statement */}
        <div>
          <button
            className={styles.button}
            onClick={() => setProcess(!process)}
          >
            {process ? (
              <img src="/score/open.png" className={styles.icon} />
            ) : (
              <img src="/score/close.png" className={styles.icon} />
            )}
            Design Proces
          </button>
        </div>

        {process ? (
          <span className={styles.bodySmall}>
            As pointed out in the UX case study, Wavy will have to be developed
            from a lean MVP. In designing the wireframes for the this lean
            product I wanted the design to embrace the spirit of Wavy and also
            show case its potential.
            <br />
            <br />
            Wavy being such an ambitious product, striking this balance was a
            process of several design revisions and asking third parties what
            they thought about the UI design.
            <br />
            <br />
            The initial design as included below was build from the wireframe
            also include below. The objective was to keep Wavy as simple and
            minimal as possible, but still show case the potential of the
            product and build on top of this perception and design.
            <br />
            <br />
            <img src="/wavy/wavy-screen(1)" className={styles.image} />
            <br />
            <br />
            However, I felt that the initial product design did not truly
            reflect the innovation that Wavy yields. So back to the drawing
            board.
            <br />
            <br />
            The first and most visible change is the colour palette. As much as
            people loved the colour palette in the feedback that I received, I
            strongly felt that it needed to be bolder to reflect the confidence
            the platform is aiming to install in its users. I therefore went for
            a much bolder colour scheme developing from the original colour
            selection.
            <br />
            <br />
            <img src="/wavy/wavy-screen(3)" className={styles.image} />
            <br />
            <br />
            The second noticeable change in the design is the results page. I
            felt that the initial design of the results page was not reflected
            of how powerful the Wavy platform is in digesting huge volumes of
            financial data to provide the user with the necessary financial
            informatio The second noticeable change in the design is the results
            page. I felt that the initial design of the results page was not
            reflected of how powerful the Wavy platform is in digesting huge
            volumes of financial data to provide the user with the necessary
            financial information.
            <br />
            <br />
            <img src="/wavy/wavy-screen(3)" className={styles.image} />
            <br />
            <br />
            Following from this I felt that the same message had to be carried
            through the initial Wavy learning pages. It is not uncommon for
            financial technology platforms to default to a glossary page to
            distribute information, as this is the most reliable way to package
            a lot of information in a neat manner. However, I wanted the design
            to tell a story even with the learning materials on the platform.
            <br />
            <br />
            It is for this reason that the learning pages were further amended
            to correspond with the results page. Replicating the flow of the
            logic in the results page with that in the learning pages in my
            views strengthens the financial information and allows the user to
            be more receptive in adopting the financial principles being taught.
            <br />
            <br />
            These were key things considered in the revision of the UI design
            for the Wavy MVP.
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
            In alignment with the design principles and requirements which are
            aimed at ensuring that the users of Wavy develop their financial
            education whilst using the platform, the following features were
            intentionally designed with this in mind:
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              Responsive Indicators as Teachers:
            </span>
            <br />
            The circle symbols / indicators on the Wavy results page are able to
            provide the user in a non-intimidating manner important information
            about the investment asset they have searched. Furthermore, the
            information extracted and shown to the user about the investment
            option they have searched also educates them on which information
            about an asset is important. This allows them to develop as an
            investor as they can use metrics identified by Wavy as a template to
            evaluate additional assets that are not the scope of the Wavy
            platform.
            <img src="/wavy/instruction(1).png" className={styles.image} />
            <br />
            <br />
            <span className={styles.bodySmallUnderline}>
              Compounding User Knowledge Through Design.
            </span>
            <br />
            When it comes to financial information and education it is tricky to
            remain as informative and comprehensive as possible, without loosing
            the reader or consumer as a result of being too simplistic or too
            overwhelming to prejudice of the user. To strike a balance in this
            regard it is important that the design of the product serves as a
            guide for the user and helps effectively and logically navigate
            through any of the materials. In the case of Wavy this is achieved
            in the learning pages by breaking the content into three sections
            “called chapters”.
            <img src="/wavy/instruction(2).png" className={styles.image} />
            <br />
            <br />
            <img src="/wavy/instruction(3).png" className={styles.image} />
            <br />
            This is an effective approach for a number of reasons, namely in
            that:
            <ul>
              <li>
                It provides the user with a logical way to follow through the
                material;
              </li>
              <li>
                It allows the educational material to advance with the users
                developing understanding;
              </li>
              <li>
                It manages the user’s expectations in how much material and
                content they need to go through; and
              </li>
              <li>
                It breaks down the material in a way that allows it to be much
                easier to follow and process.
              </li>
            </ul>
            Initially, I consider presenting the information as a "one page
            glossary" (the initial designs have been included below). However,
            empathising with the user, particularly one who is a beginner
            investor, I could see how navigating such a volume of knowledge
            could be intimidating and overwhelming because where exactly does
            the user start? Particularly in reference to the initial design,
            there is no real indication and build up in the education material.
            <br />
            <br />
            In my experience in personal finance I have learnt the importance of
            starting from the personal finance basics when developing financial
            education material, and building on top of that in a linear matter.
            It is important that the information is connected and flows with
            each other in a complimentary manner so that the user is able to
            connect the dots and build on what they learn. Therefore, with this
            in mind, I redesigned the content and its presentation to reflect
            these teaching principles and experience.
            <br />
            <br />
            The initial design of learning page:
            <br />
            <br />
            <img src="/wavy/instruction(4).png" className={styles.image} />
          </span>
        ) : null}
      </div>
    </div>
  );
}
