import '../../../assets/Stylesheet/scss/views/components/home/_footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Tu Academia de Idiomas. Todos los derechos reservados.</p>
                <ul className="social-media">
                <li><a href="#" aria-label="Facebook">Facebook</a></li>
                <li><a href="#" aria-label="Twitter">Twitter</a></li>
                <li><a href="#" aria-label="Instagram">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
