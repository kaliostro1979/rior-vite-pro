import {useDispatch, useSelector} from "react-redux";
import CloseIcon from "@/assets/icons/close-black.svg"
import ChevronLeft from "@/assets/icons/chevron-left.svg"
import {closeSimilarProductsModal} from "@/store/slices/similar-products/index.js";
import {ResultProductCard} from "@/Components/index.js";


export const SimilarProducts = () => {
    const {similarProducts, showModal} = useSelector(state => state.similarProducts)
    const dispatch = useDispatch()
    const handleModalClose = ()=>{
        setTimeout(() => {
            dispatch(closeSimilarProductsModal())
        }, 300)
    }

    return (
        <>
            {
                similarProducts.length
                    ? <div className={`container 
                        lg:h-auto h-screen
                        fixed lg:top-5 lg:bottom-auto top-auto bottom-0 
                        lg:left-1/2 lg:right-auto left-auto right-0 
                        lg:-translate-x-1/2
                        lg:-translate-y-full translate-y-0
                        transition-all duration-300 ease-linear 
                        z-20 lg:bg-gray-medium-light bg-primary-white lg:rounded-[17px] lg:overflow-hidden 
                        w-full lg:!p-5 !px-6
                    ${showModal ? 'lg:translate-y-0 translate-x-0': 'lg:!-translate-y-[calc(100%+20px)] translate-x-full'}`}>
                        <div className={"relative w-full lg:block hidden"}>
                            <div className={"relative flex items-center w-full justify-between"}>
                                <h2>Replace product</h2>
                            </div>
                            <button className={"w-4 h-4 absolute top-1/2 right-0 -translate-y-1/2"} onClick={handleModalClose}>
                                <img src={CloseIcon} alt="Close" className={"w-full h-full"}/>
                            </button>
                        </div>
                        <div className={"lg:hidden flex items-center justify-center relative py-8 min-h-[36px]"}>
                            <button className={"w-9 h-9 rounded-md flex flex-col justify-center items-center bg-gray-light absolute top-1/2 left-0 -translate-y-1/2"} onClick={handleModalClose}>
                                <img src={ChevronLeft} alt="Close modal"/>
                            </button>
                            <p>Replace</p>
                        </div>
                        <div className={"grid lg:grid-cols-5 grid-cols-1 items-stretch gap-x-3 w-full"}>
                            {
                                similarProducts.map(product => {
                                    return (
                                        <ResultProductCard product={product} key={product.id} hideReplace={true}/>
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