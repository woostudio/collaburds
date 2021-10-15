import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

/**
 * Accordion Item
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
export interface AccordionItem {
  title: string;
  content: string;
  open: boolean;
  id?: number;
}

@Component({
  tag: 'cds-accordion-item',
  styleUrl: 'accordion-item.scss',
  // shadow: true,
})
export class AccordionItem {
  /**
   * Drawer title
   */
  @Prop() drawerTitle: string;

  /**
   * isOpen
   */
  @Prop({
    reflect: true,
  })
  open = false;

  /**
   * iconAlignment
   */
  @Prop() iconAlign: string;

  @Element() el: HTMLElement;

  /**
   * Accordion drawer (title) clicked
   */
  @Event() drawerClicked: EventEmitter;

  drawerClickedHandler = () => {
    this.drawerClicked.emit(this.el);
  };

  render() {
    return (
      <Host
        class={{
          'accordion-item': true,
          'is-open': this.open,
        }}
      >
        <div
          class={{
            'accordion-drawer': true,
            'is-icon-left': this.iconAlign === 'left',
          }}
          onClick={this.drawerClickedHandler}
        >
          <div class="accordion-title">{this.drawerTitle}</div>
          <div class="accordion-icon">
            <cds-icon icon="chevron-down"></cds-icon>
          </div>
        </div>
        <div
          class={{
            'accordion-content': true,
            'is-open': this.open,
          }}
        >
          <div class="accordion-content-padding">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
