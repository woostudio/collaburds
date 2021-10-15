import { newSpecPage } from '@stencil/core/testing';
import { Switch } from './switch';

it('should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Switch],
    html: `<cds-switch size="medium">
      My Switch
    </cds-switch>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-switch size="medium">
      <div class="field">
        <div class="control">
          <input class="is-medium is-rounded is-success switch" type="checkbox">
          <label>
            My Switch
          </label>
        </div>
      </div>
    </cds-switch>
  `);
});

it('should render outlined properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Switch],
    html: `<cds-switch size="medium" outlined="true">
      My Switch
    </cds-switch>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-switch size="medium" outlined="true">
      <div class="field">
        <div class="control">
          <input class="is-medium is-outlined is-rounded is-success switch" type="checkbox">
          <label>
            My Switch
          </label>
        </div>
      </div>
    </cds-switch>
  `);
});