 import axios from 'axios'

 
 function Product (){
    const api='https://fakestoreapi.com/products'

    const data=axios.get(api)
    .then((res)=>console.log(res.data[0]))
  console.log(data)
    return (
        <div>
           {/* {data}  */}
        </div>
    )
 }

 export default Product