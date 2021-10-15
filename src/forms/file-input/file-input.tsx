import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Element,
  Listen,
  State,
} from '@stencil/core';
import { iconProp } from '../../core/types';

/**
 * File Input
 * @category Form
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-file-input',
  styleUrl: 'file-input.scss',
  shadow: false,
})
export class FileInput {
  /**
   * Enable drag drop file input
   */
  @Prop() dragDrop = false;

  /**
   * Drag drop instruction
   */
  @Prop() dragDropText = 'Drag files here';

  /**
   * id of input field
   */
  @Prop() inputId: string;

  /**
   * File types allowed
   */
  @Prop() accept: string;

  /**
   * Allow multiple files
   */
  @Prop() multiple: boolean;

  /**
   * Add class to the 'Add' button
   */
  @Prop() addButtonClass: string;

  /**
   * Add button label
   */
  @Prop() addButtonLabel: string;

  /**
   * Icon name
   */
  @Prop() icon: iconProp;

  /**
   * Label title
   */
  @Prop() labelTitle: string;

  /**
   * Label description
   */
  @Prop() labelDescription: string;

  /**
   * File(s) that were added. Emits event with FileList
   */
  @Event() filesAdded: EventEmitter;

  @Element() el: HTMLElement;

  dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  componentDidLoad() {
    if (this.dragDrop) {
      const dropboxEl = this.el.querySelector('#' + this.inputId + 'DropZone');
      dropboxEl.addEventListener('dragenter', this.dragenter, false);
      dropboxEl.addEventListener('dragover', this.dragover, false);
      dropboxEl.addEventListener(
        'drop',
        (e: any) => {
          e.stopPropagation();
          e.preventDefault();
          const dt = e.dataTransfer;
          const files = dt.files;
          const inputEl = this.el.querySelector('input');
          inputEl.files = files;
          this.addFiles(inputEl.files);
        },
        false
      );
    }
  }

  disconnectedCallback() {
    if (this.dragDrop) {
      const dropboxEl = this.el.querySelector('#' + this.inputId + 'DropZone');
      dropboxEl.removeEventListener('dragenter', this.dragenter);
      dropboxEl.removeEventListener('dragover', this.dragover);
    }
  }

  @Listen('change')
  handleFileChange(e) {
    e.preventDefault();
    const inputEl = this.el.querySelector('input');
    this.addFiles(inputEl.files);
  }

  addFiles(fileList: FileList) {
    // Emit FileList
    if (this.files.length === 0) {
      this.filesAdded.emit(fileList);
      const length = fileList.length;
      const fileArray = [];
      for (let i = 0; i < length; i++) {
        fileArray.push({
          index: i,
          name: fileList[i].name,
          size: fileList[i].size,
        });
      }
      this.files = fileArray;
      // console.log('this.files: ', JSON.stringify(this.files));
    }
  }

  removeFiles(e) {
    e.preventDefault();
    const inputEl = this.el.querySelector('input');
    // console.log('inputEl.value: ', inputEl.value);
    // console.log('inputEl.files: ', inputEl.files);
    inputEl.value = null;
    this.files = [];
    // console.log('inputEl.value: ', inputEl.value);
    // console.log('inputEl.files: ', inputEl.files);
  }

  @State()
  files: { index: number; name: string; size: number }[] = [];

  humanFileSize(size) {
    const i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    const fractionDigits = i > 1 ? 2 : 0;
    const numericPart = Number((size / Math.pow(1024, i)).toFixed(fractionDigits)) * 1;
    return numericPart + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
  }

  render() {
    return (
      <Host>
        {this.dragDrop && (
          <div
            class={{
              'drop-zone': true,
              'has-files': this.files.length > 0,
            }}
            id={this.inputId + 'DropZone'}
          >
            <cds-icon icon={this.icon} size="large" class="icon"></cds-icon>
            <div class="ml-3">{this.dragDropText}</div>
            {this.files.length > 0 && (
              <div class="mt-4 is-size-7">Existing files will be replaced</div>
            )}
          </div>
        )}
        {!this.dragDrop && (
          <label class="label" htmlFor={this.inputId}>
            <h6 class="label-title is-title">{this.labelTitle}</h6>
            <div class="label-description is-size-7">{this.labelDescription}</div>
            <cds-button class={this.addButtonClass}>
              {this.icon && <cds-icon icon={this.icon} class="icon"></cds-icon>}
              <div class="pl-2">{this.addButtonLabel}</div>
            </cds-button>
          </label>
        )}
        <input
          type="file"
          id={this.inputId}
          name="avatar"
          class="file-input-hidden"
          multiple={this.multiple}
          accept={this.accept}
        />
        {this.files && (
          <div class="file-list">
            {this.files.map(file => (
              <div class="file-list-item">
                <div class="file-list-name">{file.name}</div>
                <div class="file-list-size">{this.humanFileSize(file.size)}</div>
              </div>
            ))}
          </div>
        )}
        {this.files.length > 0 && (
          <div class="remove-files">
            <button class="button is-text" onClick={(event: UIEvent) => this.removeFiles(event)}>
              Remove {this.files.length > 1 && 'all'}
            </button>
          </div>
        )}
        {/*<div*/}
        {/*  class="remove-files has-text-link is-size-7"*/}
        {/*  onClick={(event: UIEvent) => this.debugInput(event)}*/}
        {/*>*/}
        {/*  Debug input*/}
        {/*</div>*/}
      </Host>
    );
  }
}
