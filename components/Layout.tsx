
import { FC, ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

type layoutProps = {
    children: ReactNode,
  }

const Layout:FC<layoutProps> = ({children}) => {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', theme || 'light');
  }, [])

  return (
    <>
    <Header/>
        {children}
    <Footer/>
    </>
)};
  
  export default Layout;