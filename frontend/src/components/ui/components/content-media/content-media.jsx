/* eslint-disable no-console */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import PropTypes from 'prop-types';
import AudioFile from './audio-file';
import Loading from '../../../loading';

function ContentMedia({ content, watchContent }) {
  let flag = false;

  const onFinishContent = async () => {
    try {
      await watchContent.watch({
        percent: 100,
        content: `/v1/contents/${content.id}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const onListenContent = async (type, eventParams) => {
    const timePassed = parseInt(type === 'video' ? eventParams.seconds : eventParams.target.currentTime, 10);
    const timeToUpdate = 15;

    if (timePassed % timeToUpdate === 0 && !flag && timePassed > 1) {
      flag = true;

      try {
        await watchContent.watch({
          progress: timePassed,
          content: `/v1/contents/${content.id}`,
        });
      } catch (error) {
        console.error(error.message);
      }
    } else if (timePassed % (timeToUpdate + 1) === 0 && flag && timePassed > 1) {
      flag = false;
    }
  };

  function Medias() {
    switch (content['@type']) {
      case 'AudioContent':
        return (
          <AudioFile
            reference={content.audioFile}
            onListenContent={onListenContent}
            onFinishContent={onFinishContent}
          />
        );
      case 'TextContent':
        return null;
      default:
        return <Loading />;
    }
  }

  return (
    <div className="medias">
      <Medias />
    </div>
  );
}

export default ContentMedia;

ContentMedia.propTypes = {
  content: PropTypes.objectOf(PropTypes.object).isRequired,
  watchContent: PropTypes.objectOf(PropTypes.any).isRequired,
};
