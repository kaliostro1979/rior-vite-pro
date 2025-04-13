import { ImageBanner } from "@/Components/ui"
import BannerImage from "@/assets/images/image-banner.png"

const parameters = [
    {
        title: "SQM",
        value: 4.5
    },
    {
        title: "Wall area",
        value: 21.25
    },
    {
        title: "Perimeter",
        value: 8.5
    }
]

const Success = ()=>{
    return (
        <div className={"rounded-2xl overflow-hidden"}>
            <ImageBanner 
                image={BannerImage}
                projectName={"My project"}
                parameters={parameters}
                place={"Bathroom"}
                classes={"absolute top-0 left-0 w-full h-full object-center object-cover"}/>
        </div>
    )
}

export default Success