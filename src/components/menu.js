import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Styles from '../styles/menu.module.css';

const Menu = () => {
  const button = useRef();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (opened && event.target.parentNode !== button.current) {
        setOpened(false);
      }
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick);
  }, [opened]);

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <h1>TODO</h1>
        <button type="button" ref={button} onClick={() => setOpened(true)} className={Styles.button}>
          <FaBars />
        </button>
        <ul className={opened ? `${Styles.list} ${Styles.visible}` : Styles.list}>
          <li><Link to="/">List</Link></li>
          <li><Link to="/add">Add</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
