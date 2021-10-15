import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from './tooltip';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Tooltip],
    html: `<cds-tooltip>
            <p slot="tooltip-content"><strong>Tooltip content</strong></p>
             <p>tooltip</p>
           </cds-tooltip>`,
  });

  expect(page.root).toEqualHtml(`
      <cds-tooltip>
        <div class="tooltip-trigger">
            <p>tooltip</p>
         </div>
         <div class="tooltip-inner" style="position: absolute; left: 0; top: 0; margin: 0;">
           <div class="tooltip-content">
             <p slot="tooltip-content">
              <strong>Tooltip content</strong>
             </p>
           </div>
           <div class="tooltip-arrow" data-popper-arrow style="position: absolute;"></div>
      </cds-tooltip>
  `);
});
