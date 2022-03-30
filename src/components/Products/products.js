//import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
                //console.log(err.message)
                setError(err.message)
            }
        }

        getData()
    
    }, [])

    const fetchedData = items.map(each => 
        <div className='ind-item' key={each.id}>
            <img src = {each.image} alt = 'plated food'/>
            <h5> {each.Title} </h5>
            <p>{each.Price}</p>
        </div>   
    )

    const result = isLoading ? <Spinner /> : fetchedData
  
    return (
    <div className='item-list'>
        {result}
    </div>
  )
}

export default Products