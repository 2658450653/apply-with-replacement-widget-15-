import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';

@Component({
  tag: 'apply-multiselect',
  styleUrl: 'multiselect.scss',
  shadow: false,
})
export class Multiselect {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() options: IQuestionMeta['options'];
  @Prop() required: IQuestionMeta['required'];
  @Prop({ reflect: true, mutable: true }) value: string[];

  @Event() valueChanged: EventEmitter<string[]>;

  private onSelectChangeValue({ target }: Event) {
    const { options } = target as HTMLSelectElement;
    // get all of the items that were selected
    this.value = Array.from(options)
      .filter(elm => elm.selected)
      .reduce((acc, curr) => [...acc, curr.text], []);

    this.valueChanged.emit(this.value);
    store.set('answers', { ...store.get('answers'), [this.elementid]: { id: this.elementid, value: this.value } });
  }

  render() {
    return (
      <apply-label elementId={this.elementid}>
        {this.question}
        <required-icon required={this.required}></required-icon>
        <select
          class="form-control"
          id={this.elementid}
          multiple
          onChange={e => this.onSelectChangeValue(e)}
          required={this.required}
        >
          {this.options.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
      </apply-label>
    );
  }
}
