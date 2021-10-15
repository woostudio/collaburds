import { Component, Prop, h, JSX, ComponentInterface, Event, EventEmitter } from '@stencil/core';

/**
 * Modal
 * @slot - Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-modal',
  styleUrls: ['modal.scss'],
})
export class Modal implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Is Active
   */
  @Prop({ mutable: true, reflect: true }) active = false;

  /**
   * Modal Card
   */
  @Prop() hasModalCard = false;

  /**
   * On Close
   */
  @Event() modalClosed: EventEmitter;

  private handleCloseButtonClick = (): void => {
    this.active = false;
    this.modalClosed.emit();
  };

  render(): JSX.Element {
    return (
      <div
        class={{
          modal: true,
          'is-active': this.active,
        }}
      >
        <div class="modal-background"></div>

        <div
          class={{
            'modal-content': !this.hasModalCard,
            'modal-card': this.hasModalCard,
          }}
        >
          <slot />
        </div>

        <button
          slot="close"
          class="modal-close is-large"
          aria-label="close"
          onClick={this.handleCloseButtonClick}
        ></button>
      </div>
    );
  }
}
