const styles = {
  global: () => {
    return {
      'html, body': {
        fontSize: '14',
        fontWeight: '500',
        color: 'white',
        bg: 'black',
        w: '100vw',
        minH: '100vh',
      },
      'body::-webkit-scrollbar': {
        display: 'none',
        width: '0 !important',
      },
      body: {
        overflow: '-moz-scrollbars-none',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      },
    }
  },
}
export default styles
