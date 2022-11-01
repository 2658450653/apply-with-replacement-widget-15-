import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import intlTelInput from 'intl-tel-input';
import store from '../../store';
import { IQuestionMeta } from '../../api/types';

@Component({
  tag: 'apply-phone',
  styleUrl: 'phone.scss',
  shadow: false,
})
export class Phone {
  @Prop() format: IQuestionMeta['format'];
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() limit: IQuestionMeta['limit'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() required: IQuestionMeta['required'];

  @Element() inputRef: HTMLApplyPhoneElement;

  @Event() valueChanged: EventEmitter<string>;

  // TODO: handle format
  private onInputChangeValue({ target }: Event) {
    const storeKey = 'answers';
    const value = (target as HTMLInputElement).value;
    this.valueChanged.emit(value);
    store.set(storeKey, { ...store.get(storeKey), [this.elementid]: { id: this.elementid, value } });
  }

  private initTelInput() {
    const phoneRef = this.inputRef.querySelector('.phone-ref');
    const phoneInstance = intlTelInput(phoneRef, {
      preferredCountries: ['us'],
    });

    phoneInstance.telInput.placeholder = `(1) your phone`;
    phoneInstance.telInput.value = store.get('answers')[this.elementid]?.value || '';

    phoneRef.addEventListener('countrychange', () => {
      const info = phoneInstance.getSelectedCountryData();
      phoneInstance.telInput.placeholder = `(${info.dialCode}) your phone`;
    });
  }

  componentDidRender() {
    this.initTelInput();
  }

  render() {
    return (
      <apply-label elementId={this.elementid}>
        {this.question}
        <required-icon required={this.required}></required-icon>
        <input
          class="form-control phone-ref"
          id={this.elementid}
          maxLength={this.limit}
          onInput={e => this.onInputChangeValue(e)}
          required={this.required}
          type="text"
        />
      </apply-label>
    );
  }
}
