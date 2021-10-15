import { Component, Prop, h, Event, EventEmitter, ComponentInterface } from '@stencil/core';

/**
 * Card Grid
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-card-grid',
  styleUrl: 'card-grid.scss',
})
export class CardGrid implements ComponentInterface {
  /**
   * Card title
   */
  @Prop() cardTitle: string;

  /**
   * Card img
   */
  @Prop() img: string;

  /**
   * Card icon
   */
  @Prop() icon: string;

  /**
   * Card link
   */
  @Prop() link: string;

  /**
   * Card description
   */
  @Prop() cardDescription: string;

  /**
   * Triggers when card is selected.
   */
  @Event() public cardGridSelected: EventEmitter;

  private handlecardGridSelectedClick = val => {
    event.stopPropagation();
    window.open(this.link, '_self');
    this.cardGridSelected.emit(val);
  };

  render() {
    return (
      <div class="card has-background-white" onClick={this.handlecardGridSelectedClick}>
        <div class="card-content pt-4 p-5">
          <div class="content">
            <p class="title is-4 has-text-weight-bold pt-1">
              {this.icon && <i class={'pr-2 ' + this.icon}></i>}
              {this.img && <img class="pr-2" src={this.img}></img>}
              {this.cardTitle}
            </p>
            <p class="description">{this.cardDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
