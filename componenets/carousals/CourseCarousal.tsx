import { Box, Grid, Heading, HStack, Spinner, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CourseCard from '../cards/CourseCard';
import Slider from 'react-slick';
import { CarousalNextArrow, CarousalPrevArrow } from './CarousalArrow';

interface Props {
  slideToShow?: number;
}

export default function CourseCarousal(props: any): ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CarousalNextArrow />,
    prevArrow: <CarousalPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
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
        آخرین دوره‌ها
      </Heading>
      <Stack width="full" alignContent="center">
        <Slider {...settings}>
          {props.allCourses.edges.map((item: any) => (
            <CourseCard key={item.node.id} {...item.node} />
          ))}
        </Slider>
      </Stack>
    </Box>
  );
}
