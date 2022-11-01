import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'apply-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class Button {
  @Prop() buttonType: string;
  @Prop() buttonClass: string="button button-3d button-large btn-block button-jt";

  render() {
    return (
      <button class={`${this.buttonClass}`} type={this.buttonType}>
        <slot />
      </button>
    );
  }
}
