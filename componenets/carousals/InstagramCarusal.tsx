import { Box, Grid, Heading, HStack, Spinner, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CourseCard from '../cards/CourseCard';
import Slider from 'react-slick';
import InstagramPost from '../cards/InstagramPost';

interface Props {
  slideToShow?: number;
}

export default function InstagramCarusal(props: any): ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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
    <Box>
      <Heading color="primary" size="md" fontWeight="400" mr={1}>
        آخرین پست‌های اینستاگرام
      </Heading>
      <Stack width="full" alignContent="center">
        <Slider {...settings}>
          {props.photos &&
            props.photos.map((item: any) => (
              <InstagramPost key={item.id} {...item} />
            ))}
        </Slider>
      </Stack>
    </Box>
  );
}
