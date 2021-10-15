import {
  ComponentInterface,
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  Element,
  State,
  Watch,
} from '@stencil/core';
import { buttonColorProp, heroSizeProps, textColorProp, heroOverlayProps } from '../../core/types';

export type HeroAction = {
  text: string;
  link?: string;
  target?: '_self' | '_blank';
  color?: buttonColorProp;
};

/**
 * Hero
 * @slot header - Header Content
 * @slot footer - Footer Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-hero',
  styleUrls: ['hero.scss'],
})
export class Hero implements ComponentInterface {
  @State() _primaryAction: HeroAction;
  @State() _secondaryAction: HeroAction;

  /**
   * Size
   */
  @Prop() size: heroSizeProps;

  /**
   * Heading
   */
  @Prop() heading: string;

  /**
   * Heading Color
   */
  @Prop() headingColor: textColorProp;

  /**
   * Copy
   */
  @Prop() copy: string;

  /**
   * Copy Color
   */
  @Prop() copyColor: textColorProp;

  /**
   * Background image url
   * @imageUploader
   * @imageMinWidth 1500px
   * @imageMinHeight 1000px
   * @imageExt .jpg, .png
   */
  @Prop() image: string;

  /**
   * Background overlay
   */
  @Prop() overlay: heroOverlayProps;

  /**
   * Video url
   */
  @Prop() video: string;

  /**
   * Video embedded
   */
  @Prop() videoEmbedded: boolean;

  /**
   * Primary Action
   */
  @Prop() primaryAction: string;

  /**
   * Secondary Action
   */
  @Prop() secondaryAction: string;

  @Element() el: HTMLElement;

  /**
   * Triggers when primary action clicked
   */
  @Event() public primaryClicked: EventEmitter;

  /**
   * Triggers when secondary action clicked
   */
  @Event() public secondaryClicked: EventEmitter;

  componentWillLoad() {
    if (!!this.primaryAction) {
      this.primaryActionHandle(this.primaryAction);
    }
    if (!!this.secondaryAction) {
      this.secondaryActionHandle(this.secondaryAction);
    }
  }

  @Watch('primaryAction')
  primaryActionHandle(newValue: string) {
    try {
      this._primaryAction = JSON.parse(newValue);
    } catch (error) {
      console.log('primary-action: Invalid json string format');
      console.log(error);
    }
  }

  @Watch('secondaryAction')
  secondaryActionHandle(newValue: string) {
    try {
      this._secondaryAction = JSON.parse(newValue);
    } catch (error) {
      console.log('secondary-action: Invalid json string format');
      console.log(error);
    }
  }

  renderActionButton(action: HeroAction, clickEmitter: EventEmitter) {
    if (!!action) {
      const color = !!action.color ? action.color : 'link';
      const tag = !!action.link ? 'a' : 'button';
      return (
        <cds-button
          color={color}
          tag={tag}
          href={action.link}
          onClick={() => {
            clickEmitter.emit();
          }}
        >
          {action.text}
        </cds-button>
      );
    }
    return null;
  }
  renderHeader() {
    if (this.el.querySelector('[slot="header"]')) {
      return (
        <div class="hero-head">
          <slot name="header" />
        </div>
      );
    }
    return null;
  }
  renderFooter() {
    if (this.el.querySelector('[slot="footer"]')) {
      return (
        <div class="hero-head">
          <slot name="footer" />
        </div>
      );
    }
    return null;
  }
  renderBodyText() {
    const buttonAlign = !this.video ? 'center' : undefined;
    return (
      <div class={{ 'has-text-centered': !this.video }}>
        {!!this.heading && (
          <h1
            class={{
              title: true,
              'is-spaced': true,
              'is-size-1': true,
              [`has-text-${this.headingColor}`]: Boolean(this.headingColor),
            }}
          >
            {this.heading}
          </h1>
        )}

        {!!this.copy && (
          <h2
            class={{
              subtitle: true,
              [`has-text-${this.copyColor}`]: Boolean(this.copyColor),
            }}
          >
            {this.copy}
          </h2>
        )}

        {(!!this.primaryAction || !!this.secondaryAction) && (
          <cds-buttons align={buttonAlign} size="medium">
            {this.renderActionButton(this._primaryAction, this.primaryClicked)}
            {this.renderActionButton(this._secondaryAction, this.secondaryClicked)}
          </cds-buttons>
        )}
      </div>
    );
  }
  render() {
    return (
      <section
        class={{
          hero: true,
          [`is-${this.size}`]: Boolean(this.size),
        }}
      >
        {!!this.image && (
          <div class="hero-image" style={{ backgroundImage: `url(${this.image})` }}></div>
        )}
        {!!this.overlay && (
          <div
            class={{
              'hero-overlay': true,
              [this.overlay]: true,
            }}
          ></div>
        )}

        {this.renderHeader()}

        <div class="hero-body">
          <div class="container">
            {!!this.video ? (
              <article class="media">
                <div class="media-content">{this.renderBodyText()}</div>
                <div class="media-right">
                  <div class="hero-video-container">
                    <cds-video
                      video-url={this.video}
                      embedded={this.videoEmbedded}
                      controls={false}
                    ></cds-video>
                  </div>
                </div>
              </article>
            ) : (
              this.renderBodyText()
            )}
          </div>
        </div>

        {this.renderFooter()}
      </section>
    );
  }
}
