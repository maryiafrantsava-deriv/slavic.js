import Heading from "../components/Heading";
import styles from "../styles/Settings.module.scss"
import DarkMode from "../components/Settings/DarkMode";
import SizeSelect from "../components/Settings/SizeSelect";
import FieldsSelect from "../components/Settings/FieldsSelect"

const Settings = () => (
    <div className={styles["settings-wrapper"]}>
        <Heading text="Choose theme:" />
        <DarkMode />
        <Heading text="Additional fields:" />
        <FieldsSelect />
        <Heading text="QR code size:" />
        <SizeSelect />
    </div>
);

export default Settings;
