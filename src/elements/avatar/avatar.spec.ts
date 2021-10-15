import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from './avatar';

it('Should render avatar with initials', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Avatar],
    html: `
    <td>
        <cds-avatar
        size="128x128"
        initials="AC"
        background="success"
      >
        </cds-avatar>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-avatar background="success" initials="AC" size="128x128">
      <figure class="cds-avatar image is-128x128 is-success">
        <span class="initials">
          AC
        </span>
      </figure>
    </cds-avatar>
  `);
});


it('Should render avatar with image', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Avatar],
    html: `
    <td>
        <cds-avatar
        size="128x128"
        initials="AC"
        background="success"
      >
        </cds-avatar>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-avatar background="success" initials="AC" size="128x128">
      <figure class="cds-avatar image is-128x128 is-success">
        <span class="initials">
          AC
        </span>
      </figure>
    </cds-avatar>
  `);
});