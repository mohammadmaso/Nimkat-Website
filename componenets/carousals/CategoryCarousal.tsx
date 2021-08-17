import { Box, Grid, Heading, HStack, Spinner, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CategoryCard from '../cards/CategoryCard';
import Slider from 'react-slick';
import { Settings } from 'react-slick';

export default function CategoryCarousal(props: any): ReactElement {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
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
    <Box mb="10">
      <Heading color="primary" size="md" fontWeight="400" mr={1}>
        دسته‌بندی‌ها
      </Heading>
      <Stack width="full" alignContent="center">
        <Slider {...settings}>
          {props.allCourseCategories.edges.map((item: any) => (
            <CategoryCard key={item.node.id} {...item.node} />
          ))}
        </Slider>
      </Stack>
    </Box>
  );
}
