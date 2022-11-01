import { Component, h, Prop } from '@stencil/core';
import { IQuestionMeta } from '../../api/types';

// TODO: handle fontsize prop
@Component({
  tag: 'apply-information',
  styleUrl: 'information.scss',
  shadow: false,
})
export class Information {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() fontsize: IQuestionMeta['fontsize'];
  @Prop() text: IQuestionMeta['text'];

  render() {
    return (
      <apply-label>
        <div class="card p-3 bg-light">
          <div class="card-body">
            <strong>
              <p class="mb-0" id={this.elementid}>
                {this.text}
              </p>
            </strong>
          </div>
        </div>
      </apply-label>
    );
  }
}
