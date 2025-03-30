import { NavLink } from "react-router";
import Logo from "../Logo.jsx";

const Header = () => {
    return (
        <div className={"py-8 px-[60px]"}>
            <div className={"w-9 h-6"}>
                <NavLink to="/" end>
                    <Logo/>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;