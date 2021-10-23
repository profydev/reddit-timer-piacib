import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import loadingImg from './loading.svg';

const rotate360 = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const LoadingSVG = styled.img`
  animation: ${rotate360} 3s linear infinite;
height: 200px;
width: 200px;
margin: 100px 470px;
position: absolute;
`;
const Loading = ({ isLoading }) => (isLoading ? <LoadingSVG src={loadingImg} alt="loading spinner" /> : null);
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loading;
