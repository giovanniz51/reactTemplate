import React from "react";
import Slider from "react-slick";


const GianniSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000
    }

    const sliderImages = [
        {
            name: "Macbook & Coffee",
            url: "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            name: "Macbook",
            url: "https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    ]

    const renderSlider = () => {
        return sliderImages.map( (item, i) => {
            return (
                <div key={i}>
                    <div style={{ height: "600px", backgroundImage: `url(${item.url})`, backgroundSize: "cover"}}>
                    </div>
                </div>
            )
        } )
    }

    return(
        <Slider {...settings}>
            {renderSlider()}
        </Slider>
    )
}

export default GianniSlider;