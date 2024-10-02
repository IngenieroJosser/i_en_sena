import '../../../assets/Stylesheet/scss/views/components/home/_courses.scss'

const Courses = () => {
    const courses = [
        { name: 'Inglés', level: 'Principiante' },
        { name: 'Español', level: 'Intermedio' },
        { name: 'Francés', level: 'Avanzado' },
    ];
    
    return (
        <section className="courses">
            <h2>Nuestros <h1>Cursos</h1></h2>
            <ul>
            {courses.map((course, index) => (
                <li key={index}>
                    <h3>{course.name}</h3>
                    <p>Nivel: {course.level}</p>
                </li>
            ))}
            </ul>
        </section>
    );
}

export default Courses