import Header from './components/home/Header';
import ScreenBig from './components/home/ScreenBig';
import BannerPresentationHome from './components/home/BannerPresentationHome';
import BannerImage from './components/home/BannerImage'
import AboutUs from './components/home/AboutUs';
import Courses from './components/home/Courses';
import FAQ_ from './components/home/FAQ';
import Blog from  './components/home/Blog';
import Footer from './components/home/Footer';


const Home = () => {
    return (
        <>
            <Header />
            <ScreenBig />
            <BannerPresentationHome />
            <BannerImage />
            <AboutUs />
            <Courses />
            <FAQ_ />
            <Blog />
            <Footer />
        </>
    );
}

export default Home;