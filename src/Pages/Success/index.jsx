import { ImageBanner } from "@/Components/ui"
import BannerImage from "@/assets/images/image-banner.png"
import {ResultProducts} from "@/Components/index.js";


const parameters = [
    {
        id: "1",
        title: "SQM",
        value: 4.5
    },
    {
        id: "2",
        title: "Wall area",
        value: 21.25
    },
    {
        id: "3",
        title: "Perimeter",
        value: 8.5
    }
]

const recommendedProducts = [
    {
        title: "Wireless Noise-Canceling Headphones",
        price: 199.99,
        url: "https://example.com/products/wireless-headphones",
        imageUrl: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
        category: "Electronics",
        similarProducts: [
            {
                title: "Bluetooth Over-Ear Headphones",
                price: 149.99,
                url: "https://example.com/products/bluetooth-headphones",
                imageUrl: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
                category: "Electronics",
            },
            {
                title: "ANC Wireless Earbuds",
                price: 129.99,
                url: "https://example.com/products/anc-earbuds",
                imageUrl: "https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg",
                category: "Electronics",
            },
        ],
    },
    {
        title: "Ergonomic Office Chair",
        price: 299.0,
        url: "https://example.com/products/ergonomic-chair",
        imageUrl: "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg",
        category: "Furniture",
        similarProducts: [
            {
                title: "Adjustable Mesh Office Chair",
                price: 199.99,
                url: "https://example.com/products/mesh-chair",
                imageUrl: "https://images.pexels.com/photos/776657/pexels-photo-776657.jpeg",
                category: "Furniture",
            },
            {
                title: "Executive Leather Chair",
                price: 349.0,
                url: "https://example.com/products/leather-chair",
                imageUrl: "https://images.pexels.com/photos/776658/pexels-photo-776658.jpeg",
                category: "Furniture",
            },
        ],
    },
    {
        title: "Stainless Steel Smartwatch",
        price: 249.5,
        url: "https://example.com/products/smartwatch",
        imageUrl: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
        category: "Wearables",
        similarProducts: [
            {
                title: "Fitness Tracker Pro",
                price: 89.99,
                url: "https://example.com/products/fitness-tracker",
                imageUrl: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
                category: "Wearables",
            },
            {
                title: "Premium Smartwatch 5",
                price: 299.99,
                url: "https://example.com/products/premium-smartwatch",
                imageUrl: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
                category: "Wearables",
            },
        ],
    },
    {
        title: "Portable Espresso Machine",
        price: 119.0,
        url: "https://example.com/products/portable-espresso",
        imageUrl: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
        category: "Kitchen",
        similarProducts: [
            {
                title: "Compact Coffee Maker",
                price: 89.0,
                url: "https://example.com/products/compact-coffee-maker",
                imageUrl: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
                category: "Kitchen",
            },
            {
                title: "Travel Espresso Kit",
                price: 109.0,
                url: "https://example.com/products/travel-espresso",
                imageUrl: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
                category: "Kitchen",
            },
        ],
    },
    {
        title: "4K Ultra HD Monitor",
        price: 399.99,
        url: "https://example.com/products/4k-monitor",
        imageUrl: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
        category: "Computers",
        similarProducts: [
            {
                title: '27" QHD Monitor',
                price: 279.99,
                url: "https://example.com/products/qhd-monitor",
                imageUrl: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
                category: "Computers",
            },
            {
                title: '34" UltraWide Monitor',
                price: 499.99,
                url: "https://example.com/products/ultrawide-monitor",
                imageUrl: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
                category: "Computers",
            },
        ],
    },
];


const Success = ()=>{
    return (
        <div>
            <ImageBanner 
                image={BannerImage}
                projectName={"My project"}
                parameters={parameters}
                place={"Bathroom"}
                classes={"absolute top-0 left-0 w-full h-full object-center object-cover"}
            />
            <ResultProducts list={recommendedProducts}/>
        </div>
    )
}

export default Success