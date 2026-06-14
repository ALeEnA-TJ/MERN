import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Products</h1>
      <div style={styles.grid}>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '30px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  }
}

export default Products