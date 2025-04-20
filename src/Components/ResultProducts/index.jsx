import {ResultProductCard} from "@/Components/index.js";



export const ResultProducts = ({list}) => {

    const parameters = [
        {
            id: "0",
            title: "Total price",
            value: "$2540"
        },
        {
            id: "1",
            title: "SQM",
            value: 4.5
        },
        {
            id: "2",
            title: "Sealing/H",
            value: 21.25
        },
        {
            id: "3",
            title: "Door/W",
            value: 8.5
        }
    ]

    return (
        <div className={"lg:mt-12"}>
            <div className={"lg:hidden block p-6"}>
               <ul className={"flex items-center justify-between gap-x-11"}>
                   {
                       parameters ? parameters.map((parameter)=>{
                           return (
                               <li key={parameter.id} className={"rounded-md flex flex-col items-start gap-y-1.5"}>
                                   <p className={"text-gray-label text-[11px] leading-none"}>{parameter.title}</p>
                                   <p className={`paragraph ${parameter.title.includes("price") ? '!font-bold' : ''}`}>{parameter.value}</p>
                               </li>
                           )
                       }) : null
                   }
               </ul>
            </div>
            <div className={"lg:mb-4 mb-3 py-1 bg-gray-light rounded-md overflow-hidden flex flex-col justify-center items-center max-w-max lg:px-1.5 px-6"}>
                <h2 className={"max-w-max text-xs leading-none text-gray-label"}>Recommended</h2>
            </div>
            <div className={"grid lg:grid-cols-4 grid-cols-1 lg:gap-x-[18px] gap-0 lg:items-stretch lg:px-0 px-6"}>
                {
                    list ? list.map((product) => {
                        return <ResultProductCard product={product} key={product.id}/>
                    }) : null
                }
            </div>
        </div>
    )
}