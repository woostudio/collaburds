import { Component, Host, h, Prop, Element, Listen } from '@stencil/core';

export interface AccordionItem {
  title: string;
  content: string;
  open: boolean;
  id?: number;
}

/**
 * Accordion
 * @slot - Accordion Items
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-accordion',
  styleUrl: 'accordion.scss',
})
export class Accordion {
  /**
   * Icon alignment - left or right position of toggle icon
   */
  @Prop() iconAlign: 'left' | 'right' = 'right';

  /**
   * Enable multiple accordion items to be open at the same time
   */
  @Prop() openMultipleItems = true;

  @Element() el: HTMLElement;

  componentWillLoad() {
    // add icon alignment prop to children
    const contentNodeList = this.el.querySelectorAll('cds-accordion-item') as NodeListOf<
      HTMLElement
    >;
    for (let i = 0; i < contentNodeList.length; i++) {
      const el: any = contentNodeList[i];
      el.setAttribute('icon-align', this.iconAlign);
    }
  }

  @Listen('drawerClicked')
  drawerClickHandler(event: CustomEvent) {
    const accordionEl = event.detail;
    const isOpen = !event.detail.open;

    // if openMultipleItems is false, close other accordions
    if (!this.openMultipleItems && !!isOpen) {
      const contentNodeList = this.el.querySelectorAll('.accordion-item') as NodeListOf<
        HTMLElement
      >;
      for (let i = 0; i < contentNodeList.length; i++) {
        const el: any = contentNodeList[i];
        el.setAttribute('open', false);
        const elContent = el.querySelector('.accordion-content');
        elContent.style.height = '0';
      }
    }
    const accordionContentEl = accordionEl.querySelector('.accordion-content');
    accordionContentEl.style.height = isOpen ? accordionContentEl.scrollHeight + 'px' : '0';
    accordionEl.setAttribute('open', isOpen);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
