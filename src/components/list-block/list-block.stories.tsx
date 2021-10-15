import { boolean, object, radios } from '@storybook/addon-knobs';
import notes from './readme.md';

const listAmericanFolk = [
  {
    id: '1',
    text: 'American Folk Songs',
    backgroundColour: 'primary',
    textColour: 'white',
    icon: 'music',
  },
  {
    id: '2',
    text: 'When I First Came To This Land',
    icon: 'smile',
  },
  {
    id: '3',
    text: 'Freight Train Blues',
    icon: 'frown',
  },
  {
    id: '4',
    text: 'The Wedding Dress Song',
    icon: 'star',
  },
  {
    id: '5',
    text: 'The Kicking Mule',
    icon: 'star',
  },
];

const listAmericanFolkNoIcons = [
  {
    id: '6',
    text: 'American Folk Songs',
    backgroundColour: 'info',
    textColour: 'white',
  },
  {
    id: '7',
    text: 'When I First Came To This Land',
  },
  {
    id: '8',
    text: 'Freight Train Blues',
  },
  {
    id: '9',
    text: 'The Wedding Dress Song',
  },
  {
    id: '10',
    text: 'The Kicking Mule',
  },
];

export default {
  title: 'Components|List Block',
};

export const story1 = () => {
  const listBlock: any = document.createElement('cds-list-block');
  listBlock.border = boolean('Border', true);
  listBlock.listBlockItems = JSON.stringify(
    object('Items (text, icon, backgroundColor, textColor)', listAmericanFolkNoIcons)
  );
  return listBlock;
};
story1.story = {
  name: 'Example',
  parameters: {
    notes: notes,
  },
};

export const story2 = () => {
  const listBlock: any = document.createElement('cds-list-block');
  listBlock.border = boolean('Border', true);
  listBlock.iconAlign = radios('Icon alignment', { Left: 'left', Right: 'right' }, 'left');
  listBlock.listBlockItems = JSON.stringify(
    object('Items (text, icon, backgroundColor, textColor)', listAmericanFolk)
  );
  return listBlock;
};
story2.story = {
  name: 'Example with icons',
  parameters: {
    notes: notes,
  },
};

export const story3 = () => {
  return `<cds-list-block border="${boolean('Border', true)}">
        <cds-list-block-item background-colour="danger" text-colour="white">
            American Folk Songs
        </cds-list-block-item>
        
        <cds-list-block-item>
            <p>Old Dan Tucker</p> <p> is a really great song</p>
        </cds-list-block-item>
        
        <cds-list-block-item><b>Aunt Rhody is bold</b></cds-list-block-item>
        
        <cds-list-block-item>Goodnight Irene</cds-list-block-item>
        
        <cds-list-block-item>Molly Malone</cds-list-block-item>
    </cds-list-block>`;
};

story3.story = {
  name: 'Example using content slots',
  parameters: {
    notes: notes,
  },
};
