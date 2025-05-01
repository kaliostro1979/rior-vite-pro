import { CustomUpload, Toast } from '@/Components/ui';
import { ProductsList } from "@/Components/index.js";
import { useDispatch, useSelector } from "react-redux";
import { STEPS } from "@/constants/index.js";
import { useLocation } from 'react-router'
import { useEffect } from 'react';
import { resetWizard } from '@/store/slices/steps';

const Home = () => {
    const location = useLocation()
    const dispatch = useDispatch()


    useEffect(() => {
        if (location.pathname === "/") {
            dispatch(resetWizard())
        }
    }, [dispatch, location])

    const { errors } = useSelector(
        state => {
            return state.stepWizard
        }
    );

    return (
        <div className={"lg:px-0 px-6"}>
            <Toast message={errors["floorPlan"]} />
            <CustomUpload />
            <ProductsList />
        </div>
    );
};

export default Home;
