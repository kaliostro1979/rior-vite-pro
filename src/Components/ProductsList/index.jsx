import React from 'react';
import {ProductCard} from "@/Components/index.js";


export const ProductsList = () => {
    const productsArray = [
        {
            "id": "prod-001",
            "title": "Wireless Bluetooth Headphones",
            "price": 59.99,
            "image": "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg",
            "url": "https://example.com/products/wireless-bluetooth-headphones"
        },
        {
            "id": "prod-002",
            "title": "Smart Fitness Watch",
            "price": 89.99,
            "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
            "url": "https://example.com/products/smart-fitness-watch"
        },
        {
            "id": "prod-003",
            "title": "Ergonomic Office Chair",
            "price": 199.95,
            "image": "https://images.pexels.com/photos/813132/pexels-photo-813132.jpeg",
            "url": "https://example.com/products/ergonomic-office-chair"
        },
        {
            "id": "prod-004",
            "title": "4K Ultra HD Monitor",
            "price": 329.00,
            "image": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
            "url": "https://example.com/products/4k-ultra-hd-monitor"
        },
        {
            "id": "prod-005",
            "title": "Portable Coffee Maker",
            "price": 39.99,
            "image": "https://images.pexels.com/photos/3737398/pexels-photo-3737398.jpeg",
            "url": "https://example.com/products/portable-coffee-maker"
        },
        {
            "id": "prod-006",
            "title": "Noise Cancelling Earbuds",
            "price": 74.50,
            "image": "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
            "url": "https://example.com/products/noise-cancelling-earbuds"
        },
        {
            "id": "prod-007",
            "title": "Adjustable Standing Desk",
            "price": 249.99,
            "image": "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
            "url": "https://example.com/products/adjustable-standing-desk"
        },
        {
            "id": "prod-008",
            "title": "LED Desk Lamp with USB Port",
            "price": 24.95,
            "image": "https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg",
            "url": "https://example.com/products/led-desk-lamp-usb"
        }
    ]



    return (
        <div className={"lg:mt-[52px] mt-8"}>
            <h1 className={"heading"}>Products</h1>
            <div className={"grid lg:grid-cols-4 grid-cols-2 lg:gap-x-6 gap-x-3 lg:gap-y-7 gap-y-8 mt-7"}>
                {
                    productsArray && productsArray.map(product => {
                        return <ProductCard src={product.image} productTitle={product.title} productUrl={product.url} productPrice={product.price} key={product.id}/>
                    })
                }
            </div>
        </div>
    );
};