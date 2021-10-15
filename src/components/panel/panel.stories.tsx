import notes from './readme.md';
import { storiesOf } from '@storybook/html';

storiesOf('Components|Panel', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-panel>
            <p class="panel-heading">repositories</p>
            <div class="panel-block">
              <p class="control has-icons-left">
                <cds-input size="small" type="text" placeholder="search"></cds-input>
                <span class="icon is-small is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <p class="panel-tabs">
              <a class="is-active">all</a>
              <a>public</a>
              <a>private</a>
              <a>sources</a>
              <a>forks</a>
            </p>
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              bulma
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              minireset.css
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              jgthms.github.io
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true"></i>
              </span>
              daniellowtw/infboard
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true"></i>
              </span>
              mojs
            </a>
            <label class="panel-block"> <cds-checkbox> remember me</cds-checkbox> </label>
            <div class="panel-block">
              <cds-button color="link" outlined fullwidth>reset all filters</cds-button>
            </div>
          </cds-panel>
        </cds-container>
      </cds-section>
    `;
  });
