import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';

import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import ResizeObserver from 'resize-observer-polyfill';
import smoothscroll from 'smoothscroll-polyfill';

interface Slide {
  heading: string;
  paragraph: string;
  imageSrc?: string;
  slideId?: string;
  ctaText?: string;
}

/**
 * Carousel
 * @slot - Slide Content
 * @category Components
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-carousel',
  styleUrl: 'carousel.scss',
})
export class Carousel implements ComponentInterface {
  private _slides: Slide[] = [];

  /**
   * Slides (only applicable for on-boarding and slider carousel types)
   */
  @Prop() slides = '';
  /**
   * Show prev and next buttons
   */
  @Prop() showPrevNext = false;
  /**
   * Show pagination
   */
  @Prop() showPagination = false;
  /**
   * Hide pagination on mobiles
   */
  @Prop() hidePaginationMobile = false;
  /**
   * 'default'
   */
  @Prop() carouselType: 'default' | 'on-boarding' | 'slider' | 'fixed-width' = 'default';
  /**
   * Heading that sits on top of carousel
   */
  @Prop() heading = '';
  /**
   * Show dismiss link
   */
  @Prop() showDismiss = false;

  /**
   * Fixes width of slide to pixels
   * Used to customise the width of the  'offer-card' type carousel
   */
  @Prop() fixedWidthPixels: number;

  /**
   * Padding bottom on carousel scroller
   */
  @Prop() scrollerPaddingBottom: string;

  /**
   * Show gradient under previous / next buttons
   */
  @Prop() showPrevNextGradient: false;

  /**
   * Gradient colour (as rgb values eg '255, 255, 255')
   */
  @Prop() gradientColourRgb = '255, 255, 255';

  /**
   * Hide prev/next buttons for mobile devies
   */
  @Prop() hidePrevNextForMobile: true;

  @Element() el: HTMLElement;

  scrollerEl: HTMLElement;

  @State() slideCount = 0;
  @State() currentSlideIndex = 0;

  @State() isScrolling = false;
  @State() scrollingLastPosition = 0;

  @Watch('slides')
  parseSlides(newValue: string) {
    this._slides = JSON.parse(newValue);
  }

  // width of each 'slide'
  galleryItemSize: number;

  // resize observer
  resizeObserver: ResizeObserver;

  /**
   * Triggered at the end of gallery
   */
  @Event() afterSlideScroll: EventEmitter;

  @Listen('afterSlideScroll')
  handleScroll() {
    // console.log('afterSlideScroll');

    let index = Math.round(this.scrollerEl.scrollLeft / this.galleryItemSize);

    // check if scroller is at the end, if so, update index
    if (this.scrollerEl.scrollLeft + this.scrollerEl.offsetWidth === this.scrollerEl.scrollWidth) {
      index = this.slideCount - 1;
    }
    // console.log(
    //   'this.scrollerEl.scrollLeft',
    //   this.scrollerEl.scrollLeft,
    //   'this.scrollerEl.scrollLeft',
    //   this.scrollerEl.scrollLeft,
    //   'index after',
    //   index,
    //   'this.scrollerEl.offsetWidth',
    //   this.scrollerEl.offsetWidth,
    //   'this.scrollerEl.scrollWidth',
    //   this.scrollerEl.scrollWidth
    // );

    this.currentSlideIndex = index;
  }

  /**
   * Triggers when cta on slide is clicked.
   */
  @Event() public slideCtaClick: EventEmitter;

  private handleSlideCtaClick = (val) => {
    this.slideCtaClick.emit(val);
  };

  /**
   * Triggers when dismiss is clicked
   */
  @Event() public dismissSlider: EventEmitter;

  private handleDismissSlider = () => {
    this.dismissSlider.emit();
  };

  init() {
    const gallery = this.el.querySelector('.cds-carousel-gallery');
    let galleryItemSize = this.scrollerEl.querySelector('.slide').clientWidth;
    this.slideCount = this.scrollerEl.querySelectorAll('.slide').length;

    // slides are fixed width - calculate how many slides fit into the scroller and adjust slide count
    if (this.fixedWidthPixels) {
      galleryItemSize = this.fixedWidthPixels;
      let slidesPerContainer = Math.floor(gallery.clientWidth / galleryItemSize);
      slidesPerContainer = slidesPerContainer > 0 ? slidesPerContainer : 1;
      galleryItemSize = galleryItemSize * slidesPerContainer;
      this.slideCount = Math.ceil(this.slideCount / slidesPerContainer);
    }

    this.galleryItemSize = galleryItemSize;

    if (this.showPagination) {
      // correct pagination if currentSlideIndex > slide Count
      // which happens when you are one of the last slides and are resizing from smaller to larger viewport
      if (this.currentSlideIndex + 1 > this.slideCount) {
        console.log('resize scroll to last');
        this.currentSlideIndex = this.slideCount - 1;
        this.scrollToSlide(this.slideCount - 1);
      }
    }
  }

  scrollToSlide(slideNumber: number) {
    const gallery = this.el.querySelector('.cds-carousel-gallery');
    const galleryScroller = gallery.querySelector('.cds-carousel-scroller');
    galleryScroller.scrollTo({
      left: this.galleryItemSize * slideNumber,
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollPrev() {
    const scrollToLeft = this.galleryItemSize * (this.currentSlideIndex - 1);
    this.scrollerEl.scrollTo(scrollToLeft, 0);
  }

  scrollNext() {
    const scrollToLeft = this.galleryItemSize * (this.currentSlideIndex + 1);
    this.scrollerEl.scrollTo(scrollToLeft, 0);
  }

  componentWillLoad() {
    smoothscroll.polyfill();

    if (this.slides) {
      this.parseSlides(this.slides);
    }
  }

  componentDidLoad() {
    this.init();
    this.el.style.setProperty('--fixed-width', `${this.fixedWidthPixels}px`);
    this.el.style.setProperty('--scroller-padding-bottom', this.scrollerPaddingBottom);
    this.el.style.setProperty('--gradient-rgb', this.gradientColourRgb);

    if (this.showPagination) {
      // Use ResizeObserver to re-initialise carousel 250ms after last resize event
      this.resizeObserver = new ResizeObserver(debounce(() => this.init(), 250));
      // Observe the scroller
      this.resizeObserver.observe(this.scrollerEl);

      // update pagination if user scrolls manually. throttle scroll event using lodash 'throttle'
      this.scrollerEl.addEventListener(
        'scroll',
        throttle(() => this.afterSlideScroll.emit(), 100),
        false
      );
    }
  }

  disconnectedCallback() {
    if (this.showPagination) {
      this.scrollerEl.removeEventListener('scroll', null, false);
      this.resizeObserver.unobserve(this.scrollerEl);
    }
  }

  getCarouselCircles() {
    const pointers = [];

    if (this.slideCount <= 1) return pointers;

    for (let k = 0; k < this.slideCount; k++) {
      pointers.push(
        <button
          class={{
            'cds-carousel-pagination-indicator': true,
            'is-current-slide': this.currentSlideIndex === k,
          }}
          onClick={(e) => {
            e.preventDefault();
            this.scrollToSlide(k);
            this.currentSlideIndex = k;
          }}
        />
      );
    }
    return pointers;
  }

  removeSlide(indexToRemove: number) {
    const newSlides = this._slides.filter(function (_value, index) {
      return indexToRemove !== index;
    });
    this.slides = JSON.stringify(newSlides); // this change in the prop will cause component to re-render
    this.scrollToSlide(indexToRemove - 1);
  }

  getSlides() {
    const htmlOnboardingSlides = this._slides.map((slide) => (
      <div class="slide on-boarding">
        <cds-content-block size="is-small" direction="column" classes="on-boarding">
          <div class="pt-0 p-7 pb-4">
            <img src={slide.imageSrc} />
          </div>
          <h4 class="title is-4 has-text-centered">{slide.heading}</h4>
          <p class="has-text-centered has-text-grey">{slide.paragraph}</p>
        </cds-content-block>
      </div>
    ));

    const htmlSliderSlides = this._slides.map((slide) => (
      <div class="slide slider">
        <div class="box has-text-centered is-fixed-height">
          {slide.imageSrc ? (
            <div class="pt-0 p-7 pb-0">
              <img src={slide.imageSrc} />
            </div>
          ) : null}
          <h6 class="title is-6">{slide.heading}</h6>
          <p class="is-size-7 has-text-grey">{slide.paragraph}</p>
          {slide.ctaText ? (
            <a onClick={this.handleSlideCtaClick.bind(this, slide.slideId)}>
              <h6 class="pt-1 has-text-primary">{slide.ctaText}</h6>
            </a>
          ) : null}
        </div>
      </div>
    ));

    if (this.carouselType === 'slider') {
      return htmlSliderSlides;
    } else if (this.carouselType === 'on-boarding') {
      return htmlOnboardingSlides;
    } else {
      // 'default' or 'fixed-width'
      return <slot />;
    }
  }

  render() {
    return (
      <div class="cds-carousel-gallery">
        {this.heading ? (
          <div class="column pb-1 pl-4 pr-4">
            <div class="columns is-mobile ">
              <div class="column">
                <h5 class="is-5">{this.heading}</h5>
              </div>
              {this.showDismiss && (
                <div class="column has-text-right is-narrow">
                  <a class="is-size-7" onClick={this.handleDismissSlider}>
                    Dismiss
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : null}
        <div
          ref={(el) => (this.scrollerEl = el as HTMLElement)}
          class={{
            'cds-carousel-scroller': true,
            [this.carouselType]: true,
          }}
        >
          {this.getSlides()}
        </div>
        {this.showPrevNext ? (
          <div>
            <span
              onClick={(e) => {
                e.preventDefault();
                this.scrollPrev();
              }}
              class={{
                'cds-carousel-gallery-button prev': true,
                'is-hidden': this.currentSlideIndex == 0,
                'is-gradient': this.showPrevNextGradient,
                'is-hidden-mobile': this.hidePrevNextForMobile,
              }}
            >
              <span class="icon">
                <i class="fas fa-chevron-left has-text-primary is-size-5"></i>
              </span>
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                this.scrollNext();
              }}
              class={{
                'cds-carousel-gallery-button next': true,
                'is-hidden': this.currentSlideIndex == this.slideCount - 1,
                'is-gradient': this.showPrevNextGradient,
                'is-hidden-mobile': this.hidePrevNextForMobile,
              }}
            >
              <span class="icon">
                <i class="fas fa-chevron-right has-text-primary is-size-5"></i>
              </span>
            </span>
          </div>
        ) : null}
        {this.showPagination ? (
          <div class="cds-carousel-pagination">{this.getCarouselCircles()}</div>
        ) : null}
      </div>
    );
  }
}
