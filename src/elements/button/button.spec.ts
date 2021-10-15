import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

it('Should render button', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Button],
    html: `
      <cds-button
        tag="button"
        type="button"
        color="primary"
        disabled="true"
        fullwidth="true"
        outlined="true"
        light="true"
        inverted="true"
        rounded="true"
        hovered="true"
        focused="true"
        active="true"
        loading="true"
      >
        Button
      </cds-button>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-button color="primary" disabled="true" active="true" focused="true" fullwidth="true" hovered="true" inverted="true" light="true" loading="true" outlined="true" rounded="true" tag="button" type="button">
      <button ariadisabled="true" class="button is-active is-focused is-fullwidth is-hovered is-inverted is-light is-loading is-outlined is-primary is-rounded" disabled="" type="button">
        Button
      </button>
    </cds-button>
  `);
});