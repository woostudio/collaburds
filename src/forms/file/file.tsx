import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import { colorProp } from '../../core/types';

/**
 * File
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-file',
  styleUrls: ['file.scss'],
})
export class FileInput implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Name
   */
  @Prop() name = '';

  /**
   * Placeholder
   */
  @Prop() placeholder = 'Choose a file…';

  /**
   * Color
   */
  @Prop() color: colorProp;

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Alignment
   */
  @Prop() align: 'left' | 'centered' | 'right';

  /**
   * Add a placeholder for the selected file name
   */
  @Prop() hasName = false;

  /**
   * Move the CTA to the right side
   */
  @Prop() right = false;

  /**
   * Expand the name to fill up the space
   */
  @Prop() fullwidth = false;

  /**
   * File
   */
  @Prop({ mutable: true }) file: File;

  /**
   * Boxed block
   */
  @Prop() boxed = false;

  private handleFileChange = (event): void => {
    this.file = event.target.files[0];
  };

  private get fileName(): string | undefined {
    return this.file && this.file.name;
  }

  get displayName(): boolean {
    return this.hasName && Boolean(this.fileName);
  }

  render(): JSX.Element {
    return (
      <div
        class={{
          file: true,
          [`is-${this.size}`]: Boolean(this.size),
          [`is-${this.color}`]: Boolean(this.color),
          [`is-${this.align}`]: Boolean(this.align),
          'has-name': this.displayName,
          'is-right': this.right,
          'is-fullwidth': this.fullwidth,
          'is-boxed': this.boxed,
          [this.class]: Boolean(this.class),
        }}
      >
        <label class="file-label">
          <input onChange={this.handleFileChange} class="file-input" type="file" name={this.name} />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">{this.placeholder}</span>
          </span>
          {this.displayName && <span class="file-name">{this.fileName}</span>}
        </label>
      </div>
    );
  }
}
