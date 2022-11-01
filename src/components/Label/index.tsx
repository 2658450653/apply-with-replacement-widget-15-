import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'apply-label',
  styleUrl: 'label.scss',
  shadow: false,
})
export class Label {
  @Prop() elementId: string;
  @Prop() storeType: string;
  @State() span: string = 'col-12';

  componentWillRender() {
    if (this.storeType === 'applicant' && ['firstName', 'lastName'].includes(this.elementId)) {
      this.span = 'col-lg-6 col-md-6 col-sm-12';
    } else {
      this.span = 'col-12';
    }
  }

  render() {
    return (
      <label class={`${this.span} form-group form-label`} htmlFor={this.elementId}>
        <slot />
      </label>
    );
  }
}
