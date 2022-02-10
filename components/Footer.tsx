import { FC, useContext } from "react";
import Heading from "./Heading";
import Image from "next/image";
import ThemeContext from "../context/ThemeContext";
import styles from "../styles/Footer.module.scss";

const Footer: FC = () => {
    const { active_theme } = useContext(ThemeContext);
    const photoSize = 60;

    return (
    <footer className={active_theme === 'light' ? styles["footer-text"] : styles["footer-light"]}>
    <div className={styles.mainContainerDevelopers}>
        <Heading tag="h2" text="Implemented by: "/>
        <div className={styles.containerDeveloper}>
            <Image 
                    className={`${styles.containerDeveloper_image} ${styles.shake}`}
                    src="/images/developer_1.png"  
                    width={photoSize} 
                    height={photoSize}
                    alt="photo-of-developer-Maryia"
                    title="Maryia Frantsava"
                    placeholder="blur"
                    blurDataURL="Maryia" 
                />
            <Heading tag="h2" text="Maryia"/>
        </div>
        <div className={styles.containerDeveloper}>
            <Image 
                    className={styles.containerDeveloper_image}
                    src="/images/developer_2.png"  
                    width={photoSize} 
                    height={photoSize}
                    alt="photo-of-developer-Nikita"
                    title="Nikita Zhavoronkov"
                    placeholder="blur" 
                    blurDataURL="Nikita"
                />
            <Heading tag="h2" text="Nikita"/>
        </div>
    </div>
        <Heading tag="h2" text="Hackathon 02, 2022 ©Deriv"/>
    </footer>
)};
  
  export default Footer;