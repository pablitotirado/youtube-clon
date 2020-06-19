import React from 'react';
import { BoxTopNavDesktop } from './styles';
import Logo from 'components/logo';
import InputSearch from 'components/input-search';
import ButtonOptions from 'components/button-options';

const TopNavDesktop = () => {
  return (
    <BoxTopNavDesktop>
      <div className='left'>
        <ButtonOptions />
        <Logo />
      </div>
      <div className='center'>
        <InputSearch mobile={false} />
      </div>
      <div className='right'></div>
    </BoxTopNavDesktop>
  );
};

export default TopNavDesktop;
