import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { text, select } from '@storybook/addon-knobs';
import { iconList, imageSizesOption, colorsOption } from '../../core/common';

storiesOf('Elements|Avatar', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
    <cds-avatar
      class="${text('Class', '')}"
      size="${select('Size', [...imageSizesOption], '128x128')}"
      initials="${text('Initials', 'AC')}"
      background="${select('Background', [...colorsOption], 'light')}"
      image="${text('Background Image', '/assets/images/profile-sample.png')}"
      icon="${select('Icon', ['', ...iconList], '')}"
    >
    </cds-avatar>`;
  })
  .add('Examples', () => {
    return `
    <table class="table">
    <tbody>
      <tr>
        <td>
          <h6>With image</h6>
        </td>
        <td>
          <cds-avatar
          size="128x128"
          initials="AC"
          image="/assets/images/profile-sample.png"
        >
          </cds-avatar>
        </td>
      </tr>
      <tr>
        <td>
          <h6>With icon</h6>
        </td>
        <td>
          <cds-avatar
          size="128x128"
          initials="AC"
          icon="arrow-up"
          background="info"
        >
          </cds-avatar>
        </td>
      </tr>
      <tr>
        <td>
          <h6>With Initials</h6>
        </td>
        <td>
          <cds-avatar
          size="128x128"
          initials="AC"
          background="success"
        >
          </cds-avatar>
        </td>
      </tr>
      <tr>
        <td>
          <h6>With Broken Url Link</h6>
          fall back to initials
        </td>
        <td>
          <cds-avatar
          size="128x128"
          initials="AC"
          image="broken-link"
        >
          </cds-avatar>
        </td>
      </tr>
    </tbody>
    `;
  });
