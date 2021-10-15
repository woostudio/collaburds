import { Component, Host, h, Prop, Element, Watch, State } from '@stencil/core';
import { iconProp } from '../../core/types';

export interface ListBlockItem {
  id: string;
  text: string;
  icon?: iconProp;
  iconAlignment?: string;
  backgroundColour?: string;
  textColour?: string;
}

/**
 * List Block
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-list-block',
  styleUrl: 'list-block.scss',
  shadow: false,
})
export class ListBlock {
  @State() _listBlockItems: ListBlockItem[] = [];
  /**
   * Adds horizontal border between list-block-items
   */
  @Prop() border: true;

  /**
   * Icon alignment - left, right
   */
  @Prop() iconAlign = 'right';

  /**
   * Array of ListBlockItem ( text, icon, backgroundClass, textClass)
   */
  @Prop() listBlockItems: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    if (this.border) {
      this.el.style.setProperty('--grid-gap', '1px');
    }
    if (!!this.listBlockItems) {
      this.listBlockItemsHandle(this.listBlockItems);
    }
  }

  @Watch('listBlockItems')
  listBlockItemsHandle(newValue: string) {
    try {
      this._listBlockItems = JSON.parse(newValue);
    } catch (error) {
      console.log('list-block-items: Invalid json string format');
      console.log(error);
    }
  }

  render() {
    return (
      <Host>
        {this._listBlockItems.map(listBlockItem => (
          <cds-list-block-item
            list-block-item-id={listBlockItem.id}
            background-colour={listBlockItem.backgroundColour}
            text-colour={listBlockItem.textColour}
            icon={listBlockItem.icon}
            icon-align={this.iconAlign}
            text={listBlockItem.text}
          ></cds-list-block-item>
        ))}
        <slot></slot>
      </Host>
    );
  }
}
