import Head from 'next/head';
import Heading from "../components/Heading";
const Settings = () => (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Heading text="Settings: "/>
        <Heading text="- choice of qr code size"/>
        <Heading text="- possibility to add more contact fields if needed"/>
        <Heading text="- dark/light theme"/>
    </>
    );
  
  export default Settings;