import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function ProgressBarCircle({ percentage = 98, status = '' }) {
  const getDeg = () => {
    if (percentage > 100) {
      return 180;
    }

    return (180 / 100) * percentage;
  };

  return (
    <Container percentage={getDeg()}>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill" />
          </div>
          <div className="mask half">
            <div className="fill" />
          </div>
          <div className="inside-circle">
            {`${percentage}%`}
            <Status>
              {status}
            </Status>
          </div>
        </div>
      </div>
    </Container>
  );
}

ProgressBarCircle.propTypes = {
  percentage: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

const Container = styled.div`
  .circle-wrap {
    width: 100px;
    height: 100px;
    background: #fefcff;
    border-radius: 50%;
    border: 1px solid #c4c4c4;
    background-color: #c4c4c4;
  }

  .circle{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  }

  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 50%;
  }

  .circle-wrap .circle .mask {
    clip: rect(0px, 100px, 100px, 50px);
  }

  .circle-wrap .inside-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #FFF;
    text-align: center;
    color: #333;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /* color animation */

  /* 3rd progress bar */
  .mask .fill {
    clip: rect(0px, 50px, 100px, 0px);
    background-color: #70EE70;
  }

  .mask.full,
  .circle .fill {
    animation: fill ease-in-out 3s;
    transform: ${(props) => `rotate(${props.percentage}deg)`};
  }

  @keyframes fill{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(225deg);
    }
  }
`;

const Status = styled.label`
font-weight: 400;
text-align: center;
font-size: 12px;
`;
