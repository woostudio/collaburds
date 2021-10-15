import { newSpecPage } from '@stencil/core/testing';
import { Range } from './range';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Range],
    html: `
    <cds-range
    label="Range Slider"
    min="0"
    max="100"
    value="10"
    step="1"
  >
  </cds-range>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-range label="Range Slider" max="100" min="0" step="1" value="10">
      <div>
        <div class="range-header">
          <div class="range-label">
            <label class="is-normal label" htmlfor="">
              Range Slider
            </label>
          </div>
          <div class="range-value">
            10
          </div>
        </div>
        <div class="range-wrap">
          <div class="range-inner">
            <div class="range-fill" style="width: 10%;"></div>
            <input class="range" max="100" min="0" step="1" type="range" value="10">
            <output class="bubble" style="left: NaNpx;"></output>
          </div>
        </div>
      </div>
    </cds-range>
  `);
});
