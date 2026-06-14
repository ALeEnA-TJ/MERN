import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.info}>
        <h2 style={styles.name}>{product.name}</h2>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.price}>${product.price}</p>
        <Link to={`/products/${product._id}`} style={styles.button}>
          View Details
        </Link>
      </div>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  info: {
    padding: '15px'
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  category: {
    color: 'gray',
    fontSize: '14px'
  },
  price: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '5px'
  },
  button: {
    display: 'block',
    marginTop: '10px',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none'
  }
}

export default ProductCard