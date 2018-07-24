import React from 'react';
import PropTypes from 'prop-types'; //props 기본 설정
import './PresentationalCount.css';

const PresentationalCount = ({ number, onIncrement }) => {
  return (
    <div className="numberMain">
      <div>{number}</div>
      <button onClick={onIncrement}>더하기</button>
    </div>
  );
};
PresentationalCount.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func
};
PresentationalCount.defaultProps = {
  number: 0,
  onIncrement: () => console.warn("onIncrement check")
};

export default PresentationalCount;