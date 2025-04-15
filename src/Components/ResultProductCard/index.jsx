import { Link } from "react-router";
import ReplaceIcon from "@/assets/icons/replace.svg"
import { setSelectedProductSimilarProducts } from "@/store/slices/similar-products/index.js";
import { useDispatch, useSelector } from "react-redux";
import { SimilarProducts } from "@/Components/SimilarProducts/index";

export const ResultProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const parentID = useSelector(state => state.similarProducts.parentID)

    return (
        <div className={"relative"}>
            <div className={"group hover:bg-gray-medium p-3 rounded-xl cursor-pointer transition-all duration-300"}>
                <div className={"relative aspect-[8/9] overflow-hidden rounded-xl"}>
                    <img src={product.imageUrl} alt=""
                        className={"absolute w-full h-full top-0 left-0 object-cover object-center group-hover:scale-105 transition-all duration-300"} />
                </div>
                <div className={"flex flex-col gap-y-2 mt-2.5"}>
                    <h3 className={"paragraph"}>{product.title}</h3>
                    <div className={"flex justify-between items-center w-full"}>
                        <Link to={product.url} className={"inline-block text-lg leading-none font-bold"}>{product.price}</Link>
                        <button onClick={() => dispatch(setSelectedProductSimilarProducts(product))}
                            className={"inline-flex flex-col justify-center items-center w-9 h-9 rounded-lg overflow-hidden border border-gray-border relative z-10"}>
                            <img src={ReplaceIcon} alt="Replace" />
                        </button>
                    </div>
                </div>
            </div>
            {
                parentID === product.id ? <SimilarProducts /> : null
            }
        </div>

    )
}