import Head from 'next/head';
import Heading from '../components/Heading';
import DarkMode from '../components/DarkMode';

const Settings = () => (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Heading text='Settings: '/>
        <Heading text='- choice of qr code size'/>
        <Heading text='- possibility to add more contact fields if needed'/> 
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Heading text='- dark/light theme'/>
          <DarkMode />
        </div>

    </>
    );
  
  export default Settings;