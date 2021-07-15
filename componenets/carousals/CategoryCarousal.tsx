import { Box, Grid, Heading, HStack, Spinner, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CategoryCard from '../cards/CategoryCard';
import Slider from 'react-slick';

import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/queries/course';

interface Props {
  slideToShow?: number;
}

export default function CategoryCarousal({
  slideToShow = 5,
}: Props): ReactElement {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <Box>
      <Heading color="primary" size="md" fontWeight="400" mr={1}>
        دسته‌بندی‌ها
      </Heading>
      <Stack width="full" alignContent="center">
        {loading ? <Spinner mt={3} color="primary" /> : null}
        <Slider {...settings}>
          {data &&
            data.allCourseCategories.edges.map((item: any) => (
              <CategoryCard key={item.node.id} {...item.node} />
            ))}
        </Slider>
      </Stack>
    </Box>
  );
}
