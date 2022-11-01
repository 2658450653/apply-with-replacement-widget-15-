import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';

@Component({
  tag: 'apply-textarea',
  styleUrl: 'textarea.scss',
  shadow: false,
})
export class Textarea {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() limit: IQuestionMeta['limit'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() required: IQuestionMeta['required'];

  @Event() valueChanged: EventEmitter<string>;

  private onInputChangeValue({ target }: Event) {
    const storeKey = 'answers';
    const value = (target as HTMLTextAreaElement).value;
    this.valueChanged.emit(value);
    store.set(storeKey, { ...store.get(storeKey), [this.elementid]: { id: this.elementid, value } });
  }

  render() {
    return (
      <apply-label elementId={this.elementid}>
        {this.question}
        <textarea
          class="form-control"
          id={this.elementid}
          maxLength={this.limit}
          onInput={e => this.onInputChangeValue(e)}
          required={this.required}
          value={store.get('answers')[this.elementid]?.value}
        />
      </apply-label>
    );
  }
}
