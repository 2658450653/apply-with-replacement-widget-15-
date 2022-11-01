import { Component, FunctionalComponent, h, Method, Prop, State } from '@stencil/core';
import store from '../../store';
import { buildParsleyAttributes, buildQuestionArray } from './util';
import { IQuestionMeta, ISubmitData, IAnswersMeta } from '../../api/types';
import { submitFormInfo } from '../../api';
import { firstPageData } from '../../api/data';
import dayjs from 'dayjs';
import parsleyjs from 'parsleyjs';
import $ from 'jquery';
// import { resolveConfig } from 'prettier';

window.jQuery = $;
window.$ = $;
window.parsley = parsleyjs;

@Component({
  tag: 'apply-formbuilder',
  shadow: false,
})
export class FormBuilder {
  @Prop() questions: IQuestionMeta[];
  @Prop({ reflect: true, mutable: true }) computedQuestions: IQuestionMeta[][];
  @Prop() jobId: number;
  @Prop() mediaId: number;

  @State() currentPage: number = 0;
  @State() totalPages: number;
  @State() applyTitle: string = 'Apply Now';
  @State() submitSuccess: boolean = false;

  firstPageQuestions: IQuestionMeta[] = firstPageData;
  submitData: ISubmitData;
  parsley: any;

  $elForm: HTMLElement;

  async getThisRowValue(row, data): Promise<IAnswersMeta> {
    let ret: IAnswersMeta;
    if (!data[row.id]) {
      return null;
    }
    ret = { id: row.id, value: data[row.id].value };
    if (data[row.id].format) {
      // format date
      ret.value = dayjs(data[row.id].value).format(data[row.id].format.toUpperCase());
    }
    return ret;
  }

  @Method()
  async handleSubmit(e: Event) {
    e.preventDefault();
    // TODO: post this to an api
    let data = store.get('answers');
    let applicant = {};
    let filterList = [];
    for (let row of firstPageData) {
      let kv = await this.getThisRowValue(row, data);
      if (kv) applicant[row.id] = kv.value;
      filterList.push(row.id);
    }
    let answers = [];
    for (let row of this.questions) {
      if (!filterList.includes(row.id)) {
        let kv = await this.getThisRowValue(row, data);
        if (kv) answers.push(kv);
      }
    }
    this.submitData = {
      job: {
        jobId: this.jobId,
        mediaId: this.mediaId,
      },
      applicant: applicant,
      questions: {
        answers: answers,
        questions: this.questions,
      },
      analytics: {
        ip: '10.20.103.404',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0',
      },
      locale: '',
    };
    console.log(this.submitData, 'this.submitData');
    const { message, error } = await submitFormInfo(this.submitData);
    this.submitSuccess = true; // todo response status
    console.log(message, error);
  }

  @Method()
  async canMove(num: number) {
    if (num < 0) {
      this.currentPage += num;
      return;
    }
    this.parsley.validate();
    if (this.parsley.isValid()) {
      if (this.currentPage + num >= 0 && this.currentPage + num <= this.totalPages) {
        this.currentPage += num;
      }
      this.applyTitle = this.currentPage === 0 ? 'Apply Now' : 'Additional Questions';
    }
  }

  @Method()
  async getButtonType() {
    if (this.currentPage === this.totalPages) return 'submit';
    return 'text';
  }

  async componentWillRender() {
    let fullQuestions = this.firstPageQuestions.concat(this.questions);
    this.computedQuestions = buildQuestionArray(fullQuestions);
    this.totalPages = this.computedQuestions.length - 1;
  }

  componentDidRender() {
    this.parsley = $(this.$elForm).parsley();
    setTimeout(() => {
      $(this.$elForm)?.parsley()?.refresh();
    }, 80);
  }

  // eslint-disable-next-line @stencil/own-props-must-be-private
  FormButton: FunctionalComponent<{ increment: number; text: string; buttonType: string; buttonClass?: string }> = ({
    increment,
    text,
    buttonType,
    buttonClass,
  }) => (
    <apply-button
      buttonClass={buttonClass}
      onClick={e => {
        let { target }: Event = e;
        const { type } = target as HTMLButtonElement;
        if (this.currentPage == this.totalPages && type == 'submit') {
          this.parsley.validate();
          if (this.parsley.isValid()) {
            this.handleSubmit(e);
          }
        } else {
          e.stopPropagation();
          this.canMove(increment);
        }
      }}
      buttonType={buttonType}
    >
      {text}
    </apply-button>
  );

  render() {
    if (this.computedQuestions.length === 0) return null;
    let buttonText = 'submit application',
      buttonType = 'button',
      buttonClass = 'button button-3d button-large ';
    if (this.questions.length > 0) {
      if (this.currentPage === 0 && this.currentPage !== this.totalPages) {
        buttonText = 'submit & continue';
        buttonClass += 'full-width';
      } else if (this.currentPage === this.totalPages) {
        buttonType = 'submit';
      } else if (this.currentPage !== this.totalPages) {
        buttonText = 'next';
      }
    } else {
      buttonClass += 'btn-block';
      buttonType = 'submit';
    }

    return (
      <div class="widget clearfix apply-with-replacement">
        {this.submitSuccess ? (
          <h4 class="success-info">application complete</h4>
        ) : (
          <form
            ref={el => {
              this.$elForm = el as HTMLElement;
            }}
            data-parsley-validate
            novalidate
            onSubmit={e => this.handleSubmit(e)}
          >
            <div class="title-row">
              <h4>{this.applyTitle}</h4>
            </div>
            {this.computedQuestions[this.currentPage].map(({ id, type, ...rest }) => {
              if (type === 'multiselect') {
                type = 'checkbox';
              }

              const Tag = `apply-${type}`;
              const attrs = buildParsleyAttributes(rest);
              return <Tag elementid={id} {...{ type, ...rest, ...attrs }} />;
            })}
            <div class={this.currentPage === 0 ? 'button-box full-width' : 'button-box'}>
              {this.currentPage !== 0 && (
                <this.FormButton
                  increment={-1}
                  text="BACK"
                  buttonClass="btn btn-link apply-text-button"
                  buttonType="button"
                />
              )}
              {<this.FormButton increment={1} text={buttonText} buttonClass={buttonClass} buttonType={buttonType} />}
            </div>
          </form>
        )}
      </div>
    );
  }
}
