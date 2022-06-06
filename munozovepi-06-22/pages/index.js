import Head from "next/head";
import Image from "next/image";
import SectionA from "../components/Homepage/sectionA";
import SectionB from "../components/Homepage/SectionB";
import SectionC from "../components/Homepage/SectionC";
import styles from "../styles/Home.module.scss";
import homeStyles from "../styles/structure/Homepage.module.scss";

export default function Home() {
  return (
    <div className={homeStyles.homePage}>
      <Head>
        <title>Munozovepi Gwata </title>
        <meta
          name="Munozovepi is a product designer and developer who focuses on driving financial inclusion through digital products."
          content="Fintech Product Designer and Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={homeStyles.desktopContainer}>
          <SectionA />
        </div>

        <div>
          <SectionB />
        </div>

        <div>
          <SectionC />
        </div>
      </div>
    </div>
  );
}
