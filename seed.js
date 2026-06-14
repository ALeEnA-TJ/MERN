const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const Product = require('./models/Product')

const products = [
  {
    name: 'Nike Air Max 270',
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Running',
    description: 'Nike Air Max 270 offers maximum cushioning for all day comfort.'
  },
  {
    name: 'Nike Air Force 1',
    price: 110,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500',
    category: 'Casual',
    description: 'Classic Nike Air Force 1 with timeless street style.'
  },
  {
    name: 'Nike React Infinity',
    price: 160,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500',
    category: 'Running',
    description: 'Designed to help reduce injury and keep you running.'
  },
  {
    name: 'Nike Metcon 8',
    price: 130,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500',
    category: 'Training',
    description: 'The ultimate training shoe for gym and cross training.'
  },
  {
    name: 'Nike Zoom Pegasus',
    price: 120,
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500',
    category: 'Running',
    description: 'Everyday running shoe with responsive cushioning.'
  },
  {
    name: 'Nike Blazer Mid',
    price: 100,
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500',
    category: 'Casual',
    description: 'Retro basketball style with modern comfort.'
  },
 
  {
    name: 'Nike Free Run',
    price: 90,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500',
    category: 'Running',
    description: 'Lightweight and flexible for natural movement.'
  },
  {
    name: 'Nike Air Zoom Structure',
    price: 140,
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=500',
    category: 'Running',
    description: 'Stable and supportive shoe for long distance runs.'
  },
  {
    name: 'Nike Court Vision',
    price: 85,
    image: 'https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=500',
    category: 'Casual',
    description: 'Clean and classic court inspired design.'
  },

  {
    name: 'Nike Lunar Force',
    price: 115,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500',
    category: 'Casual',
    description: 'Lightweight everyday shoe with lunar foam cushioning.'
  },
  {
    name: 'Nike Air Vapormax',
    price: 190,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500',
    category: 'Running',
    description: 'Revolutionary Air sole unit for ultimate cushioning.'
  },
  
  {
    name: 'Nike Air Max Plus',
    price: 165,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500',
    category: 'Running',
    description: 'Bold design with Tuned Air cushioning technology.'
  },
  {
    name: 'Nike Wildhorse 7',
    price: 125,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500',
    category: 'Trail',
    description: 'Built for off road adventures and trail running.'
  },
  {
    name: 'Nike Air Monarch',
    price: 80,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500',
    category: 'Training',
    description: 'Classic cross training shoe with extra wide fit.'
  }
]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connected')
    await Product.deleteMany()
    console.log('Old products deleted')
    await Product.insertMany(products)
    console.log('20 Nike products seeded!')
    process.exit()
  } catch (error) {
    console.log('Error:', error)
    process.exit(1)
  }
}

seedDB()