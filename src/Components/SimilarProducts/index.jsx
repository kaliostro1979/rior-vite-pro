import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "@/assets/icons/close-black.svg"
import {closeSimilarProductsModal} from "@/store/slices/similar-products/index.js";
import { ProductCard } from "@/Components/ProductCard/index";


export const SimilarProducts = ()=>{
    const {similarProducts} = useSelector(state => state.similarProducts)
    const dispatch = useDispatch()


    return (
        <>
            {
                similarProducts.length
                    ? <div className={`fixed top-0 left-1/2 -translate-x-1/2 -translate-y-full transition-all duration-500 delay-500 ease-linear z-10 bg-gray-dark rounded-[17px] overflow-hidden w-full 
                    ${similarProducts.length && 'translate-y-0'}`}>
                        <button className={"w-7 h-7"} onClick={() => dispatch(closeSimilarProductsModal())}>
                            <img src={CloseIcon} alt="Close"/>
                        </button>
                        <div className={"grid grid-cols-5 gap-x-3 w-full"}> 
                            {
                                similarProducts.map(product => {
                                    return (
                                        <ProductCard src={product.src} productTitle={product.title} alt={product.title}
                                                     productUrl={product.url} productPrice={product.price}
                                                     key={product.id}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    : null
            }
        </>
    )
}