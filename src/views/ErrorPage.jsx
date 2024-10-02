import { Link } from 'react-router-dom';
import '../assets/Stylesheet/scss/views/_error-page.scss';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Error 404</h1>
            <p>La página que buscas no existe</p>
            <Link to="/" className="link">Volver a la página principal</Link>
        </div>
    );
}

export default ErrorPage;
