import {CustomUpload, Toast} from '@/Components/ui';
import {ProductsList} from "@/Components/index.js";
import {useSelector} from "react-redux";
import React from "react";
import {STEPS} from "@/constants/index.js";

const Home = () => {
    const { errors } = useSelector(
        state => {
            return state.stepWizard
        }
    );

    return (
        <div>
            <Toast message={errors["floorPlan"]}/>
            <CustomUpload/>
            <ProductsList/>
        </div>
    );
};

export default Home;
