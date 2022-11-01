import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';
import { selectFirstOption } from '../../api/data';
@Component({
  tag: 'apply-select',
  styleUrl: 'select.scss',
  shadow: false,
})
export class Select {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() options: IQuestionMeta['options'];
  @Prop() required: IQuestionMeta['required'];

  @Event() valueChanged: EventEmitter<string>;

  private onSelectChangeValue({ currentTarget }: Event) {
    const { options, selectedIndex } = currentTarget as HTMLSelectElement;
    const value = options[selectedIndex].text;
    this.valueChanged.emit(value);
    store.set('answers', { ...store.get('answers'), [this.elementid]: { id: this.elementid, value } });
  }

  render() {
    const options = JSON.parse(JSON.stringify(selectFirstOption)).concat(this.options);
    const selectValue = store.get('answers')[this.elementid]?.value;
    return (
      <apply-label elementId={this.elementid}>
        {this.question}
        <required-icon required={this.required}></required-icon>
        <select
          class="form-control"
          id={this.elementid}
          onChange={e => this.onSelectChangeValue(e)}
          required={this.required}
        >
          {options.map(({ label, value, disabled }) => (
            <option disabled={disabled} selected={value === label || (!selectValue && disabled)} {...{ value }}>
              {label}
            </option>
          ))}
        </select>
      </apply-label>
    );
  }
}
