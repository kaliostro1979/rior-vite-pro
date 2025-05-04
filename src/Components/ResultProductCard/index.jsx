import {Link} from "react-router";
import ReplaceIcon from "@/assets/icons/replace.svg"
import {
    closeSimilarProductsModal,
    openSimilarProductsModal,
    setSelectedProductSimilarProducts
} from "@/store/slices/similar-products/index.js";
import {useDispatch, useSelector} from "react-redux";
import SimilarProducts from "@/Components/SimilarProducts/index";
import {useEffect, useState} from "react";
import {CustomImage} from "@/Components/ui/index.js";

export const ResultProductCard = (props) => {
    const dispatch = useDispatch()
    const {parentID, similarProducts} = useSelector(state => state.similarProducts)
    const {product, hideReplace} = props

    const [setSelectedProductSimilarProductsTimeOut, setSetSelectedProductSimilarProductsTimeOut] = useState(0)
    const [openSelectedProductSimilarProductsTimeOut, setOpenSetSelectedProductSimilarProductsTimeOut] = useState(0)

    useEffect(() => {
        return () => {
            clearTimeout(setSelectedProductSimilarProductsTimeOut)
            clearTimeout(openSelectedProductSimilarProductsTimeOut)
        }
    }, [setSelectedProductSimilarProductsTimeOut, openSelectedProductSimilarProductsTimeOut]);

    const handleReplaceClick = () => {
        dispatch(closeSimilarProductsModal())
        setSetSelectedProductSimilarProductsTimeOut(
            setTimeout(() => {
                dispatch(setSelectedProductSimilarProducts(product))
            }, 0)
        )
        setOpenSetSelectedProductSimilarProductsTimeOut(
            setTimeout(() => {
                dispatch(openSimilarProductsModal())
            }, 1000)
        )
    }

    return (
        <>
            <div onClick={handleReplaceClick} className={"relative flex lg:flex-col flex-row lg:items-start items-stretch lg:gap-0 gap-x-3 group lg:hover:bg-gray-medium lg:p-3 py-4 lg:rounded-xl rounded-none cursor-pointer transition-all duration-300 lg:border-0 border-b border-gray-border"}>
                <div className={"relative lg:aspect-[8/9] aspect-[9/10] overflow-hidden rounded-xl lg:min-w-full min-w-[90px]"}>
                    <CustomImage src={import.meta.env.VITE_BASE_URL + `${product.product_image ? product.product_image : product.image}`} alt={""} classes={"absolute w-full h-full top-0 left-0 object-cover object-center group-hover:scale-105 transition-all duration-300"}/>
                </div>
                <div className={"flex lg:flex-col flex-row lg:justify-start justify-between items-start lg:gap-y-2 lg:gap-x-0 gap-x-8 lg:mt-2.5 mt-0 w-full grow"}>
                    <h3 className={"paragraph lg:max-w-[80%] max-w-full grow"}>{product.title}</h3>
                    <div className={"lg:w-full w-fit"}>
                        <Link to={product.url} className={"inline-block lg:text-lg text-base leading-none lg:font-bold font-medium"}>{product.price}</Link>
                    </div>
                </div>
                {
                    !hideReplace ?
                        <button className={"inline-flex flex-col justify-center items-center w-9 h-9 rounded-lg overflow-hidden border border-gray-border absolute lg:right-2.5 lg:bottom-2.5 right-0 bottom-5"}>
                            <CustomImage src={ReplaceIcon} alt={"Replace"}/>
                        </button> : null
                }
            </div>
            {
                parentID === product.id ? <SimilarProducts/> : null
            }
        </>

    )
}