import homeStyles from "../../styles/structure/Homepage.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={homeStyles.emptyLastRow}></div>
      <div className={homeStyles.dividerFull}></div>
      <div className={homeStyles.caption}>
        © 2022 Munozovepi.com, All rights are reserved.
      </div>
    </div>
  );
};

export default Footer;
