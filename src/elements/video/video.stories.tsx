import { storiesOf } from '@storybook/html';
import { text, select, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';
import { imageRatioOption } from '../../core/common';

storiesOf('Elements|Video', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
      <cds-video
        video-url="${text('Video URL', 'http://media.w3.org/2010/05/sintel/trailer.mp4')}"
        ratio="${select('Video Ratio', imageRatioOption, '16by9')}"
        embedded="${boolean('Is embedded', false)}"
        controls="${boolean('Show controls (not applicable to embedded video)', true)}"
        >
      </cds-video>
    `;
  })
  .add('Embedded', () => {
    return `
      <cds-video
        video-url="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0&controls=0&modestbranding=0"
        ratio="16by9"
        embedded="true"
        controls=""
        >
      </cds-video>
    `;
  });
