import { storiesOf } from '@storybook/html';
const tokensTypography = [
  {
    category: 'typography',
    token: '$body-size',
    value: '16px',
    comments:
      'This is the base font size upon which all rem units are based: 1rem equals 16px. Changing this value will scale all other fonts',
  },
  {
    category: 'typography',
    token: '$family-system',
    value:
      "BlinkMacSystemFont, -apple-system, 'Inter', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    comments:
      'Default font for body text, form inputs, buttons. Notice it will try to default to the Apple operating system fonts first, then Segoe UI (Windows) and Roboto (Android) and finally fallback to sans-serif.',
  },
  {
    category: 'typography',
    token: '$family-sans-serif',
    value: 'Inter',
    comments:
      'Used in all headings (h1-h6), titles <code>weight: 500</code> and subtitles <code>weight: 400</code>. <h2 class="title is-size-2">This is a title</h2><h4 class="subtitle is-size-4">This is a subtitle</h4>  ',
    example: '',
  },
  {
    category: 'typography',
    token: '$size-1',
    value: '3rem',
    comments: '<h1 class="title is-size-1">Collabur Design System</h1>',
  },
  {
    category: 'typography',
    token: '$size-2',
    value: '2.5rem',
    comments: '<h2 class="title is-size-2">Collabur Design System</h2>',
  },
  {
    category: 'typography',
    token: '$size-3',
    value: '2rem',
    comments: '<h3 class="title is-size-3">Collabur Design System</h3>',
  },
  {
    category: 'typography',
    token: '$size-4, $size-large',
    value: '1.5em',
    comments: '<h4 class="title is-size-4">Collabur Design System</h4>',
  },
  {
    category: 'typography',
    token: '$size-5, $size-medium',
    value: '1.25rem',
    comments: '<h5 class="title is-size-5">Collabur Design System</h5>',
  },
  {
    category: 'typography',
    token: '$size-6, $size-normal',
    value: '1rem',
    comments:
      '<h6 class="title is-size-6">Collabur Design System</h6><div class="is-size-6">This is the normal font size.</div>',
  },
  {
    category: 'typography',
    token: '$size-8, $size-normal-larger',
    value: '1.1rem',
    comments: '<div class="is-size-normal-larger">This is the normal larger font size.</div>',
  },

  {
    category: 'typography',
    token: '$size-9, $size-normal-smaller',
    value: '0.9rem',
    comments:
      '<div class="is-size-normal-smaller">This is the normal smaller font size. <span class="has-text-grey-light-10">Used with <code>$grey-light-10</code> as secondary text and in form labels.</span></div>',
  },
  {
    category: 'typography',
    token: '$size-7, $size-small',
    value: '0.75rem',
    comments: '<div class="is-size-7">This is the small font size.</div>',
  },
  {
    category: 'typography',
    token: '$body-line-height',
    value: '1.5',
    comments:
      'Default line-height is 1.5. Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. ',
  },
  {
    category: 'typography',
    token: '$title-line-height',
    value: '1.1',
    comments: 'Used in headings and titles <code>.title</code>',
  },
  {
    category: 'typography',
    token: '$subtitle-line-height',
    value: '1.25',
    comments: 'Used subtitles <code>.subtitle</code>',
  },
];

const typographyHelperClasses = [
  'is-size-1',
  'is-size-2',
  'is-size-3',
  'is-size-4',
  'is-size-5',
  'is-size-6',
  'is-size-7',
  'is-size-8',
  'is-size-9',
  'title',
  'title is-1',
  'title is-2',
  'title is-3',
  'title is-4',
  'title is-5',
  'title is-6',
  'subtitle',
  'subtitle is-1',
  'subtitle is-2',
  'subtitle is-3',
  'subtitle is-4',
  'subtitle is-5',
  'subtitle is-6',
  'subtitle is-7',
];

