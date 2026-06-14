import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.title}>NIKE</h1>
      <p style={styles.tagline}>Just Do It</p>
      <Link to='/products' style={styles.button}>Shop Now</Link>
    </div>
  )
}

const styles = {
  hero: {
    backgroundColor: 'black',
    color: 'white',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '72px',
    fontWeight: 'bold'
  },
  tagline: {
    color: 'gray',
    fontSize: '20px',
    marginBottom: '20px'
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    padding: '12px 30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px'
  }
}

export default Home