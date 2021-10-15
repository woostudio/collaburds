import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { iconProp } from '../../../core/types';

/**
 * List Block Item
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-list-block-item',
  styleUrl: 'list-block-item.scss',
  shadow: false,
})
export class ListBlockItem {
  /**
   * Id (for event emission)
   */
  @Prop() listBlockItemId: string;

  /**
   * Text of list item
   */
  @Prop() text: string;

  /**
   * Background color - used to generate bulma class name ie. has-background-COLOUR
   */
  @Prop() backgroundColour: string;

  /**
   *Text color class - used to generate bulma class name ie. has-text-COLOUR
   */
  @Prop() textColour: string;

  /**
   * Icon
   */
  @Prop() icon: iconProp;

  /**
   * Icon alignment - left, right
   */
  @Prop() iconAlign = 'right';

  /**
   * Emit event on click of list item (only emitted if item is created via text prop)
   */
  @Event() listBlockItemClicked: EventEmitter;
  private handleItemClick = () => {
    this.listBlockItemClicked.emit(this.listBlockItemId);
  };

  render() {
    return (
      <Host
        class={{
          ['has-background-' + this.backgroundColour]: !!this.backgroundColour,
          ['has-text-' + this.textColour]: !!this.textColour,
        }}
      >
        <slot></slot>
        {this.text && (
          <div
            class={{
              'list-block-item-container': true,
              'icon-align-left': this.iconAlign !== 'right',
            }}
            onClick={() => this.handleItemClick()}
          >
            <div class="list-block-item-text">{this.text}</div>
            {this.icon && (
              <div class="list-block-item-icon">
                <cds-icon icon={this.icon}></cds-icon>
              </div>
            )}
          </div>
        )}
      </Host>
    );
  }
}
