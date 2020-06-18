import React from 'react';
import Youtube from './youtube';
import UserSection from './user-section';
import Suscriptions from './suscriptions';
import MoreOfYoutube from './more-of-youtube';
import Configuration from './configuration';

const SiderbarOpen = () => {
  return (
    <>
      <Youtube />
      <UserSection />
      <Suscriptions />
      <MoreOfYoutube />
      <Configuration />
      <p>Footer</p>
    </>
  );
};

export default SiderbarOpen;
