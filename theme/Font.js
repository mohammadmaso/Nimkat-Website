import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 600;
        src: url('yekan/eot/iranyekanwebboldfanum.eot');
        src: url('yekan/eot/iranyekanwebboldfanum.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanwebboldfanum.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('yekan/ttf/iranyekanwebboldfanum.ttf') format('truetype');
        }

        @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: 300;
        src: url('yekan/eot/iranyekanweblightfanum.eot');
        src: url('yekan/eot/iranyekanweblightfanum.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanweblightfanum.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('yekan/ttf/iranyekanweblightfanum.ttf') format('truetype');
        }

        @font-face {
        font-family: iranyekan;
        font-style: normal;
        font-weight: normal;
        src: url('yekan/eot/iranyekanwebregularfanum.eot');
        src: url('yekan/eot/iranyekanwebregularfanum.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanwebregularfanum.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('yekan/ttf/iranyekanwebregularfanum.ttf') format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: bold;
        src: url('yekan/eot/iranyekanwebbold.eot');
        src: url('yekan/eot/iranyekanwebbold.eot?#iefix') format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanwebbold.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('yekan/ttf/iranyekanwebbold.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 100;
        src: url('yekan/eot/iranyekanwebthin.eot');
        src: url('yekan/eot/iranyekanwebthin.eot?#iefix') format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanwebthin.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('yekan/ttf/iranyekanwebthin.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 300;
        src: url('yekan/eot/iranyekanweblight.eot');
        src: url('yekan/eot/iranyekanweblight.eot?#iefix') format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanweblight.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('yekan/ttf/iranyekanweblight.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: normal;
        src: url('yekan/eot/iranyekanwebregular.eot');
        src: url('yekan/eot/iranyekanwebregular.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanwebregular.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('yekan/ttf/iranyekanwebregular.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 500;
        src: url('yekan/eot/iranyekanwebmedium.eot');
        src: url('yekan/eot/iranyekanwebmedium.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanwebmedium.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('yekan/ttf/iranyekanwebmedium.ttf')
            format('truetype');
        }

        @font-face {
        font-family: iranyekan en;
        font-style: normal;
        font-weight: 800;
        src: url('yekan/eot/iranyekanwebextrabold.eot');
        src: url('yekan/eot/iranyekanwebextrabold.eot?#iefix')
            format('embedded-opentype'),
            /* IE6-8 */ url('yekan/woff/iranyekanwebextrabold.woff') format('woff'),
            /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
            url('yekan/ttf/iranyekanwebextrabold.ttf') format('truetype');
        }
      `}
  />
)

export default Fonts