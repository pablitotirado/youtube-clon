import React, { useState } from 'react';
import { BoxTopNavMobile, IconSearch } from './styles';

import SearchI from '../icon-search';
import Logo from 'components/logo';
import InputSearch from 'components/input-search';
import ButtonOptions from 'components/button-options';
import UserProfile from 'components/user-profile';

const TopNavMobile = ({ message, mobile }) => {
  const [searchMounted, setSearchMounted] = useState(false);
  return (
    <BoxTopNavMobile>
      {searchMounted ? (
        <InputSearch
          mobile={true}
          onClick={() => setSearchMounted(!searchMounted)}
        />
      ) : (
        <>
          <div className='left'>
            <ButtonOptions open />
            <Logo />
          </div>
          <div className='right'>
            {!searchMounted && (
              <IconSearch onClick={() => setSearchMounted(!searchMounted)}>
                <SearchI />
              </IconSearch>
            )}
            <UserProfile />
          </div>
        </>
      )}
    </BoxTopNavMobile>
  );
};

TopNavMobile.defaultProps = {
  message: 'hola mundo',
  mobile: false
};
export default TopNavMobile;
