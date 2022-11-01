import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';
// import { addJsxVDomParsleyAttrs } from '../../utils/func';
import { buildParsleyAttributes } from '../FormBuilder/util';

@Component({
  tag: 'apply-radio',
  styleUrl: 'radio.scss',
  shadow: false,
})
export class Radio {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() options: IQuestionMeta['options'];
  @Prop() required: IQuestionMeta['required'];

  @Event() valueChanged: EventEmitter<string>;

  private onRadioChangeValue({ currentTarget }: Event) {
    const storeKey = 'answers';
    const { value } = currentTarget as HTMLInputElement;
    this.valueChanged.emit(value)
    store.set(storeKey, { ...store.get(storeKey), [this.elementid]: { id: this.elementid, value } });
  }

  render() {
    const radioList = this.options.map(option => {
      const attrs = buildParsleyAttributes({ required: this.required });
      const input = (
        <input
          type="radio"
          id={`${this.elementid}-${option.value}`}
          name={this.elementid}
          checked={store.get('answers')[this.elementid]?.value == option.value}
          onChange={e => this.onRadioChangeValue(e)}
          value={option.value}
          data-required={this.required}
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
      <apply-label>
        <label class="form-label" htmlFor={this.elementid}>
          <span class="question">{this.question}</span>
          <required-icon required={this.required}></required-icon>
        </label>
        {radioList}
      </apply-label>
    );
  }
}
