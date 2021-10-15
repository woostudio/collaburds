//import { boolean, object } from '@storybook/addon-knobs';
import notes from './readme.md';
import { select } from '@storybook/addon-knobs';
import { iconList } from '../../core/common';

export default {
  title: 'Elements|Icon',
};

export const story1 = () => {
  return `<table class="table">
    
    <tbody>
      <tr>
        <td>
          <cds-icon icon="${select('Icon', iconList, 'camera')}" size="small"></cds-icon>
        </td>
        <td>
          <code>small</code>
        </td>
      </tr>
          
      <tr>
        <td><cds-icon icon="${select('Icon', iconList, 'camera')}" ></cds-icon></td>
        <td>                
        </td>
      </tr>
          
      <tr>
        <td><cds-icon icon="${select('Icon', iconList, 'camera')}"  size="medium"></cds-icon></td>
        <td>
          <code>medium</code>
        </td>
      </tr>
      
      <tr>
        <td><cds-icon icon="${select('Icon', iconList, 'camera')}"  size="large"></cds-icon></td>
        <td>
          <code>large</code>
        </td>
      </tr>    
      
      <tr>
        <td>
          <cds-icon icon="${select(
            'Icon',
            iconList,
            'camera'
          )}" size="small" color="info"></cds-icon>
        </td>
        <td>
          <code>small</code><code>has-text-info</code>
        </td>
      </tr>
          
      <tr>
        <td><cds-icon icon="${select('Icon', iconList, 'camera')}" color="success"></cds-icon></td>
        <td>
            <code>medium</code><code>has-text-success</code>
        </td>
      </tr>
          
      <tr>
        <td><cds-icon icon="${select('Icon', iconList, 'camera')}"  size="medium"
        color="warning"></cds-icon></td>
        <td>
          <code>has-text-warning</code>
        </td>
      </tr>
      
      <tr>
        <td><cds-icon icon="${select(
          'Icon',
          iconList,
          'camera'
        )}"  size="large" color="danger"></cds-icon></td>
        <td>
          <code>large</code><code>has-text-danger</code>
        </td>
      </tr>    
      
    </tbody>
</table>`;
};

story1.story = {
  name: 'Sizes and colours',
  parameters: {
    notes: notes,
  },
};
