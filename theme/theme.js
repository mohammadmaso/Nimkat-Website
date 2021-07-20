import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  primary: "#215970",
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
    heading: "iransans",
    body: "iransans",
}
const direction = "rtl"


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const theme = extendTheme({direction, colors, fonts, components,config });

export default theme;
