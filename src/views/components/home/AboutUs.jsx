import '../../../assets/Stylesheet/scss/views/components/home/_abooutUs.scss'
import imgAbout from '../../../assets/img/11.jpg'

const AboutUs = () => {
    return (
        <section className="aboutUs-content">
            <h2>Acerca <strong className="of">de</strong> <strong className='we'>nosotros</strong> </h2>
            <p>En <b>Idiomas en señas</b> somos una academia comprometida con la inclusión y la accesibilidad en el aprendizaje de idiomas. Nos especializamos en ofrecer cursos de inglés, español y francés con un enfoque único: la enseñanza a través de lenguajes de señas. Creemos que el aprendizaje de nuevos idiomas debe estar al alcance de todos, por lo que diseñamos programas accesibles que permiten a personas sordas o con dificultades auditivas comunicarse y aprender de manera efectiva.</p>
        
            <div className="content-other-some">
                <img src={imgAbout} alt="Imagen de personas  sordas en una clase de inglés con el profesor y la CEO de la empresa" />
            </div>
        </section>
    )
}

export default AboutUs 