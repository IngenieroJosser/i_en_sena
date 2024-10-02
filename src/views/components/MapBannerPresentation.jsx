import ArrayBannerPresentationHome from "./ArrayBannerPresentationHome";
import BannerPresentationHome from "../components/home/BannerPresentationHome";

import '../../assets/Stylesheet/scss/views/components/home/_bannerPresentationHome.scss';

const MapBannerPresentation = () => {
    return (
        <div>
            {ArrayBannerPresentationHome.map((item, index) => (
                <BannerPresentationHome 
                key={index} 
                title={item.title} 
                description={item.description} 
                image={item.image} />
            ))}
        </div>
    );
}

export default MapBannerPresentation;