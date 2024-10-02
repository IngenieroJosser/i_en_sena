import '../../../assets/Stylesheet/scss/views/components/home/_blog.scss'

const Blog = () => {
    const posts = [
        { title: 'Consejos para aprender inglés rápido', date: '01/09/2024' },
        { title: 'La importancia del lenguaje de señas en la educación', date: '15/09/2024' },
    ];

    return (
        <section className="blog">
        <h2>Blog</h2>
        <ul>
            {posts.map((post, index) => (
            <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
            </li>
            ))}
        </ul>
        </section>
    );
};

export default Blog;
