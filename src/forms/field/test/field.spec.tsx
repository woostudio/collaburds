import { newSpecPage } from '@stencil/core/testing';
import { Field } from '../field';
import { Input } from '../../input/input';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field, Input],
    html: `<cds-field label="Hello">
             <cds-input></cds-input>
           </cds-field>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-field label="Hello">
      <div class="field">
        <label class="label">Hello</label>
        <cds-input>
          <div class="field">
            <div class="control">
              <input class="input" type="text">
            </>
          </div>
        </cds-input>
      </div>
    </cds-field>
  `);
});

it('Should render properly (horizontal)', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Field],
    html: `<cds-field horizontal label="Hello">
             <cds-input>
               <div class="control">
                 <input class="input" type="text">
               </div>
             </cds-input>
           </cds-field>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-field horizontal label="Hello">
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label">Hello</label>
        </div>
        <div class="field-body">
          <div class="field">
            <cds-input>
              <div class="control">
                <input class="input" type="text">
              </div>
            </cds-input>
          </div>
        </div>
      </div>
    </cds-field>
  `);
});
