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
        id: "001",
        title: "Wireless Noise-Canceling Headphones",
        price: 199.99,
        url: "https://example.com/products/wireless-headphones",
        imageUrl: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
        category: "Electronics",
        similarProducts: [
            {
                id: "101",
                title: "Bluetooth Over-Ear Headphones",
                price: 149.99,
                url: "https://example.com/products/bluetooth-headphones",
                src: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
                category: "Electronics",
            },
            {
                id: "102",
                title: "ANC Wireless Earbuds",
                price: 129.99,
                url: "https://example.com/products/anc-earbuds",
                src: "https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg",
                category: "Electronics",
            },
        ],
    },
    {
        id: "002",
        title: "Ergonomic Office Chair",
        price: 299.0,
        url: "https://example.com/products/ergonomic-chair",
        imageUrl: "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg",
        category: "Furniture",
        similarProducts: [
            {
                id: "201",
                title: "Adjustable Mesh Office Chair",
                price: 199.99,
                url: "https://example.com/products/mesh-chair",
                src: "https://images.pexels.com/photos/776657/pexels-photo-776657.jpeg",
                category: "Furniture",
            },
            {
                id: "202",
                title: "Executive Leather Chair",
                price: 349.0,
                url: "https://example.com/products/leather-chair",
                src: "https://images.pexels.com/photos/776658/pexels-photo-776658.jpeg",
                category: "Furniture",
            },
        ],
    },
    {
        id: "003",
        title: "Stainless Steel Smartwatch",
        price: 249.5,
        url: "https://example.com/products/smartwatch",
        imageUrl: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
        category: "Wearables",
        similarProducts: [
            {
                id: "301",
                title: "Fitness Tracker Pro",
                price: 89.99,
                url: "https://example.com/products/fitness-tracker",
                src: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
                category: "Wearables",
            },
            {
                id: "302",
                title: "Premium Smartwatch 5",
                price: 299.99,
                url: "https://example.com/products/premium-smartwatch",
                src: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
                category: "Wearables",
            },
        ],
    },
    {
        id: "004",
        title: "Portable Espresso Machine",
        price: 119.0,
        url: "https://example.com/products/portable-espresso",
        imageUrl: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
        category: "Kitchen",
        similarProducts: [
            {
                id: "401",
                title: "Compact Coffee Maker",
                price: 89.0,
                url: "https://example.com/products/compact-coffee-maker",
                src: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
                category: "Kitchen",
            },
            {
                id: "402",
                title: "Travel Espresso Kit",
                price: 109.0,
                url: "https://example.com/products/travel-espresso",
                src: "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg",
                category: "Kitchen",
            },
        ],
    },
    {
        id: "005",
        title: "4K Ultra HD Monitor",
        price: 399.99,
        url: "https://example.com/products/4k-monitor",
        imageUrl: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
        category: "Computers",
        similarProducts: [
            {
                id: "501",
                title: '27" QHD Monitor',
                price: 279.99,
                url: "https://example.com/products/qhd-monitor",
                src: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
                category: "Computers",
            },
            {
                id: "502",
                title: '34" UltraWide Monitor',
                price: 499.99,
                url: "https://example.com/products/ultrawide-monitor",
                src: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg",
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