


import { useState, useEffect } from 'react'
import { Card, Errors, Pagination } from '../components'
import { useItems } from '../apiCalls/read';

export const Trending = ({ filters, sort }) => {
    const [ page, set_page ] = useState(1);
    const [ products, setProducts ] = useState([]);

    const { data, isLoading, isError } = useItems({
        target: 'data/products',
        params: { page, filters, sort }
    });

    return (
        <>
            <div className="product-grid grid-box my-12">
                {(data && data.data && data.data.map) && data.data.map((item, index) =>
                    <Card.Product item={item} key={index} />
                )}
                {isLoading && Array.from({length: 10}, (_, index) => 
                    <Errors.MdCard key={index} />
                )}
            </div>

            {(!isLoading && !isError) &&
                <Errors.Empty data={data?.data} title="No Products Available" content={'Click the "Add New" button to create products'} />
            }

            {isError && <Errors.Network />}

            <Pagination meta={data?.meta} setPage={set_page} />

        </>
    )
}

export const Shop = ({ filters, sort }) => {
    const [ page, set_page ] = useState(1);
    const [ products, setProducts ] = useState([]);

    const { data, isLoading, isError } = useItems({
        target: 'data/products',
        params: { page, filters, sort }
    });

    return (
        <>
            <div className="product-grid grid-box my-12">
                {(data && data.data && data.data.map) && data.data.map((item, index) =>
                    <Card.Product item={item} key={index} />
                )}
                {isLoading && Array.from({length: 10}, (_, index) => 
                    <Errors.MdCard key={index} />
                )}
            </div>

            {(!isLoading && !isError) &&
                <Errors.Empty data={data?.data} title="No Products Available" content={'Click the "Add New" button to create products'} />
            }

            {isError && <Errors.Network />}

            <Pagination meta={data?.meta} setPage={set_page} />

        </>
    )
}
