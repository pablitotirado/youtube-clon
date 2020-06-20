import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserInfoAction } from 'actions/actions-user';
import styled from 'styled-components';

const ImageUser = styled.img`
  width: 2.1rem;
  border-radius: 50%;
`;
const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.userInfo);

  useEffect(() => {
    const loadUser = (token) => dispatch(UserInfoAction(token));
    loadUser(localStorage.getItem('access_token'));
  }, []);

  return (
    <>
      <ImageUser src={user.picture} />
    </>
  );
};

export default UserProfile;
