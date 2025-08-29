import axios from 'axios'
import { useState } from 'react'
import "../products/Products.scss"

const Products = () => {
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(true)
    axios.get("https://jsonbek.uz/api/products?style=comedy")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
  return (
    <div className='products' id='products'>
        <h2>Products</h2>
        {loading && <div className='products__loading'>Loading...</div>}
        <div className='products__list'>
            {data?.map((item)=>(
                <div className='products__item' key={item.id}>
                    <img src={item.image} width={300} loading='lazy' alt="" />
                    <h3>{item.title}</h3>
                </div>            ))}
        </div>
    </div>
  )
}

export default Products