import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/Stylesheet/scss/views/components/home/_header.scss';
import logo from '../../../assets/img/Logomenu2.svg';
import changeTheme from '../../../assets/img/night-mode.png';
import language from '../../../assets/img/language.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Función para abrir/cerrar el menú
    const toggleMenu = () => {
        console.log("Menu toggled");
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <img src={logo} alt="logo" />

            <div className='settings-header'>
                <img src={changeTheme} alt="change theme" />
                <img src={language} alt="language" />
            </div>

            <div className='menu-toggle' onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <Link to="/" className='btn'><li>Inicio</li></Link>
                    <Link to="/about" className='btn'><li>Acerca de nosotros</li></Link>
                    <Link to="/services" className='btn'><li>Servicios</li></Link>
                    <Link to="/contact" className='btn'><li>Contacto</li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
