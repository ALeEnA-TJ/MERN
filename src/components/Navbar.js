import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to='/' style={styles.logo}>NIKE</Link>
      <div>
        <Link to='/' style={styles.link}>Home</Link>
        <Link to='/products' style={styles.link}>Products</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: 'black',
    color: 'white',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '16px'
  }
}

export default Navbar