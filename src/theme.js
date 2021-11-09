const theme = {
  color: {
    dark: 'rgba(0,0,0,1)', // #000000
    text: 'rgba(147,145,143,1)', // #93918f
    midDark: 'rgba(99,99,99,1)', // #636363
    midLight: 'rgba(213,213,213,1)', // #d5d5d5
    light: 'rgba(255,255,255,1)', // #ffffff
  },
  backgroundColor: {
    tableDay: 'rgba(30,37,55,1)',
  },
  table: {
    boxSize: '40px',
    tableHeadHeight: '52px',
    tableHeadBackground: 'linear-gradient(180deg, #FEFEFE 0%, #E9E9E9 100%);',
    dateContainerWidth: '9.625rem',
    color: {
      yellowGreen: 'rgba(224, 229, 163, 1)', // 0
      greenVeryLight: 'rgba(169, 209, 148, 1)', // 1 - 2
      greenLight: 'rgba(160, 206, 147, 1)', // 3 - 4
      greenMedium: 'rgba(140, 200, 148, 1)', // 5
      greenRegular: 'rgba(94, 179, 145, 1)', // 6 - 8
      greenMediumLight: 'rgba(90, 173, 140, 1)', // 9
      blueRegular: 'rgba(57, 132, 163, 1)', // 10? - 11
    },
  },
  tableMobile: {
    tableMinimizeMaxWidth: '800px',
    boxSize: '20px',
    tableHeadHeight: '52px',
    tableHeadBackground: 'linear-gradient(180deg, #FEFEFE 0%, #E9E9E9 100%);',
    dateContainerWidth: '100px',

  },
  font: {
    family: {
      default: '"Montserrat", sans-serif',
      headline: '"Bitter", serif',
    },
    size: {
      default: '16px',
      headline: '2.375rem',
      small: '0.875rem',
    },
    lineHeight: {
      default: 1.69,
    },
    letterSpacing: {
      default: '0.07px',
      h1: '0.75px',
    },
  },
  containerSizes: {
    headerHeight: '100px',
    footerHeight: '100px',
  },
  showBestResults: {
    width: '13.5625rem',
  },
};

export default theme;
