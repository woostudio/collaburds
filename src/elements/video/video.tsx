import { Component, Prop, Element, Method, h, ComponentInterface } from '@stencil/core';
import { imageRatioProps } from '../../core/types';

/**
 * Video
 * @category Elements
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-video',
  styleUrl: 'video.scss',
})
export class Video implements ComponentInterface {
  private directVideoElement: HTMLVideoElement;
  private playIconElement: HTMLElement;
  /**
   * Video url
   */
  @Prop() videoUrl: string;

  /**
   * Video ratio
   */
  @Prop() ratio: imageRatioProps = '16by9';

  /**
   * Is embedded
   */
  @Prop() embedded = false;

  /**
   * Show video controls (not applicable to embedded video)
   */
  @Prop() controls = false;

  @Element() el: HTMLElement;

  /**
   * Pause video only apply to direct video
   */
  @Method()
  async pauseVideo() {
    if (this.directVideoElement && !this.directVideoElement.paused) {
      this.directVideoElement.pause();
    }
  }

  /**
   * Play video only apply to direct video
   */
  @Method()
  async playVideo() {
    if (this.directVideoElement && this.directVideoElement.paused) {
      this.directVideoElement.play();
    }
  }
  showPlayIcon = () => {
    this.playIconElement.hidden = false;
  };
  hidePlayIcon = () => {
    this.playIconElement.hidden = true;
  };
  playHandle = () => {
    this.hidePlayIcon();
  };
  pauseHandle = () => {
    this.showPlayIcon();
  };
  canPlayHandle = () => {
    this.showPlayIcon();
  };
  playToggleHandle = (e: MouseEvent) => {
    e.preventDefault();
    if (this.directVideoElement.paused) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  };
  public render(): Element {
    return (
      <figure
        class={{
          image: true,
          [`is-${this.ratio}`]: Boolean(this.ratio),
        }}
      >
        {this.embedded ? (
          <iframe
            class="has-ratio"
            width="640"
            height="360"
            src={this.videoUrl}
            frameborder="0"
            allowFullScreen={true}
          ></iframe>
        ) : (
          <div>
            <video
              class="has-ratio"
              controls={this.controls}
              ref={ref => (this.directVideoElement = ref)}
              onPlay={this.playHandle}
              onPause={this.pauseHandle}
              onPlaying={this.playHandle}
              onCanPlay={this.canPlayHandle}
              onClick={this.playToggleHandle}
            >
              <source src={this.videoUrl} type="video/mp4" />
            </video>
            <div
              class={{
                'video-control': true,
                'no-control': !this.controls,
              }}
              ref={ref => {
                this.playIconElement = ref;
                this.playIconElement.hidden = true;
              }}
            >
              <div
                class="video-play-icon"
                onClick={() => {
                  this.playVideo();
                }}
              >
                <cds-icon icon="play" size="medium" color="white"></cds-icon>
              </div>
            </div>
          </div>
        )}
      </figure>
    );
  }
}
