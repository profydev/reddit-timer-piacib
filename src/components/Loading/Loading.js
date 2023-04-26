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
 font-size: 9px;
  animation: ${rotate360} 3s linear infinite;
  height: 20em;
  width:  20em;
  left:calc(50% - 10em);
  top:calc(50% - 10em + ${(props) => props.theme.table.tableHeadHeight} / 2);
  position: absolute;
`;
const Loading = ({ isLoading }) => (isLoading ? <LoadingSVG src={loadingImg} alt="loading spinner" /> : null);
Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loading;
