import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Container } from './container';

const breakpoints: { [key: string]: Container['breakpoint'] } = {
  widescreen: 'widescreen',
  fullhd: 'fullhd',
  desktop: 'desktop',
  none: undefined,
};

storiesOf('Layout|Container', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <cds-container 
        class="${text('Class', 'has-background-light')}"
        fluid="${boolean('Fluid', false)}"
        breakpoint="${select('Breakpoint', breakpoints, '')}"
      >
        <div class="has-text-centered pt-2 pb-2">
          Hello Container 👋
        </div>
      </cds-container>
    `;
  });
