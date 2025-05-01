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

const Success = () => {
    const {showModal} = useSelector(state => state.similarProducts)
    const {successData} = useSelector(state => state.stepWizard)
    const dispatch = useDispatch()

    const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
    
    const handleDetailsModalOpen = () => {
        setDetailsModalIsOpen(true)
    }

    const location = useLocation()
    const slugFromURL = location.pathname.split("/").slice(-1)[0]
    const slug = slugFromURL !== "success" ? slugFromURL : localStorage.getItem("slug")

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
                image={import.meta.env.VITE_BASE_URL + successData?.data.design_image_url}
                url={successData?.data.unique_link}
                projectName={"My project"}
                parameters={parameters}
                place={"Bathroom"}
                classes={"absolute top-0 left-0 w-full h-full object-center object-cover"}
                callBack={handleDetailsModalOpen}
            />
            <ResultProducts list={successData?.data.products}/>
          {
              detailsModalIsOpen ? <ModalOverlay callback={()=> setDetailsModalIsOpen(false)}/> : null
          }
            <DetailsModal modalIsOpen={detailsModalIsOpen} callback={()=> setDetailsModalIsOpen(false)}/>
        </div>
    )
}

export default Success