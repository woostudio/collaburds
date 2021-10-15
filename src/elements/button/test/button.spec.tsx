import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Button],
    html: `<cds-button>Hello</cds-button>`,
    supportsShadowDom: true,
  });

  expect(page.root).toEqualHtml(`
    <cds-button>
      <button class="button">
        Hello
      </button>
    </cds-button>
  `);

  expect(page.root.disabled).toBe(false);
});
