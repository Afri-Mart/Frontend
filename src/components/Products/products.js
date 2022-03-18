//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './product'
import './product.css'

function Products() {

    const [items, setItems] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        const getData = async () => {
            try{
                const url = 'https://afri-mart.herokuapp.com/api/items'
                const res = await fetch(url)
                //const result = await axios.get(url)
                const result = await res.json()
                console.log(result.data)
                setItems(result.data)
            }catch(err){
                console.log(err)
                setError(err)
            }
        }

        getData()
    }, [])

    const fetchedData = items.map(each => 
        <Product 
            key={each.id} 
            title={each.Title} 
            price={each.Price}
            image={each.image}
        />)
     
  return (
    <div className='item-list'>
       {fetchedData}
       {error}
    </div>
  )
}

export default Products