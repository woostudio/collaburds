import { newSpecPage } from '@stencil/core/testing';
import { FileInput } from '../file';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [FileInput],
    html: `<cds-file name="upload" size="small" color="black"></cds-file>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-file name="upload" size="small" color="black">
      <div class="file is-small is-black">
        <label class="file-label">
          <input class="file-input" type="file" name="upload" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </cds-file>
  `);
});
