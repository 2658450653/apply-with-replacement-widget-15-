import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import dayjs from 'dayjs';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';

@Component({
  tag: 'apply-date',
  styleUrl: 'date.scss',
  shadow: false,
})
export class Date {
  @Prop() format: IQuestionMeta['format'];
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() required: IQuestionMeta['required'];
  @Prop() type: IQuestionMeta['type'];
  @Prop() min: IQuestionMeta['min'];
  @Prop() max: IQuestionMeta['max'];

  @State() value: string;

  @Event() valueChanged: EventEmitter<string>;

  private onInputChangeValue({ target }: Event) {
    const value = dayjs((target as HTMLInputElement).value).format('YYYY-MM-DD');
    this.valueChanged.emit(value);
    store.set('answers', {
      ...store.get('answers'),
      [this.elementid]: { id: this.elementid, value, format: this.format },
    });
  }

  componentWillRender() {
    this.value = store.get('answers')[this.elementid]?.value;
  }

  render() {
    return (
      <apply-label elementId={this.elementid}>
        {this.question}
        <required-icon required={this.required}></required-icon>
        <input
          class="form-control"
          id={this.elementid}
          max={this.max && dayjs(this.max).format('YYYY-MM-DD')}
          min={this.min && dayjs(this.min).format('YYYY-MM-DD')}
          onInput={e => this.onInputChangeValue(e)}
          required={this.required}
          type={this.type}
          value={this.value}
        />
      </apply-label>
    );
  }
}
