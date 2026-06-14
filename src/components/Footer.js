function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.logo}>NIKE</p>
      <p style={styles.tagline}>Just Do It</p>
      <p style={styles.copy}>© 2024 Nike Clone. All rights reserved.</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '30px',
    marginTop: '40px'
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  tagline: {
    color: 'gray',
    fontSize: '14px'
  },
  copy: {
    color: '#555',
    fontSize: '12px'
  }
}

export default Footer