import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';
import { buildParsleyAttributes } from '../FormBuilder/util';

@Component({
  tag: 'apply-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: false,
})
export class Checkbox {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() options: IQuestionMeta['options'];
  @Prop() required: IQuestionMeta['required'];
  @Prop() limit: IQuestionMeta['limit'] = 1;

  @Event() valueChanged: EventEmitter<string>;

  private onCheckboxChangeValue({ currentTarget }: Event) {
    const { parentElement } = currentTarget as HTMLInputElement;
    let valueArray = [];
    parentElement.parentElement.childNodes.forEach((dom: HTMLElement) => {
      if (dom.className === 'form-check') {
        const { value, checked } = dom.childNodes[0] as HTMLInputElement;
        if (checked) {
          valueArray.push(value);
        }
      }
    });
    store.set('answers', { ...store.get('answers'), [this.elementid]: { id: this.elementid, value: valueArray } });
  }

  checkValue(value): boolean {
    const data = store.get('answers')[this.elementid] || {};
    const values = data.value || [];
    const vv = value.toString();
    let status = false;
    for (let val of values) {
      if (val == vv) {
        status = true;
        break;
      }
    }
    return status;
  }

  render() {
    const radioList = this.options.map(option => {
      const attrs = buildParsleyAttributes({ required: this.required });
      const input = (
        <input
          type="checkbox"
          name={this.elementid}
          onChange={e => this.onCheckboxChangeValue(e)}
          value={option.value}
          checked={this.checkValue(option.value)}
          required={this.required}
          data-parsley-mincheck={this.limit}
          {...attrs}
        ></input>
      );
      return (
        <div class="form-check">
          {input}
          <label class="form-check-label">{option.label}</label>
        </div>
      );
    });
    return (
      <apply-label elementId={this.elementid}>
        {this.question}
        <required-icon required={this.required}></required-icon>
        {radioList}
      </apply-label>
    );
  }
}
