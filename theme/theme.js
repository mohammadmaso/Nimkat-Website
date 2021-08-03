import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  primary: 
    {
      50: '#e2f7ff',
      100: '#c1e2f0',
      200: '#9dcee2',
      300: '#77bad5',
      400: '#54a6c9',
      500: '#3b8daf',
      600: '#2c6e89',
      700: '#1d4e62',
      800: '#0b2f3d',
      900: '#001219',
    },
  second: "#378695",


};

const components = {
    Button: { baseStyle: { _focus: { boxShadow: "none" } } },
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
  }


const fonts = {
    heading: "peyda",
    body: "iranyekan",
}
const direction = "rtl"


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const theme = extendTheme({direction, colors, fonts, components,config });

export default theme;
