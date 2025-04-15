import {ProductCard, ResultProductCard} from "@/Components/index.js";
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "@/assets/icons/close-black.svg"
import {closeSimilarProductsModal} from "@/store/slices/similar-products/index.js";

export const ResultProducts = ({list}) => {
    const {similarProducts} = useSelector(state => state.similarProducts)
    const dispatch = useDispatch()

    return (
        <div className={"mt-12"}>
            <div
                className={"mb-4 py-1 px-1.5 bg-gray-light rounded-md overflow-hidden flex flex-col justify-center items-center max-w-max"}>
                <h2 className={"max-w-max text-xs leading-none text-gray-label"}>Recommended</h2>
            </div>
            <div className={"grid grid-cols-5 gap-x-[18px] items-stretch"}>
                {
                    list ? list.map((product) => {
                        return <ResultProductCard product={product} key={product.id}/>
                    }) : null
                }
            </div>
            {
                similarProducts.length
                    ? <div className={"relative"}>
                        <button className={"w-7 h-7"} onClick={() => dispatch(closeSimilarProductsModal)}>
                            <img src={CloseIcon} alt="Close"/>
                        </button>
                        <div className={"grid grid-cols-5 gap-x-3"}>
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
        </div>
    )
}