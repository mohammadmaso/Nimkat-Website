import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const fonts = {
    heading: "iranyekan",
    body: "iranyekan",
  }

const theme = extendTheme({ colors, fonts });

export default theme;
