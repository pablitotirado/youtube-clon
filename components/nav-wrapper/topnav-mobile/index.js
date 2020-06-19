import React, { useState } from 'react';
import { BoxTopNavMobile, IconSearch } from './styles';

import SearchI from '../icon-search';
import Logo from 'components/logo';
import InputSearch from 'components/input-search';
import ButtonOptions from 'components/button-options';

const TopNavMobile = () => {
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
            <ButtonOptions />
            <Logo />
          </div>
          <div className='right'>
            {!searchMounted && (
              <IconSearch onClick={() => setSearchMounted(!searchMounted)}>
                <SearchI />
              </IconSearch>
            )}
          </div>
        </>
      )}
    </BoxTopNavMobile>
  );
};

export default TopNavMobile;
