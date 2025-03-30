import { Route, Routes} from "react-router-dom";
import Home from "../Pages/Home/Home";
import GlobalComponents from "../Pages/GlobalComponents/GlobalComponents";
import {useSelector} from "react-redux";
import Wizard from "../Pages/Wizard/Wizard.jsx";
import WizardStep from "../Pages/Wizard/WizardStep.jsx";

const RoutesModule = () => {
    const step = useSelector((state)=> state.stepWizard.step)

    return (
        <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`global-components`} element={<GlobalComponents/>}/>
           {/* <Route path={`wizard`} element={<Wizard/>}>
                <Route path={`step-${step}`} element={<WizardStep step={step}/>}/>
            </Route>*/}
        </Routes>
    );
};

export default RoutesModule;