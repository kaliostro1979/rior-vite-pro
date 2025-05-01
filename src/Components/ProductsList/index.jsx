import React, {useEffect} from 'react';
import {ProductCard} from "@/Components/index.js";
import {fetchProducts} from "@/store/slices/products-list/index.js";
import {useDispatch, useSelector} from "react-redux";


export const ProductsList = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productsList);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={"lg:mt-[52px] mt-8"}>
            <h1 className={"heading"}>Products</h1>
            <div className={"grid lg:grid-cols-4 grid-cols-2 lg:gap-x-6 gap-x-3 lg:gap-y-7 gap-y-8 mt-7 lg:pb-10 pb-8"}>
                {
                    products && products.map(product => {
                        return <ProductCard src={product.image} productTitle={product.name} productUrl={product.url}
                                            productPrice={product.price} key={product.id}/>
                    })
                }
            </div>
        </div>
    );
};