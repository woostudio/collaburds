import { storiesOf } from '@storybook/html';

const tokensSpacing = [
  {
    category: 'spacing',
    token: '$block-spacing',
    value: '1.5rem',
    comments:
      'This is the vertical space <code>margin-bottom</code> added to several default Bulma elements. To add block spacing, use the SCSS mixin: <code>@extend %block</code>. For example: <code>.title, .subtitle, .notification, .table, .section</code>. This is not applied to the last child in a group. Note: This space can also be added via HTML using the  <code>.block</code> class.',
  },
  {
    category: 'spacing',
    token: '$column-gap',
    value: '0.75rem',
    comments:
      'This is the horizontal gap between columns <code>.column</code>. The space between two adjacent columns will add up to twice this value <code>1.5rem</code>',
  },
  {
    category: 'spacing',
    token: '$spacing-default',
    value: '1rem',
    comments: '',
  },
  {
    category: 'spacing',
    token: '$padding-default',
    value: '1rem',
    comments: '1rem padding top, bottom, left, right. Default padding for containers.',
  },
  {
    category: 'spacing',
    token: '$spacing-xxs',
    value: '$spacing-default * 0.25',
    comments: '4px',
  },
  {
    category: 'spacing',
    token: '$spacing-xs',
    value: '$spacing-default * 0.5',
    comments: '8px',
  },
  {
    category: 'spacing',
    token: '$spacing-s',
    value: '$spacing-default * 0.75',
    comments: '12px',
  },
  {
    category: 'spacing',
    token: '$spacing-m',
    value: '$spacing-default * 1.25',
    comments: '20px',
  },
  {
    category: 'spacing',
    token: '$spacing-l',
    value: '$spacing-default * 1.5',
    comments: '24px',
  },
  {
    category: 'spacing',
    token: '$spacing-xl',
    value: '$spacing-default * 2',
    comments: '32px',
  },
];

const helperClasses = [
  'p-1',
  'pl-1',
  'pr-1',
  'pt-1',
  'pb-1',
  'p-2',
  'pl-2',
  'pr-2',
  'pt-2',
  'pb-2',
  'p-3',
  'pl-3',
  'pr-3',
  'pt-3',
  'pb-3',
  'p-4',
  'pl-4',
  'pr-4',
  'pt-4',
  'pb-4',
  'p-5',
  'pl-5',
  'pr-5',
  'pt-5',
  'pb-5',
  'p-6',
  'pl-6',
  'pr-6',
  'pt-6',
  'pb-6',
  'p-7',
  'pl-7',
  'pr-7',
  'pt-7',
  'pb-7',
  'm-1',
  'ml-1',
  'mr-1',
  'mt-1',
  'mb-1',
  'ml-2',
  'mr-2',
  'mt-2',
  'mb-2',
  'ml-3',
  'mr-3',
  'mt-3',
  'mb-3',
  'ml-4',
  'mr-4',
  'mt-4',
  'mb-4',
  'ml-5',
  'mr-5',
  'mt-5',
  'mb-5',
  'ml-6',
  'mr-6',
  'mt-6',
  'mb-6',
  'ml-7',
  'mr-7',
  'mt-7',
  'mb-7',
];
storiesOf('Tokens|Spacing', module)
  .add('Tokens', () => {
    const tableTokens = tokens => {
      let html = '';
      tokens.map(value => {
        html += `
            <tr>
              <td><code>${value.token}</code></td>
              <td><code>${value.value}</code></td>
              <td>${value.comments}</td>
            </tr>`;
      });
      return html;
    };

    return `
      <div class="container">
    

        <h1 class="title is-1 mb-5">Spacing</h1>        
        <h3 class="subtitle is-3">Tokens</h3>

        <table class="table">
          <tr>
              <th style="width: 300px">Token</th>
              <th>Value</th>
              <th>Comment</th>
            </tr>
          ${tableTokens(tokensSpacing)}
        </table>
      </div>
    `;
  })
  .add('Helper classes', () => {
    const helperClassTable = colours => {
      let html = '';
      colours.map(value => {
        html += `  
          <tr>          
            <td>${value}</td>
            <td>
                <div class="has-background-grey-light-90" style="height: 150px; width: 150px;">
                    <div class="${value} has-background-grey-light-80" style="position: absolute">AaBbCc</div>
                </div>
                   
                </div>
            </td>              
          </tr>
`;
      });
      return html;
    };

    return `
      <div class="container">
        <h1 class="title is-1 mb-5">Typography</h1>        
        <h3 class="subtitle is-3">Helper classes</h3>
        <table class="table">
          <tr>
            <th>Helper class</th>
            <th>Example</th>
          </tr>
          
          ${helperClassTable(helperClasses)}
        </table>
       


      </div>
    `;
  });
