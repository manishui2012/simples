import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slickexmple = () => {
    var settings = {
        dots: true,
        arrows: false,
        className: "center",
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      };
  return (
    <>
        <div className="gc_vid_sldr">
            <Slider {...settings}>
                <div className="gc_vd_itm">
                    <img src={process.env.PUBLIC_URL + '/images/topstries_1.png'} alt="" />
                    <p>ok okkkkkkk Hi content how are you , I am fine okay thanks.</p>
                </div>
                <div className="gc_vd_itm">
                    <img src={process.env.PUBLIC_URL + '/images/topstries_1.png'} alt="" />
                    <p>ok okkkkkkk Hi content how are you , I am fine okay thanks.</p>
                </div>
                <div className="gc_vd_itm">
                    <img src={process.env.PUBLIC_URL + '/images/topstries_1.png'} alt="" />
                    <p>ok okkkkkkk Hi content how are you , I am fine okay thanks.</p>
                </div>
                <div className="gc_vd_itm">
                    <img src={process.env.PUBLIC_URL + '/images/topstries_1.png'} alt="" />
                    <p>ok okkkkkkk Hi content how are you , I am fine okay thanks.</p>
                </div>
                <div className="gc_vd_itm">
                    <img src={process.env.PUBLIC_URL + '/images/topstries_1.png'} alt="" />
                    <p>ok okkkkkkk Hi content how are you , I am fine okay thanks.</p>
                </div>
            </Slider>
        </div>
    </>
  )
}

export default Slickexmple
