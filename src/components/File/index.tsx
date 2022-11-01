import { Component, Element, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import store from '../../store';
import { blobToDataURL, getNamesFromFileList } from './util';
import { IQuestionMeta } from '../../api/types';

@Component({
  tag: 'apply-file',
  styleUrl: 'file.scss',
  shadow: false,
})
export class File {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() required: IQuestionMeta['required'];
  @Prop() type: IQuestionMeta['type'];
  @Prop() limit: IQuestionMeta['limit'] = 1;

  @Element() inputRef: HTMLApplyFileElement;

  @Event() valueChanged: EventEmitter<FileList>;

  @State() placeholder: string = 'Select file...';
  hasFile: boolean = false;
  onFocus: boolean = false;

  componentWillLoad() {
    const storeKey = 'answers';
    const data = store.get(storeKey)[this.elementid] || {};
    if (data.placeholder) {
      this.placeholder = data.placeholder;
    }
  }

  private async onInputChangeValue({ target }: Event) {
    const storeKey = 'answers';
    const files = (target as HTMLInputElement).files;
    let valueList = [];
    let value;
    const multiple = this.limit > 1;
    if (multiple) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const base64 = await blobToDataURL(file);
        valueList.push(base64);
      }
    } else {
      value = await blobToDataURL(files[0]);
    }
    const file = files[0];
    const base64 = await blobToDataURL(file);
    this.valueChanged.emit(files);
    this.placeholder = getNamesFromFileList(files);
    this.hasFile = base64 ? true : false;
    store.set(storeKey, {
      ...store.get(storeKey),
      [this.elementid]: { id: this.elementid, value: multiple ? valueList : value, placeholder: this.placeholder },
    });
  }

  render() {
    return (
      <apply-label elementId={this.elementid}>
        {this.question}
        <required-icon required={this.required}></required-icon>

        <div class="file-input file-input-new file-box">
          <div class="input-group file-caption-main">
            <div class="file-caption form-control sm-form-control kv-fileinput-caption">
              {this.hasFile ? <i class="fa-solid fa-file file-caption-icon"></i> : null}
              <input
                id="file-caption-name"
                class="file-caption-name"
                readOnly={true}
                onFocus={() => {
                  const box = this.inputRef.querySelector('.file-box') as HTMLInputElement;
                  box.className = 'file-input file-input-new file-box focus';
                  this.onFocus = true;
                }}
                onBlur={() => {
                  const box = this.inputRef.querySelector('.file-box') as HTMLInputElement;
                  box.className = 'file-input file-input-new file-box';
                  this.onFocus = false;
                }}
                onClick={() => {
                  const input = this.inputRef.querySelector('.file-ref') as HTMLInputElement;
                  input.click();
                }}
                placeholder={this.placeholder}
              />
            </div>
            <div class="input-group-btn input-group-append">
              <div class="btn btn-primary btn-file">
                <i class="fa-solid fa-folder-open"></i>&nbsp; <span class="hidden-xs">Browse …</span>
                <input
                  type={this.type}
                  tabIndex={-1}
                  multiple={this.limit > 1 ? true : false}
                  onChange={e => this.onInputChangeValue(e)}
                  id={this.elementid}
                  required={this.required}
                  class="file file-ref"
                  data-show-preview="false"
                  data-show-upload="false"
                  data-show-remove="false"
                  data-caption-class="sm-form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </apply-label>
    );
  }
}
