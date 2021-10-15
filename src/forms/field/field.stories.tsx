import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Form|Form', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-input input-id="name" label="Name" placeholder="Text input">
          </cds-input>

          <cds-input input-id"="username" label="Username" message="This username is available" input-status="success" value="bulmil" >
          </cds-input>


          <cds-input input-id"="username" label="Email" type="email" message="This email is invalid" input-status="danger" value="hello@">
          </cds-input>
     
          <cds-select label="Subject" subject-id="subjectId" >
            <option>Select dropdown</option>
            <option>With options</option>
          </cds-select>

          <cds-field label="Message">
            <cds-textarea></cds-textarea>
          </cds-field>

          <cds-field>
            <cds-checkbox checkbox-id="terms">I agree to the <a href="#">terms and conditions</a></cds-checkbox>
          </cds-field>

          <cds-field>
            <cds-radio radio-id="r1" radio-name="radioGroup">Yes</cds-radio>
            <cds-radio radio-id="r2" radio-name="radioGroup">No</cds-radio>
          </cds-field>

          <cds-field grouped>
            <div class="control">
              <cds-button color="primary">Submit</cds-button>
            </div>
            <div class="control">
              <cds-button color="dark">Cancel</cds-button>
            </div>
          </cds-field>

        </cds-container>
      </cds-section>
    `;
  });
