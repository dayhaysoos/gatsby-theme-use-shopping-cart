const theme = {
  breakpoints: ['40em', '60em', '70em'],
  space: [0, 4, 8, 1, 32],
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    gray: ['#efefef', '#ddd', '#333', '#111'],
    background: '#fff',
    primaryText: '#fff',
    secondaryText: 'wiblackte',
    accent: '#cc00ff',
    hightlight: 'yellow'
  },
  sizes: {
    default: '100%',
    max: '100%'
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    marginBottom: 20,
    color: 'primary'
  },
  styles: {
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary'
      }
    },
    // old below
    Layout: {
      color: 'gray.2',
      fontFamily: 'body',
      fontSize: 1,
      lineHeight: 'body',
      overflowX: 'hidden'
    },
    Header: {
      color: 'text',
      backgroundColor: 'primary',
      fontWeight: 'bold',
      margin: '0 auto',
      padding: 10,
      width: 'default',
      justifyContent: 'space-between'
    },
    Main: {
      display: 'flex',
      flexDirection: 'column',
      color: 'primary',
      backgroundColor: 'background',
      alignItems: 'center'
    },
    Container: {
      padding: 3
    },
    h1: {
      color: 'primary',
      fontSize: 5,
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '0',
      marginTop: 200
    },
    ul: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      listStyle: 'none',
      padding: 0,
      maxWidth: 'max',
      width: 'default'
    },
    li: {
      margin: '20px 10px',
      display: 'flex',
      flexDirection: 'column',
      '&:focus-within, &:hover': {
        backgroundColor: 'primary',
        color: 'text'
      },
      '@media (max-width: 680px)': {
        margin: '10px 0'
      }
    },
    p: {
      color: 'gray.2',
      textAlign: 'center',
      fontSize: '2rem',
      margin: '0'
    },
    div: {
      color: 'primary'
    }
  },
  span: {
    cartCount: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      top: '3px',
      border: '1px solid',
      borderColor: 'accent',
      borderRadius: '50%',
      height: '24px',
      width: '24px',
      backgroundColor: 'accent',
      color: 'primaryText',
      fontSize: '.75rem'
    }
  },
  li: {
    navItem: {
      height: '40px',
      width: '40px',
      listStyle: 'none',
      textAlign: 'center'
    },
    checkout: {
      listStyle: 'none',
      justifyContent: 'space-around',
      textAlign: 'left',
      details: {
        justifyContent: 'space-between',
        listStyle: 'none',
        transition: 'all .2s ease',
        boxShadow: '2px 10px 10px gray',
        color: 'primary',
        margin: '20px',
        minWidth: '250px',
        maxWidth: 360,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '300px'
      }
    },
    purchaseItem: {
      backgroundColor: 'background',
      margin: '20px 10px',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all .2s ease',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 275,
      flexGrow: 1,
      flexShrink: 1,
      boxShadow: 'none',
      flexBasis: '20%',
      '&:focus-within, &:hover': {},
      '@media (max-width: 900px)': {
        flexBasis: '50%'
      },
      '@media (max-width: 680px)': {
        margin: '10px 0'
      }
    }
  },
  button: {
    disabled: {
      backgroundColor: 'gray.1',
      color: 'black',
      height: '40px',
      borderRadius: '10px',
      fontSize: '16px',
      transition: 'all .5s ease',
      outline: 'none',
      minWidth: '70px'
    },
    donationOption: {
      color: 'primaryText',
      backgroundColor: 'gray.1',
      height: '50px',
      borderRadius: '5px',
      fontSize: '24px',
      margin: '10px 10px'
    },
    cart: {
      backgroundColor: 'primary',
      color: 'primaryText',
      fontSize: '16px',
      '&:hover': {
        backgroundColor: 'secondary',
        borderColor: 'secondary'
      }
    },
    cartIcon: {
      display: 'flex',
      color: 'primaryText',
      border: 'none',
      justifyContent: 'center',
      padding: 0,
      position: 'relative',
      backgroundColor: 'transparent',
      width: '60px',
      cursor: 'pointer',
      transition: 'all .2s ease',
      fontWeight: '800',
      outline: 'none',
      fontSize: '1.1rem',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    },
    checkout: {
      backgroundColor: 'primary',
      color: 'primaryText',
      height: '40px',
      borderRadius: '10px',
      fontSize: '16px',
      margin: '0 10px',
      transition: 'all .5s ease',
      outline: 'none',
      minWidth: '70px',
      '&:hover': {
        color: 'secondary',
        borderColor: 'secondary'
      },
      addRemove: {
        backgroundColor: 'primary',
        color: 'primaryText',
        fontSize: '18px',
        transition: 'all .5s ease',
        outline: 'none',
        '&:hover': {
          color: 'secondary',
          border: '1px solid',
          borderColor: 'secondary'
        },
        '&:active': {
          backgroundColor: 'gray.2'
        }
      },
      closeWindow: {
        backgroundColor: 'none',
        color: 'primary',
        fontSize: '18px',
        outline: 'none',
        border: 'none',
        '&:active': {
          backgroundColor: 'secondary'
        }
      }
    }
  },
  //old below
  link: {
    image: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  section: {
    itemDetails: {
      textAlign: 'center',
      margin: '0 auto',
      minWidth: '200px',
      maxWidth: '250px'
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    checkout: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    donateForm: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      margin: '0 auto'
    }
  },
  main: {
    checkout: {
      textAlign: 'center',
      color: 'primary',
      width: '100%'
    }
  },
  ul: {
    checkout: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      padding: 0
    },
    skuList: {
      display: 'flex',
      color: 'primary',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      minWidth: '40px',
      padding: 0,
      '@media (max-width: 680px)': {
        flexDirection: 'column'
      }
    }
  },
  img: {
    checkout: {
      width: '100%',
      height: '100%',
      minHeight: '50px',
      minWidth: '50px',
      maxWidth: '50px',
      transition: 'all .5s ease',
      '@media (max-width: 680px)': {
        display: 'none'
      }
    },
    skuList: {
      width: '100%',
      height: '100%',
      minHeight: '50px',
      minWidth: '50px',
      maxWidth: '200px',
      transition: 'all .5s ease'
    },
    cartList: {
      width: '50px',
      height: '50px',
      minWidth: '40px',
      minHeight: '50px'
    }
  },
  field: {
    checkout: {
      width: '50px',
      textAlign: 'right',
      color: 'text'
    },
    error: {
      color: 'red'
    }
  },
  div: {
    test: { color: 'red' },
    confirm: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    checkout: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '5px'
    },
    closeWindow: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  },
  aside: {
    rightPaneHidden: {
      position: 'fixed',
      right: '-107%',
      top: 0,
      display: 'flex',
      flexFlow: 'column nowrap',
      width: '100%',
      padding: '8px',
      fontSize: '1.5em',
      height: 'max',
      transition: 'all 1s ease',
      animation: 'fade-out 1s',
      backgroundColor: 'background',
      boxShadow: '0 20px 10px',
      zIndex: 100,
      overflow: 'hidden',
      '@media (max-width: 680px)': {
        visibility: 'hidden'
      }
    },
    rightPaneShow: {
      position: 'fixed',
      right: '0',
      top: 0,
      display: 'flex',
      flexFlow: 'column nowrap',
      width: '55%',
      padding: '8px',
      fontSize: '1.5em',
      height: 'max',
      transition: 'all 0.5s ease',
      backgroundColor: 'background',
      zIndex: 100,
      boxShadow: '0 15px 10px',
      '@media (max-width: 900px)': {
        width: '75%'
      }
    }
  },
  cartDetails: {
    container: {
      color: 'primary',
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '10px',
      borderBottom: '1px solid gray',
      fontSize: '12px',
      backgroundColor: 'background'
    },
    inputContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '75px'
    },
    itemContainer: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '10px',
      borderBottom: '1px dotted lightgray',
      color: 'primary'
    },
    productContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '40%',
      fontSize: '14px'
    }
  }
}

export default theme
