import {ImageBanner, ModalOverlay} from "@/Components/ui"
import {DetailsModal, ResultProducts} from "@/Components/index.js";
import {useDispatch, useSelector} from "react-redux";
import {closeSimilarProductsModal} from "@/store/slices/similar-products/index.js";
import {useEffect, useState} from "react";
import {fetchUserData} from "@/store/actions/steps/index.js";
import {useLocation} from "react-router";


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

/*const recommendedProducts = [
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
                imageUrl: "https://plus.unsplash.com/premium_photo-1744193093539-8278a47ae01c?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "Electronics",
            },
            {
                id: "102",
                title: "ANC Wireless Earbuds",
                price: 129.99,
                url: "https://example.com/products/anc-earbuds",
                imageUrl: "https://plus.unsplash.com/premium_photo-1744868563253-cd8479359890?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "Electronics",
            },
            {
                id: "103",
                title: "Studio Monitor Headphones",
                price: 179.99,
                url: "https://example.com/products/studio-headphones",
                imageUrl: "https://images.pexels.com/photos/8038323/pexels-photo-8038323.jpeg",
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
                imageUrl: "https://images.pexels.com/photos/776657/pexels-photo-776657.jpeg",
                category: "Furniture",
            },
            {
                id: "202",
                title: "Executive Leather Chair",
                price: 349.0,
                url: "https://example.com/products/leather-chair",
                imageUrl: "https://images.pexels.com/photos/776658/pexels-photo-776658.jpeg",
                category: "Furniture",
            },
            {
                id: "203",
                title: "Reclining Office Chair with Footrest",
                price: 229.0,
                url: "https://example.com/products/reclining-chair",
                imageUrl: "https://plus.unsplash.com/premium_photo-1673052882181-1080542b2e02?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                imageUrl: "https://images.pexels.com/photos/9460356/pexels-photo-9460356.jpeg",
                category: "Wearables",
            },
            {
                id: "302",
                title: "Premium Smartwatch 5",
                price: 299.99,
                url: "https://example.com/products/premium-smartwatch",
                imageUrl: "https://images.pexels.com/photos/8282373/pexels-photo-8282373.jpeg",
                category: "Wearables",
            },
            {
                id: "303",
                title: "Round Face Classic Smartwatch",
                price: 199.0,
                url: "https://example.com/products/classic-smartwatch",
                imageUrl: "https://images.unsplash.com/photo-1744767968954-f3c06e118437?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                imageUrl: "https://images.unsplash.com/photo-1744871783125-21a510d12fc1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "Kitchen",
            },
            {
                id: "402",
                title: "Travel Espresso Kit",
                price: 109.0,
                url: "https://example.com/products/travel-espresso",
                imageUrl: "https://images.pexels.com/photos/16850663/pexels-photo-16850663.jpeg",
                category: "Kitchen",
            },
            {
                id: "403",
                title: "Single-Serve Capsule Espresso",
                price: 129.0,
                url: "https://example.com/products/single-serve-espresso",
                imageUrl: "https://images.pexels.com/photos/23938274/pexels-photo-23938274.jpeg",
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
                imageUrl: "https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg",
                category: "Computers",
            },
            {
                id: "502",
                title: '34" UltraWide Monitor',
                price: 499.99,
                url: "https://example.com/products/ultrawide-monitor",
                imageUrl: "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg",
                category: "Computers",
            },
            {
                id: "503",
                title: 'USB-C 32" 4K Display',
                price: 429.99,
                url: "https://example.com/products/usb-c-monitor",
                imageUrl: "https://images.unsplash.com/photo-1744955913865-853beac35448?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "Computers",
            },
        ],
    }
];*/


const Success = () => {
    const {showModal} = useSelector(state => state.similarProducts)
    const dispatch = useDispatch()

    const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);


    const handleDetailsModalOpen = () => {
        setDetailsModalIsOpen(true)
    }

    const location = useLocation()
    const slug = location.pathname.split("/").slice(-1)[0]

    useEffect(() => {
        if (slug && slug !== "success"){
            dispatch(fetchUserData(slug))
        }
    }, [dispatch, slug]);

    return (
        <div>
            {
                showModal ? <ModalOverlay callback={() => dispatch(closeSimilarProductsModal())}/> : null
            }
            <ImageBanner
                projectName={"My project"}
                parameters={parameters}
                place={"Bathroom"}
                classes={"absolute top-0 left-0 w-full h-full object-center object-cover"}
                callBack={handleDetailsModalOpen}
            />
            {/*<ResultProducts list={successData["data"]["products"]}/>*/}
          {
              detailsModalIsOpen ? <ModalOverlay callback={()=> setDetailsModalIsOpen(false)}/> : null
          }
            <DetailsModal modalIsOpen={detailsModalIsOpen} callback={()=> setDetailsModalIsOpen(false)}/>
        </div>
    )
}

export default Success