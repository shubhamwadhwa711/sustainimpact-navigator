"use client";

import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import Card from "../Card";
import 'react-multi-carousel/lib/styles.css';

const cardData: any = [
  {
    "_id": "668c22107cb26f9d07f0d603",
    "title": "elit elit et",
    "status": 12,
    "description": "Sint commodo laboris elit aute dolore officia minim qui Lorem nisi dolore."
  },
  {
    "_id": "668c221021741f922da70a8c",
    "title": "voluptate magna incididunt",
    "status": 52,
    "description": "Tempor incididunt laboris consequat aliqua.Tempor incididunt laboris consequat aliqua."
  },
  {
    "_id": "668c22107632c099d532eb90",
    "title": "esse esse pariatur",
    "status": 64,
    "description": "Aliqua fugiat elit deserunt eiusmod ipsum sint consectetur officia ex veniam nostrud."
  },
  {
    "_id": "668c22106994b81d660d0415",
    "title": "incididunt veniam mollit",
    "status": 16,
    "description": "Laborum sunt eiusmod id duis ullamco elit consectetur voluptate velit sunt culpa aliquip."
  },
  {
    "_id": "668c2210edb2a9182ea169d7",
    "title": "proident Lorem dolore",
    "status": 72,
    "description": "Duis occaecat sunt excepteur non adipisicing reprehenderit."
  },
  {
    "_id": "668c2210ea97953ea7bfc2e4",
    "title": "ea sint amet",
    "status": 64,
    "description": "Non esse ullamco nulla elit."
  }
]

const CardCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    <Carousel className="container" responsive={responsive}>
      {cardData.length > 0 && cardData.map((item: any) => (

        <div key={item.title} className="overflow-hidden"  >
          <Card data={item} />
        </div>

      ))}
    </Carousel>


  )

}

export default CardCarousel;