storiesOf('Tokens|Typography', module)
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
        <h1 class="title is-1 mb-5">Typography</h1>
        <h3 class="subtitle is-3 mb-5">Tokens</h3>

        <table class="table">
          <tr>
              <th style="width: 300px">Token</th>
              <th>Value</th>
              <th>Comment</th>
            </tr>
          ${tableTokens(tokensTypography)}
        </table>

      </div>
    `;
  })
  .add('Helper classes', () => {
    const typographyHelperClassTable = colours => {
      let html = '';
      colours.map(value => {
        html += `
          <tr>
            <td>${value}</td>
            <td><div class="${value} ">All their equipment and instruments are alive.</div></td>
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

          ${typographyHelperClassTable(typographyHelperClasses)}
        </table>



      </div>
    `;
  })
  .add('Examples', () => {
    return `
      <div class="container">


       <div class="section">
          <h1 class="title is-1">Headings</h1>
          <p class="mb-5">There are six heading sizes, based on the standard html tags (h1, h2, h3, h4, h5, h6).
          When used without a <code>.title</code> or <code>.subtitle</code> class, headings have no margins or padding. See title and subtitle sections below.
          The heading font is Fresh Sans, medium weight <code>font-weight: 500</code></p>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h1>h1 The spectacle before us was indeed sublime</h1>
                <h2>h2 A shining crescent far beneath the flying vessel.</h2>
                <h3>h3 Mist enveloped the ship three hours out from port.</h3>
                <h4>h4 All their equipment and instruments are alive.</h4>
                <h5>h5 Mist enveloped the ship three hours out from port.</h5>
                <h6>h6 I watched the storm, so beautiful yet terrific.</h6>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h1 class="title is-1">Font sizes</h1>
          <p>
            There are 9 font sizes available. The base / default / normal font size is
          16px <code>$size-normal</code>,  <code>font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;</code>.
          </p>

          <p class="mb-5">
            Font sizes and spacing are calculated from rem units (in this case 1rem equals 16px).
          </p>

          <table class="table is-bordered">
            <thead>
              <tr>
                <th>
                  Class
                </th>
                <th>
                  Font-size
                </th>
                <th>
                  Token / SCSS variable
                </th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td><code>is-size-1</code></td>
                  <td><code>3rem</code></td>
                  <td><code>$size-1</code></td>
                  <td><div class="is-size-1">size-1</div></td>
                </tr>
                <tr>
                  <td><code>is-size-2</code></td>
                  <td><code>2.5rem</code></td>
                  <td><code>$size-2</code></td>
                  <td><div class="is-size-2">size-2</div></td>
                </tr>
                <tr>
                  <td><code>is-size-3</code></td>
                  <td><code>2rem</code></td>
                  <td><code>$size-3</code></td>
                  <td><div class="is-size-3">size-3</div></td>
                </tr>
                <tr>
                  <td><code>is-size-4</code></td>
                  <td><code>1.5rem</code></td>
                  <td><code>$size-4, $size-large</code></td>
                  <td><div class="is-size-4">size-4</div></td>
                </tr>
                <tr>
                  <td><code>is-size-5</code></td>
                  <td><code>1.25rem</code></td>
                  <td><code>$size-5, $size-medium</code></td>
                  <td><div class="is-size-5">size-5</div></td>
                </tr>
                <tr>
                  <td><code>is-size-6</code></td>
                  <td><code>1rem</code></td>
                  <td><code>$size-6, $size-normal</code></td>
                  <td><div class="is-size-6">size-6</div></td>
                </tr>
                <tr>
                  <td><code>is-size-7</code></td>
                  <td><code>0.75rem</code></td>
                  <td><code>$size-7, $size-small</code></td>
                  <td><div class="is-size-7">size-7</div></td>
                </tr>
                <tr>
                  <td><code>is-size-8</code></td>
                  <td><code>1.1rem</code></td>
                  <td><code>$size-normal-larger</code></td>
                  <td><div class="is-size-8">size-8</div></td>
                </tr>
                <tr>
                  <td><code>is-size-9</code></td>
                  <td><code>0.9rem</code></td>
                  <td><code>$size-normal-smaller</code></td>
                  <td><div class="is-size-9">size-9</div></td>
                </tr>
            </tbody>
          </table>

          <h3 class="title is-3">Paragraph text</h3>
          <p class="mb-5">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>

          <h3 class="title is-3">Line heights</h3>
          <p>Line heights are relative to the size of the element. Default line height (eg. paragraphs) is 1.5. Titles have a line height of 1.1 and subtitles 1.25.</p>
        </div>


        <div class="section">
          <h1 class="title is-1">Titles</h1>
          <p>Titles are headings <code>h1</code>, <code>h2</code>, <code>h3</code>,
           <code>h4</code>, <code>h5</code>, <code>h6</code> with  added <code>.title</code> class and size class <code>is-1</code>, <code>is-2</code>, <code>is-3</code>, <code>is-4</code>, <code>is-5</code>.
             This will add space below the heading.</p>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h1 class="title is-1">Title 1</h1>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <h2 class="title is-2">Title 2</h2>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="title is-3">Title 3</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>
          </div>
          <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <h4 class="title is-4">Title 4</h4>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child box">
              <h5 class="title is-5">Title 5</h5>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child box">
              <h6 class="title is-6">Title 6</h6>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
            </div>
          </div>
        </div>
        </div>

        <div class="section">
          <h1 class="title is-1">Subtitles</h1>
           <p>Titles are headings <code>h1</code>, <code>h2</code>, <code>h3</code>,
           <code>h4</code>, <code>h5</code>, <code>h6</code> with  added <code>.subtitle</code> class and size class <code>is-1</code>, <code>is-2</code>, <code>is-3</code>, <code>is-4</code>, <code>is-5</code>.
            This will change the weight of the heading and add space below it.
             Subtitles can be used by themselves or in combination with a title. </p>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h1 class="subtitle is-1">Subtitle 1</h1>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <h2 class="subtitle is-2">Subtitle 2</h2>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="subtitle is-3">Subtitle 3</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>
          </div>
          <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <h4 class="subtitle is-4">Subtitle 4</h4>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child box">
              <h5 class="subtitle is-5">Subtitle 5</h5>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child box">
              <h6 class="subtitle is-6">Subtitle 6</h6>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
            </div>
          </div>
        </div>
        </div>

        <div class="section">
          <h1 class="title is-1">Titles with subtitles</h1>
          <p>When you combine a title and a subtitle, they move closer together.</p>

          <p>As a rule of thumb, it is recommended to use a size difference of two. So if you use a title is-1, combine it with a subtitle is-3. </p>

          <p class="mb-5">You can maintain the normal spacing between titles and subtitles if you use the <code>is-spaced</code> modifier on the first element.</p>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h1 class="title is-1">Title 1</h1>
                <h3 class="subtitle is-3">Subtitle 3</h3>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <h2 class="title is-2">Title 2</h2>
                <h4 class="subtitle is-4">Subtitle 4</h4>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>

            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="title is-3">Title 3</h3>
                <h5 class="subtitle is-5">Subtitle 5</h5>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-parent is-4">
              <div class="tile is-child box">
                <h4 class="title is-4">Title 4</h4>
                <h6 class="subtitle is-6">Subtitle 6</h6>
                <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
            </div>

            <div class="tile is-parent is-4">
                <div class="tile is-child box">
                  <h3 class="title is-3 is-spaced">Lorem ipsum dolor sit amet</h3>
                  <h5 class="subtitle is-5 ">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</h5>
                </div>
            </div>

         </div>

        </div>

        <div class="section">
            <h2 class="title is-1">Other heading examples</h2>
            <div class="tile is-ancestor">
              </div>

              <div class="tile is-parent is-4">
                <div class="tile is-child box">
                  <h4 class="title is-4 has-text-centered">Lorem ipsum dolor sit amet</h4>
                  <p class="has-text-centered">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
                </div>
              </div>

              <div class="tile is-parent is-4">
                <div class="tile is-child box">
                  <h4 class="title is-6 has-text-centered">Lorem ipsum dolor sit amet</h4>
                  <p class="is-size-7 has-text-centered">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
                </div>
              </div>
            </div>


        </div>
    </div>
    `;
  });
