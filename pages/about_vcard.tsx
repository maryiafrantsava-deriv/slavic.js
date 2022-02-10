import Head from "next/head";
import { useContext } from "react";
import { FC } from "react";
import ThemeContext from "../context/ThemeContext";
import styles from '../styles/AboutVCard.module.scss';

const AboutVCard:FC = () => {
  const { active_theme } = useContext(ThemeContext);

  return (
      <>
          <Head>
              <title>AboutVCard</title>
          </Head>
          <div className={styles.containerAboutVCard}>
              <div>
                  <p>This implementation allows you to generate QR code and create vCard contact.</p>
                  <p>USAGE:</p>
                  <div className={styles.containerAboutVCard_content}>
                      <p>1) Take a cell phone with a camera</p>
                      <p>2) Run the program to scan the code</p>
                      <p>3) Point your camera lens at the code</p>
                      <p>4) Get a vCard contact information!</p>
                  </div>
              </div>
              <div className={styles.containerAboutVCardSecond}>
                  <p>Options VCard: </p>
                  <div
                      className={
                          active_theme === "light"
                              ? `${styles.optionsVCard} ${styles.containerAboutDark}`
                              : `${styles.optionsVCard} ${styles.containerAboutLight}`
                      }
                  >
                  </div>
              </div>
          </div>
      </>
  );};
  
  export default AboutVCard;