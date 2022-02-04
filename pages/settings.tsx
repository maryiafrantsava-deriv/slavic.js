import Head from "next/head";
import Heading from "../components/Heading";
import DarkMode from "../components/Settings/DarkMode";
import SizeSelect from "../components/Settings/SizeSelect";

const Settings = () => (
    <>
        <Head>
            <title>Settings</title>
        </Head>
        <Heading text="Settings: " />
        <Heading text="- choice of qr code size" />
        <SizeSelect />
        
        <Heading text="- dark/light theme" />
        <DarkMode />
        <Heading text="- possibility to add more contact fields if needed" />
    </>
);

export default Settings;
