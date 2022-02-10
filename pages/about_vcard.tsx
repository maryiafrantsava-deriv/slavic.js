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
                      <p className={styles.optionsVCard_value}>version: '3.0',</p>
                      <p className={styles.optionsVCard_value}>lastName: string,</p>
                      <p className={styles.optionsVCard_value}>firstName: string,</p>
                      <p className={styles.optionsVCard_value}>nickname: string,</p>
                      <p className={styles.optionsVCard_value}>organization: string as company,</p>
                      <p className={styles.optionsVCard_value}>workPhone: string as phone,</p>
                      <p className={styles.optionsVCard_value}>homePhone: string as mobile,</p>
                      <p className={styles.optionsVCard_value}>workFax: string as fax,</p>
                      <p className={styles.optionsVCard_value}>birthday: string,</p>
                      <p className={styles.optionsVCard_value}>title: string as your job,</p>
                      <p className={styles.optionsVCard_value}>workEmail: string as email,</p>
                      <p className={styles.optionsVCard_value}>workUrl: string as website,</p>
                      <p className={styles.optionsVCard_value}>
                          workAddress: object as city, zip, state, country, street,
                      </p>
                      <p className={styles.optionsVCard_value}>socialUrls: object as linkedIn and github</p>
                  </div>
              </div>
          </div>
      </>
  );};
  
  export default AboutVCard;