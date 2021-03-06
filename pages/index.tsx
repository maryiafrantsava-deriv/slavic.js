import Head from 'next/head';
import { FC } from 'react';
import Form from '../components/FormQR/FormQR';
import styles from '../styles/VCard.module.scss';

const VCard: FC = () => (
    <div className={styles.wrapper}>
        <Head>
            <title>VCARD</title>
        </Head>
        <Form/>
    </div>
);

export default VCard;