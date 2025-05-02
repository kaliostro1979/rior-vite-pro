import { Link } from 'react-router';

import Logo from '@/assets/icons/logo.svg';
import { ROUTES } from '@/constants';
import {CustomImage} from "@/Components/ui/index.js";

export const Header = () => {
  return (
    <div className={'py-8 px-[60px]'}>
      <div className={'w-9 h-6'}>
        <Link to={ROUTES.home}>
            <CustomImage src={Logo} alt={"Logo"}/>
        </Link>
      </div>
    </div>
  );
};
