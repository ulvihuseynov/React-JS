
import './App.css'
import Container from './Container'
import Product from './Product'


function App() {
  

  return (
  <div >
<Container >
  <div style={{display:'flex',gap:"30px"}}>
  <Product name='Telefon' oldprice={250} price={200} />
<Product name='Utu' oldprice={120} price={96} />
<Product name='Tozsoran' oldprice={199} price={176} />
<Product name='Soyuducu' oldprice={457} price={429} />
  </div>

</Container>
  </div>
  )
}

export default App
