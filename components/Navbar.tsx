import { useRouter } from "next/router";
import Link from "next/Link";
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';

const navigation = [
    { id: 1, title: 'VCard', path: '/' },
    { id: 2, title: 'Settings', path: '/settings' },
    { id: 3, title: 'About VCard', path: '/about_vcard' },
  ];

const Navbar = () => {
    const {pathname} = useRouter();
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logo.svg" width={60} height={60} alt="VCard logo"/>
            </div>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                      <a className={pathname === path ? styles.active : ''}>{title}</a>
                    </Link>  
                ))}
            </div>
        </nav>
    )
}

export default Navbar;