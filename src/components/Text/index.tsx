import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';

@Component({
  tag: 'apply-text',
  styleUrl: 'text.scss',
  shadow: false,
})
export class Text {
  @Prop() format: IQuestionMeta['format'];
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() limit: IQuestionMeta['limit'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() required: IQuestionMeta['required'];
  @Prop() storeType: IQuestionMeta['storeType'];

  @Event() valueChanged: EventEmitter<string>;

  private onInputChangeValue({ target }: Event) {
    const value = (target as HTMLInputElement).value;
    this.valueChanged.emit(value);
    store.set('answers', { ...store.get('answers'), [this.elementid]: { id: this.elementid, value } });
  }

  render() {
    return (
      <apply-label elementId={this.elementid} storeType={this.storeType}>
        {this.question}
        <required-icon required={this.required}></required-icon>
        <input
          class="form-control"
          id={this.elementid}
          maxLength={this.limit}
          onInput={e => this.onInputChangeValue(e)}
          required={this.required}
          type="text"
          value={store.get('answers')[this.elementid]?.value}
        />
      </apply-label>
    );
  }
}
