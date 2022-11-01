import {Component, h, State, Prop, Element, Method} from '@stencil/core';
// import { getWidgetInfo } from '../../api';
import {IQuestionMeta, IFormStyle} from '../../api/types';
import {testFullQuestion,} from '../../api/data';
import {Host} from '@stencil/core';
import {createRouter, Route} from 'stencil-router-v2';

const Router = createRouter();

// 将Root标记为apply-with-replacement组件
@Component({
    tag: 'apply-with-replacement',
    styleUrl: 'root.scss',
    assetsDirs: ['assets'],
    shadow: false,
})
export class Root {
    // stores the questions that is returned from the api
    // @Prop() primaryColor: string='#184673';
    @Element() formbuilder: HTMLApplyFormbuilderElement;
    @State() questions: IQuestionMeta[];
    @State() jobId: number;
    @State() mediaId: number;
    @Prop() options: IFormStyle = {
        primaryColor: '#2f86dd', //#2f86dd
        secondaryColor: '#184673', //'#184673',
        primaryFontColor: '#343A40',
        fontFamily: 'Poppins,sans-serif',
        secondaryFontColor: '#FFF',
    };

    @Method()
    changeStyle() {
        let style = document.getElementById('applyFormStyle');
        let hasOld = true;
        if (!style) {
            style = document.createElement('style');
            style.id = 'applyFormStyle';
            hasOld = false;
        }
        style.innerHTML = `
      :root {
        --jobtarget-font-family: ${this.options.fontFamily}!important;
        --jobtarget-primary-color: ${this.options.primaryColor}!important;
        --jobtarget-secondary-color: ${this.options.secondaryColor}!important;
        --jobtarget-primary-fontcolor: ${this.options.primaryFontColor}!important;
        --jobtarget-secondary-fontcolor: ${this.options.secondaryFontColor}!important;
      }
    `;
        if (!hasOld) document.head.appendChild(style);
        return Promise.resolve();
    }

    connectedCallback() {
        this.changeStyle();
    }


    async componentWillLoad() {
        // the jobId can either be passed in as a prop or we can set it up
        // to read from a URL param. Hardcoding this for now to make it simple
        // 27951336 - multi-page
        // 27763760 - single-page
        // const { questions } = await getWidgetInfo('27951336');
        // this.options.primaryColor = this.primaryColor
        this.questions = testFullQuestion;
        this.jobId = 12314;
        this.mediaId = 234234;
    }

    render() {
        return (
            <Host>
                <Router.Switch>
                    <Route path="/">
                        <div class="col-12">
                            <apply-formbuilder
                                mediaId={this.mediaId}
                                jobId={this.jobId}
                                questions={this.questions || []}
                            />
                        </div>
                    </Route>
                    <Route
                        path={(url) => {
                            if (url.includes('health')) {

                                return {
                                    status: "UP"
                                }
                            }
                            return undefined;
                        }}
                        render={({status}) => (
                            <h3>{status}</h3>
                        )}
                    />
                </Router.Switch>
            </Host>

        );
    }
}
