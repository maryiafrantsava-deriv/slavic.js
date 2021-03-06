import Head from "next/head";
import { useContext } from "react";
import { FC } from "react";
import ThemeContext from "../context/ThemeContext";
import styles from '../styles/AboutVCard.module.scss';
import { options_qr, about_vcard_qr } from "../utils/options_qr";

const AboutVCard:FC = () => {
  const { active_theme } = useContext(ThemeContext);
    const options = options_qr.map((item) => {
        return (
            <div key={item.id}>
                <p className={styles.optionsVCard_value}>{item.name}</p>
            </div>
        )
    });

  return (
    <>
        <Head>
            <title>About VCard</title>
        </Head>
        <div className={styles.containerAboutVCard}>
            <div className={styles.containerAboutVCardFirst}>
                <p>This implementation allows you to generate QR code and create vCard contact.</p>
                <p>USAGE:</p>
                <div className={styles.containerAboutVCard_content}>
                    { about_vcard_qr.map((item) => ( <div key={item.id}><p>{item.name}</p></div> ))}
                </div>
            </div>
            <div className={styles.containerAboutVCardSecond}>
                <p>Options VCard: </p>
                <div 
                    className={
                          active_theme === "light"
                              ? `${styles.optionsVCard} ${styles.containerAboutDark}`
                              : `${styles.optionsVCard} ${styles.containerAboutLight}`
                    }>
                    <code>
                        {options}
                    </code>
                </div>
            </div>
        </div>
    </>
    )
};
  
  export default AboutVCard;