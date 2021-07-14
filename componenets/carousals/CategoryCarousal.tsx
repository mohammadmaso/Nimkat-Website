import { Box, Grid, Heading, HStack, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CategoryCart from '../carts/CategoryCart';

interface Props {
  slideToShow?: number;
}

export default function CategoryCarousal({
  slideToShow = 5,
}: Props): ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slideToShow,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box py={10}>
      <Heading size="lg" fontWeight="300" ml={3}>
        دسته‌بندی‌ها
      </Heading>
      <Slider {...settings}>
        <CategoryCart id="wkewmo" />
      </Slider>
    </Box>
  );
}
