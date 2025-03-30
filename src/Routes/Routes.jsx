import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import GlobalComponents from "../Pages/GlobalComponents/GlobalComponents";

const RoutesModule = () => {
    return (
        <Routes>
            <Route path={``} element={<Home/>}/>
            <Route path={`global-components`} element={<GlobalComponents/>}/>
        </Routes>
    );
};

export default RoutesModule;