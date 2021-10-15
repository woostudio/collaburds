import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';
import { Content } from './content';

const sizes: { [key: string]: Content['size'] } = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  none: undefined,
};

storiesOf('Elements|Content', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Sizes', () => {
    return `
      <cds-content
        class="${text('Class', '')}"
        size="${select('Size', sizes, undefined)}"
      >
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
          eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate
          semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <h2>Second level</h2>
        <p>
          Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque
          condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
          venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at
          dignissim dui. Ut et neque nisl.
        </p>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
      </cds-content>
    `;
  });
