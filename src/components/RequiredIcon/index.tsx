import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'required-icon',
  styleUrl: 'requiredIcon.scss',
  shadow: false,
})
export class Button {
  @Prop() required: boolean;

  render() {
    if (this.required) return <i class="fa-solid fa-asterisk required"></i>;
  }
}
