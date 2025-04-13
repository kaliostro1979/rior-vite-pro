import {Link} from "react-router";

export const ResultProductCard = ({product})=>{
    return (
        <Link to={product.url} className={"inline-block"}>
            <div className={"group hover:bg-gray-medium p-3 rounded-xl cursor-pointer transition-all duration-300"}>
                <div className={"relative aspect-[8/9] overflow-hidden rounded-xl"}>
                    <img src={product.imageUrl} alt="" className={"absolute w-full h-full top-0 left-0 object-cover object-center group-hover:scale-105 transition-all duration-300"}/>
                </div>
                <div className={"flex flex-col gap-y-2 mt-2.5"}>
                    <h3 className={"paragraph"}>{product.title}</h3>
                    <p className={"text-lg leading-none font-bold"}>{product.price}</p>
                </div>
            </div>
        </Link>
    )
}