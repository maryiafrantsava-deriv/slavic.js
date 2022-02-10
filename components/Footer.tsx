import { useContext } from "react";
import styles from "../styles/Footer.module.scss";
import Heading from "./Heading";
import { FC } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer: FC = () => {
    const { active_theme } = useContext(ThemeContext);

    return (
    <footer className={active_theme === 'light' ? styles["footer-text"] : styles["footer-light"]}>
        <Heading tag="h2" text="Created by: Nikita Maryia"/>
    </footer>
)};
  
  export default Footer;