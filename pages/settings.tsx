import Heading from "../components/Heading";
import styles from "../styles/Settings.module.scss"
import DarkMode from "../components/Settings/DarkMode";
import SizeSelect from "../components/Settings/SizeSelect";
import FieldsSelect from "../components/Settings/FieldsSelect"

const Settings = () => (
    <div className={styles["settings-wrapper-main"]}>
        <div className={styles["settings-wrapper"]}>
            <div className={styles.setting}>
                <Heading text="Choose theme:" />
                <DarkMode />
            </div>
            <div className={styles.setting}>
                <Heading text="Additional fields:" />
                <FieldsSelect />
            </div>
            <div className={styles.setting}>
                <Heading text="QR code size:" />
                <SizeSelect />
            </div>
        </div>
    </div>
);

export default Settings;
