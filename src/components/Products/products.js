//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './product'
import Spinner from '../Reusables/spinner'
import './product.css'

function Products() {

    const [items, setItems] = useState([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try{
                setIsLoading(true)
                const url = 'https://afri-mart.herokuapp.com/api/items'
                const res = await fetch(url)
                //const result = await axios.get(url)
                const result = await res.json()
                //console.log(result.data)
                setIsLoading(false)
                setItems(result.data)
            }catch(err){
                //console.log(err)
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
    const result = isLoading ? <Spinner /> : fetchedData
  return (
    <div className='item-list'>
        {result}
    </div>
  )
}

export default Products