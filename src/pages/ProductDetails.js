import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    size: '',
    payment: 'Credit Card'
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowForm(false)
    setOrderPlaced(true)
  }

  if (!product) return <p style={{ padding: '30px' }}>Loading...</p>

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h1 style={styles.name}>{product.name}</h1>
      <p style={styles.category}>{product.category}</p>
      <p style={styles.price}>${product.price}</p>
      <p style={styles.description}>{product.description}</p>

      <button style={styles.button} onClick={() => setShowForm(true)}>
        Buy Now
      </button>

      {/* Order Success Message */}
      {orderPlaced && (
        <div style={styles.success}>
          <h2>✅ Order Placed Successfully!</h2>
          <p>Thank you {form.name}! Your order will be delivered to {form.address}</p>
        </div>
      )}

      {/* Order Form Popup */}
      {showForm && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2 style={styles.popupTitle}>Complete Your Order</h2>
            <p style={styles.popupProduct}>{product.name} — ${product.price}</p>

            <form onSubmit={handleSubmit}>

              <label style={styles.label}>Full Name</label>
              <input
                style={styles.input}
                type='text'
                name='name'
                placeholder='Enter your full name'
                value={form.name}
                onChange={handleChange}
                required
              />

              <label style={styles.label}>Email</label>
              <input
                style={styles.input}
                type='email'
                name='email'
                placeholder='Enter your email'
                value={form.email}
                onChange={handleChange}
                required
              />

              <label style={styles.label}>Phone Number</label>
              <input
                style={styles.input}
                type='tel'
                name='phone'
                placeholder='Enter your phone number'
                value={form.phone}
                onChange={handleChange}
                required
              />

              <label style={styles.label}>Delivery Address</label>
              <textarea
                style={styles.textarea}
                name='address'
                placeholder='Enter your full address'
                value={form.address}
                onChange={handleChange}
                required
              />

              <label style={styles.label}>Shoe Size</label>
              <select
                style={styles.input}
                name='size'
                value={form.size}
                onChange={handleChange}
                required
              >
                <option value=''>Select Size</option>
                <option value='UK 6'>UK 6</option>
                <option value='UK 7'>UK 7</option>
                <option value='UK 8'>UK 8</option>
                <option value='UK 9'>UK 9</option>
                <option value='UK 10'>UK 10</option>
                <option value='UK 11'>UK 11</option>
              </select>

              <label style={styles.label}>Payment Method</label>
              <select
                style={styles.input}
                name='payment'
                value={form.payment}
                onChange={handleChange}
              >
                <option value='Credit Card'>Credit Card</option>
                <option value='Debit Card'>Debit Card</option>
                <option value='UPI'>UPI</option>
                <option value='Cash on Delivery'>Cash on Delivery</option>
              </select>

              <div style={styles.formButtons}>
                <button type='submit' style={styles.confirmButton}>
                  Confirm Order
                </button>
                <button
                  type='button'
                  style={styles.cancelButton}
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  name: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginTop: '20px'
  },
  category: {
    color: 'gray'
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '10px'
  },
  description: {
    color: '#555',
    marginTop: '15px'
  },
  button: {
    marginTop: '20px',
    backgroundColor: 'black',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  success: {
    marginTop: '20px',
    backgroundColor: '#d4edda',
    padding: '20px',
    borderRadius: '8px',
    color: '#155724'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  popup: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    width: '450px',
    maxHeight: '80vh',
    overflowY: 'auto'
  },
  popupTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  popupProduct: {
    color: 'gray',
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginTop: '12px',
    marginBottom: '4px'
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '14px',
    height: '80px',
    boxSizing: 'border-box'
  },
  formButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px'
  },
  confirmButton: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    padding: '12px',
    border: '1px solid black',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  }
}

export default ProductDetails