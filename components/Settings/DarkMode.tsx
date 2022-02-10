import styles from '../../styles/DarkMode.module.scss';
import { MouseEventHandler, useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const DarkMode = () => {
    const { setActiveTheme, active_theme } = useContext(ThemeContext);

    const getDefaultChecked = () => {
      if (typeof window !== 'undefined') {
        return (!localStorage.getItem('theme')) ? false : localStorage.getItem('theme') !== 'light';
  
      }
    }

    const setTheme = (theme: string) => {
      localStorage.setItem('theme', theme);
      setActiveTheme(theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
    
    const toggleTheme: MouseEventHandler<HTMLInputElement> = (e) => {
      const target = e.target as HTMLInputElement;
      (target.checked) ?  setTheme('dark') :  setTheme('light');
    };

    return (
      <div className={styles['toggle-theme-wrapper']}>
        <span>🌒</span>
        <label className={styles['toggle-theme']} htmlFor='checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            defaultChecked={getDefaultChecked()}
            onClick={toggleTheme}
          />
          <div className={styles['slider']}></div>
        </label>
        <span>☀️</span>
      </div>
    );
  };

export default DarkMode;
