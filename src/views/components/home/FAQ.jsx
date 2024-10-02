import '../../../assets/Stylesheet/scss/views/components/home/_FAQ.scss'

const FAQ_ = () => {
    const faqs = [
        { question: '¿Cómo me inscribo en un curso?', answer: 'Puedes inscribirte a través del formulario de inscripción.' },
        { question: '¿Ofrecen clases en línea?', answer: 'Sí, todos nuestros cursos están disponibles en formato en línea.' },
    ];

    return (
        <section className="faq">
            <h2>Preguntas <h1>Frecuentes</h1></h2>
            <ul>
                {faqs.map((faq, index) => (
                <li key={index}>
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                </li>
                ))}
            </ul>
        </section>
        );
};

export default FAQ_;