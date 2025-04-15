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
          src: "https://images.pexels.com/photos/159853/headphones-audio-music-sound-159853.jpeg",
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
        {
          id: "103",
          title: "Studio Monitor Headphones",
          price: 179.99,
          url: "https://example.com/products/studio-headphones",
          src: "https://images.pexels.com/photos/8038323/pexels-photo-8038323.jpeg",
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
        {
          id: "203",
          title: "Reclining Office Chair with Footrest",
          price: 229.0,
          url: "https://example.com/products/reclining-chair",
          src: "https://images.pexels.com/photos/776661/pexels-photo-776661.jpeg",
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
          src: "https://images.pexels.com/photos/9460356/pexels-photo-9460356.jpeg",
          category: "Wearables",
        },
        {
          id: "302",
          title: "Premium Smartwatch 5",
          price: 299.99,
          url: "https://example.com/products/premium-smartwatch",
          src: "https://images.pexels.com/photos/8282373/pexels-photo-8282373.jpeg",
          category: "Wearables",
        },
        {
          id: "303",
          title: "Round Face Classic Smartwatch",
          price: 199.0,
          url: "https://example.com/products/classic-smartwatch",
          src: "https://images.pexels.com/photos/7402969/pexels-photo-7402969.jpeg",
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
          src: "https://images.pexels.com/photos/3068945/pexels-photo-3068945.jpeg",
          category: "Kitchen",
        },
        {
          id: "402",
          title: "Travel Espresso Kit",
          price: 109.0,
          url: "https://example.com/products/travel-espresso",
          src: "https://images.pexels.com/photos/16850663/pexels-photo-16850663.jpeg",
          category: "Kitchen",
        },
        {
          id: "403",
          title: "Single-Serve Capsule Espresso",
          price: 129.0,
          url: "https://example.com/products/single-serve-espresso",
          src: "https://images.pexels.com/photos/23938274/pexels-photo-23938274.jpeg",
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
          src: "https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg",
          category: "Computers",
        },
        {
          id: "502",
          title: '34" UltraWide Monitor',
          price: 499.99,
          url: "https://example.com/products/ultrawide-monitor",
          src: "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg",
          category: "Computers",
        },
        {
          id: "503",
          title: 'USB-C 32" 4K Display',
          price: 429.99,
          url: "https://example.com/products/usb-c-monitor",
          src: "https://images.pexels.com/photos/14032439/pexels-photo-14032439.jpeg",
          category: "Computers",
        },
      ],
    }
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