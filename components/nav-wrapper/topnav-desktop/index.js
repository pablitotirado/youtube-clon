import React from 'react';
import { BoxTopNavDesktop } from './styles';
import Logo from 'components/logo';
import InputSearch from 'components/input-search';
import ButtonOptions from 'components/button-options';
import UserProfile from 'components/user-profile';

const TopNavDesktop = () => {
  return (
    <BoxTopNavDesktop>
      <div className='left'>
        <ButtonOptions />
        <Logo />
      </div>
      <div className='center'>
        <InputSearch />
      </div>
      <div className='right'>
        <UserProfile />
      </div>
    </BoxTopNavDesktop>
  );
};

export default TopNavDesktop;
