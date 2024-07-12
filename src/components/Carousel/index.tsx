"use client";

import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import Card from "../Card";
import 'react-multi-carousel/lib/styles.css';
import { Button } from "react-bootstrap";
import Head from "next/head";

const CardCarousel = ({data}: any) => {



  return (
    <>
     {data && <Carousel
         additionalTransfrom={0}
         arrows
         autoPlaySpeed={3000}
         centerMode={false}
         className="w-[90vw] md:w-[86vw] flex justify-between"
         containerClass="container-with-dots"
         dotListClass=""
         focusOnSelect={false}
         infinite
         itemClass=""
         keyBoardControl
         minimumTouchDrag={80}
         pauseOnHover
         renderArrowsWhenDisabled={false}
         renderButtonGroupOutside={false}
         renderDotsOutside={false}
         responsive={{
           desktop: {
             breakpoint: {
               max: 3000,
               min: 1220
             },
             items: 4,
             partialVisibilityGutter: 40
           },
           mobile: {
             breakpoint: {
               max: 464,
               min: 0
             },
             items: 1,
             partialVisibilityGutter: 0
           },
           tablet: {
             breakpoint: {
               max: 1220,
               min: 464
             },
             items: 2,
             partialVisibilityGutter: 30
           }
         }}
         rewind={false}
         rewindWithAnimation={false}
         rtl={false}
         shouldResetAutoplay
         showDots={false}
         sliderClass=""
         slidesToSlide={1}
         swipeable
      >
        {data.map((item: any) => (

          <div key={item.title} className="overflow-hidden max-w-[336px] md:max-w-[274px]"  >
            <Card data={item} />
          </div>

        ))}
      </Carousel> }
    </>
  )
}

export default CardCarousel;