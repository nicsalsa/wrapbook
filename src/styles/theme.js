import { darken } from "@theme-ui/color";

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    12, 14, 16, 18, 24, 32, 48, 64, 72
  ],
  space: [
    0, 8, 12, 14, 16, 18, 24, 32, 48, 64, 72
  ],
  fonts: {
    body: 'Open Sans, sans-serif',
  },
  fontWeights: {
    body: 400,
    navLink: 500,
    bold: 700
  },
  colors: {
    primary: '#0047FF',
    secondary: '#FFF7EE',
    black: "#000",
    white: "#FFF",
    bg: "#E5E5E5",
    inputBg: "#F7F7FA",
    buttonBgMuted: "#A2A8B7",
    green: "#B4E2A9",
    text: "#555555",
    description: "#979797",
    link: "#033FFF"
  },
  radii: {
    default: '12px'
  },
  text: {
    default: {
      color: 'text',
      fontSize: [2],
      lineHeight: "24px"
    }
  },
  layout: {
    wrapper: {
      maxWidth: "1080px",
      width: ["95%", "85%"],
      margin: "0 auto"
    },
    modal: {
      bg: "white",
      borderRadius: "default",
      boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)",
      maxWidth: "500px", 
      width: "90%",
      margin: "0 auto",
      padding: 6
    }
  },
  links: {
    nav: {
      fontSize: 2,
      fontWeight: 'navLink',
      py: 1,
      px: 4,
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderRadius: 'default',
      transition: '0.3s',
      '&:hover': {
        cursor: 'pointer',
        bg: darken('primary', 0.1),
      }
    },
    muted: {
      color: 'white',
      bg: 'buttonBgMuted',
      borderRadius: 'default', 
      fontWeight: 700
    },
    navButton: {
      color: 'black',
      bg: 'white',
      py: 1,
      px: 4,
      borderRadius: 'default',
      transition: '0.3s', 
      '&:hover': {
        cursor: 'pointer',
        bg: 'primary',
        color: 'white'
      }
    },
    copyButton: {
      bg: "white",
      color: "primary",
      borderRadius: 'default',
      width: '100%',
      border: '1.5px solid',
      borderColor: 'inputBg',
      transition: '0.3s',
      '&:hover': {
        cursor: 'pointer',
        bg: 'primary',
        color: 'white',
        borderColor: 'primary'
      }
    }
  },
  images: {
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 99999,
    },
  },
  forms: {
    input: {
      border: "1px solid",
      borderColor: "inputBg",
      borderRadius: "default",
      backgroundColor: "inputBg",
      marginBottom: 5,
      py: 2,
      px: 3,
      '&:focus': {
        bg: 'white',
      },
    },
    callout: {
      color: "link",
      fontSize: 1,
      bg: "inputBg",
      py: 1,
      textAlign: 'center',
      textDecoration: 'underline',
      margin: '0 auto',
      maxWidth: '80%',
      border: '1.5px solid',
      borderRadius: 'default',
      borderColor: 'inputBg'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      bg: 'bg'
    },
    h1: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: ["20px", "22px"],
      lineHeight: "26.25px"
    },
    h2: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: ["20px", "22px"],
      lineHeight: "26.25px"
    }, 
    h3: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: '17px',
      lineHeight: "20.29px"
    }, 
  }
}
