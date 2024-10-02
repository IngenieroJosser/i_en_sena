import '../../../assets/Stylesheet/scss/views/components/home/_bannerPresentationHome.scss';
import image from '../../../assets/img/contenido informativo1.jpg'

const BannerPresentationHome = () => {
    return (
        <section className='flex-content-presentation'>
            <img src={image} alt='image 1' />

            <div className="banner-content">
                <h1>Cursos Interactivos</h1>
                <p>Descubre nuestros cursos interactivos diseñados para ayudarte a aprender de manera efectiva y divertida. Nuestros métodos incluyen prácticas, juegos y ejercicios que facilitan el aprendizaje.</p>
                <button>Leer más</button>
            </div>
        </section>
    );
}

export default BannerPresentationHome;
