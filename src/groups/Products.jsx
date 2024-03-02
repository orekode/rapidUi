


import { useState, useEffect } from 'react'
import { Card } from '../components'

export const Trending = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').
                                then( result => result.json()).
                                then(result => setProducts(result));
    }, [])

                            
    return (
        <div className="product-grid grid-box my-12">
            {products.map((item, index) => 
            <Card.Product item={item} key={index} />
            )}
        </div>
    )
}
