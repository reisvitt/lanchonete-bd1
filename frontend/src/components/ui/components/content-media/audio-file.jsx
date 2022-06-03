/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getExtension } from '../../../../utils/extensions';

function AudioFile({ reference, onListenContent, onFinishContent }) {
  return (
    <AudioBox>
      <video
        controls="controls"
        id="podcast"
        controlsList="nodownload"
        onTimeUpdate={(e) => onListenContent('audio', e)}
        onEnded={() => onFinishContent()}
      >
        <source src={reference.url} type={`audio/${getExtension(reference.url)}`} />
        seu navegador não suporta HTML5
      </video>
    </AudioBox>
  );
}

AudioFile.propTypes = {
  reference: PropTypes.objectOf(PropTypes.object).isRequired,
  onListenContent: PropTypes.func.isRequired,
  onFinishContent: PropTypes.func.isRequired,
};

export default AudioFile;

const AudioBox = styled.div`
  position: relative;
    height: 0;
    padding-bottom: 54px;
    overflow: hidden;
    width: 100%;
    margin-bottom: 50px;
    box-shadow: 0 4px 22px rgb(0 0 0 / 15%);
    border-radius: 30px;

    video {
      position: absolute;
      width: 100%;
      height: 100%;
    }
`;
