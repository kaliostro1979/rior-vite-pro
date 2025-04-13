import {ProductCard, ResultProductCard} from "@/Components/index.js";

export const ResultProducts = ({list})=>{
    console.log(list);
    return (
        <div className={"mt-12"}>
            <div className={"mb-4 py-1 px-1.5 bg-gray-light rounded-md overflow-hidden flex flex-col justify-center items-center max-w-max"}>
                <h2 className={"max-w-max text-xs leading-none text-gray-label"}>Recommended</h2>
            </div>
            <div className={"grid grid-cols-5 gap-x-[18px] items-stretch"}>
                {
                    list ? list.map((product)=>{
                        return <ResultProductCard product={product}/>
                    }) : null
                }
            </div>
        </div>
    )
}