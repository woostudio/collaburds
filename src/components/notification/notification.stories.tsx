import { storiesOf } from '@storybook/html';
import { boolean, select, text } from '@storybook/addon-knobs';
import notes from './readme.md';
import { iconList } from '../../core/common';

const icons: {} = {
  '<No Icon>': '',
  ...iconList.reduce((obj: Record<string, any>, currentId: string) => {
    return { ...obj, [currentId]: currentId };
  }, {}),
};

console.log();

storiesOf('Components|Notification', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
      <cds-notification
        position="${select('Position', ['default', 'bottom', 'top'], 'default')}"
        align-content="${select('Align Content', ['left', 'center', 'right'], 'left')}"
        heading="${text('Heading', 'Rotate your phone for fast card access. Anywhere.')}"
        icon="${select('Icon', icons, 'bell')}"
        text="${text('Text', 'Just make sure to turn off portrait orientation lock.')}"
        notification-type="${select(
          'Type',
          ['primary', 'success', 'neutral', 'info', 'warning', 'danger'],
          'primary'
        )}"
        dismissable="${boolean('Is Dismissable?', true)}"
        cta="${text('CTA', 'Action')}"
        cta-url="${text('CTA URL', 'http://www.google.com')}"
        cta-type="${select(
          'CTA Type',
          ['primary', 'success', 'neutral', 'info', 'warning', 'danger'],
          'primary'
        )}"
        cta-target="${select('CTA Target', ['emit', '_self', '_blank'], 'emit')}"
        rounded="${boolean('Rounded Corners', true)}"
        animated="${text('Animated', 'fadeIn')}"
        toast="${boolean('Is a toast', false)}"
      >
      </cds-notification>
    `;
  })
  .add('All notification types', () => {
    return `
      <cds-notification
        heading="(Primary) Rotate your phone for fast card access. Anywhere."
        text="Just make sure to turn off portrait orientation lock."
        notification-type="primary"
        dismissable="true"
        icon="bell"
      >
      </cds-notification>
      
      <div class="mt-3 mb-3"></div>
      
      <cds-notification
        heading="(Success) Activated"
        heading-icon="check-circle"
        text="Week 1 ends in 7 days"
        notification-type="success"
        dismissable="false"
        count-down-utc="2020-02-22T00:00:00.000Z"
        icon="bell"
      >
      </cds-notification>
      
      <div class="mt-3 mb-3"></div>
      
      <cds-notification
        heading="(Success) Your offer has been activated! "
        text="Shop now. Offer ends in 12 days"
        notification-type="success"
        dismissable="true"     
        align-content="left"
        icon="bell"
      >
      </cds-notification>

      <div class="mt-3 mb-3"></div>      
      
      <cds-notification
        heading="(Neutral) Sorry, you missed this one."
        text="Looks like you missed a week. Keep an eye out for your next offer."
        notification-type="neutral"
        icon="bell"
      >
      </cds-notification>
      
       <div class="mt-3 mb-3"></div>      
            
      <cds-notification
        heading="(Success) Rotate your phone for fast card access. Anywhere."
        text="Just make sure to turn off portrait orientation lock."
        notification-type="success"
        dismissable="true"
        icon="bell"
      >
      </cds-notification>
      
      <div class="mt-3 mb-3"></div>      
             
      <cds-notification
        heading="(Info) Rotate your phone for fast card access. Anywhere."
        text="Just make sure to turn off portrait orientation lock."
        notification-type="info"
        dismissable="true"
        icon="bell"
      >
      </cds-notification>
      
      <cds-notification
        heading="(Danger) Rotate your phone for fast card access. Anywhere."
        text="Just make sure to turn off portrait orientation lock."
        notification-type="danger"
        dismissable="true"
        icon="bell"
      >
      </cds-notification>
      
      <cds-notification
        heading="(Warning) Rotate your phone for fast card access. Anywhere."
        text="Just make sure to turn off portrait orientation lock."
        notification-type="warning"
        dismissable="true"
        icon="bell"
      >
      </cds-notification>    
    `;
  });
