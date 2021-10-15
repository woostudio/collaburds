import { storiesOf } from '@storybook/html';

const coloursBulma = [
  'primary',
  'white',
  'black',
  'light',
  'dark',
  'info',
  'link',
  'success',
  'danger',
  'warning',
  'grey-darker',
  'grey-dark',
  'grey',
  'grey-light',
  'grey-lighter',
];

const coloursCustom = ['secondary'];

const tokensColour = [
  {
    category: 'color',
    token: '$primary',
    value: 'hsl(30, 100%, 48%), #f67900',
    comments: 'Primary',
    example: '<div class="has-background-primary has-text-primary">Example</div>',
  },
  {
    category: 'color',
    token: '$secondary',
    value: 'hsl(203, 16%, 26%), #39464e',
    comments: 'Secondary',
    example: '<div class="has-background-secondary has-text-secondary">Example</div>',
  },
];

storiesOf('Tokens|Colour', module)
  .add('Tokens', () => {
    const tableColours = tokens => {
      let html = '';
      tokens.map(value => {
        html += `
            <tr>
              <td><code>${value.token}</code></td>
              <td><code>${value.value}</code></td>
              <td>${value.comments}</td>
              <td>${value.example}</td>
            </tr>`;
      });
      return html;
    };

    const tableAllColours = tokens => {
      let html = '';
      tokens.map(value => {
        html += `
            <tr>
                  <td><code>$${value}</code></td>
                  <td><div class="has-background-${value} has-text-${value}">Example</div></td>
            </tr>
        `;
      });
      return html;
    };

    return `<div class="container">
        <h1 class="title is-1 mb-5">Colour</h1>
        <h3 class="subtitle is-3">Tokens</h3>

        <table class="table">
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Comment</th>
            <th>Example</th>
          </tr>
          ${tableColours(tokensColour)}
        </table>

        <h3 class="subtitle is-3 mb-5">All colour tokens</h3>

        <table class="table">
          <tr>
            <th>Token</th>
            <th>Example</th>
          </tr>
          ${tableAllColours([...coloursBulma, ...coloursCustom])}
        </table>

`;
  })
  .add('Helper classes', () => {
    const colorTable = colours => {
      let html = '';
      colours.map(value => {
        html += `
          <tr>
            <td><div class="has-background-${value} has-text-${value}">Example</div></td>
            <td>has-background-${value}</td>
            <td><div class="has-text-${value} has-text-weight-bold">has-text-${value}</td>
          </tr>
`;
      });
      return html;
    };

    return `
      <div class="container">
        <h1 class="title is-1 mb-5">Colour</h1>
        <h3 class="subtitle is-3">Helper classes</h3>
        <table class="table">
          <tr>
            <th>Example</th>
            <th>Background helper class</th>
            <th>Text helper class</th>
          </tr>

          ${colorTable([...coloursBulma, ...coloursCustom])}
        </table>



      </div>
    `;
  });
