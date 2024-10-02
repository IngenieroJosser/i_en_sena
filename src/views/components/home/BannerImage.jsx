import '../../../assets/Stylesheet/scss/views/components/home/_bannerImage.scss'

import img1 from '../../../assets/img/1.jpg'
import img2 from '../../../assets/img/2.jpg'
import img3 from '../../../assets/img/3.jpg'
import img4 from '../../../assets/img/4.jpg'
import img5 from '../../../assets/img/5.jpg'
import img6 from '../../../assets/img/6.jpg'

const BannerImage = () => {
    return(
        <section className='flex-img'>
            <img src={img1} alt="Imagen 1 del banner" />
            <img src={img2} alt="Imagen 2 del banner" />
            <img src={img3} alt="Imagen 3 del banner" />
            <img src={img4} alt="Imagen 4 del banner" />
            <img src={img5} alt="Imagen 5 del banner" />
            <img src={img6} alt="Imagen 6 del banner" />
        </section>
    );
}

export default BannerImage