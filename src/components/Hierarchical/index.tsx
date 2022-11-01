import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import store from '../../store';
import { IQuestionMeta, IOptions } from '../../api/types';
import { buildParsleyAttributes } from '../FormBuilder/util';

// import { selectFirstOption } from '../../api/data';

@Component({
  tag: 'apply-hierarchical',
  styleUrl: 'hierarchical.scss',
  shadow: false,
})
export class Select {
  @Prop() elementid: IQuestionMeta['id'];
  @Prop() question: IQuestionMeta['question'];
  @Prop() options: IQuestionMeta['options'];
  @Prop() required: IQuestionMeta['required'];
  @Prop() hierarchicalOptions: Array<any>;

  @Event() valueChanged: EventEmitter<string>;

  @State() currentState: IOptions;
  @State() stateValue: string;
  @State() cityValue: string;
  @State() zipValue: string;

  optionsMaps: Object = {};
  allCityMaps: Object = {};
  allZipMaps: Object = {};

  // render data
  stateList: Array<any> = [];
  cityList: Array<any> = [];
  zipList: Array<any> = [];

  firstRender: boolean = true;

  componentWillLoad() {
    this.clearData();
  }

  private findCityByZipOptions(row) {
    this.hierarchicalOptions.forEach(citys => {
      if (citys.id == row.condition.id) {
        citys.options.forEach(city => {
          if (row.condition.value === city.value) {
            this.allZipMaps[`${citys.condition.value}-${city.value}`] = row;
          }
        });
      }
    });
  }

  private clearData() {
    this.hierarchicalOptions.forEach(row => {
      if (row.condition.id === this.elementid) {
        // all city stateValue:citylist
        this.allCityMaps[row.condition.value] = row;
      } else {
        // all zipcodes cityValue:ziplist
        this.findCityByZipOptions(row);
      }
    });
    // this.stateList = JSON.parse(JSON.stringify(selectFirstOption)).concat(this.options);
    // this.cityList = JSON.parse(JSON.stringify(selectFirstOption));
    // this.zipList = JSON.parse(JSON.stringify(selectFirstOption));
    // this.stateValue = '';

    // load data
    const values = store.get('answers')[this.elementid]?.value || {};
    if (values.length) this.stateValue = values[0];
    if (values.length >= 2) this.cityValue = values[1];
    if (values.length == 3) this.zipValue = values[2];

    this.stateList = this.options;
    this.getCityList(this.options[0]);
  }

  private getCityList(stateData) {
    this.stateList.forEach(row => {
      if (stateData.value === row.value) {
        this.currentState = row;
      }
    });
    if (!this.stateValue) this.stateValue = stateData.value;
    if (this.allCityMaps[stateData.value]) {
      this.cityList = this.allCityMaps[stateData.value].options || [];
    } else {
      this.cityList = [];
    }
    // default pick the first city
    if (!this.cityValue) this.cityValue = this.cityList.length > 0 ? this.cityList[0].value : '';
    this.getZipList({ value: this.cityValue });
  }

  private getZipList(cityData) {
    this.cityValue = cityData.value;
    if (this.currentState && this.allZipMaps[`${this.currentState.value}-${cityData.value}`]) {
      this.zipList = this.allZipMaps[`${this.currentState.value}-${cityData.value}`].options;
    } else {
      this.zipList = [];
    }
    // this.zipList = JSON.parse(JSON.stringify(selectFirstOption)).concat(this.zipList);
    // default pick the first zip
    if (!this.zipValue) this.zipValue = this.zipList.length > 0 ? this.zipList[0].value : '';
  }

  private changeData({ value, type, needInitValue = true }) {
    if (type === 'state') {
      this.getCityList({ value });
    } else if (type === 'city') {
      this.getZipList({ value });
    } else if (type === 'zip') {
      this.zipValue = value;
    }
    if (needInitValue) this.getHierarchicalValue();
  }

  private onStateChange({ currentTarget }: Event) {
    const { options, selectedIndex } = currentTarget as HTMLSelectElement;
    const value = options[selectedIndex].value;
    this.stateValue = value;
    this.changeData({ value, type: 'state' });
  }

  private onCityChange({ currentTarget }: Event) {
    const { options, selectedIndex } = currentTarget as HTMLSelectElement;
    const value = options[selectedIndex].value;
    this.cityValue = value;
    this.changeData({ value, type: 'city' });
  }

  private onZipChange({ currentTarget }: Event) {
    const { options, selectedIndex } = currentTarget as HTMLSelectElement;
    const value = options[selectedIndex].value;
    this.zipValue = value;
    this.changeData({ value, type: 'zip' });
  }

  private getHierarchicalValue() {
    let values = [];
    if (this.stateValue) {
      values.push(this.stateValue);
    }
    if (this.cityValue) {
      values.push(this.cityValue);
    }

    if (this.zipValue) {
      values.push(this.zipValue);
    }
    store.set('answers', { ...store.get('answers'), [this.elementid]: { id: this.elementid, value: values } });
  }

  render() {
    /**
     * 1. render state. clear city
     * 2. render city. clear zip
     * 3. render zip
     */
    let divClassName = 'col-6 form-group';
    let currentCity, currentZip;
    let cityContent, zipContent;
    const attrs = buildParsleyAttributes({ required: this.required });
    const stateSelect = (
      <select
        class="form-control"
        id={this.elementid}
        onChange={e => this.onStateChange(e)}
        required={this.required}
        {...attrs}
      >
        {this.stateList.map(({ label, value, disabled }) => (
          <option value={value} disabled={disabled} selected={value === this.stateValue}>
            {label}
          </option>
        ))}
      </select>
    );

    if (this.firstRender) {
      this.changeData({ value: this.stateValue, type: 'state' });
      this.changeData({ value: this.cityValue, type: 'city' });
      this.firstRender = false;
    }

    currentCity = this.allCityMaps[this.stateValue];

    if (currentCity) {
      currentZip = this.allZipMaps[`${this.stateValue}-${this.cityValue}`];
      if (currentZip) {
        divClassName = 'col-4 form-group';
      }
      const citySelect = (
        <select
          class="form-control"
          id={`${this.elementid}-`}
          name={currentCity.id}
          onChange={e => this.onCityChange(e)}
          required={this.required}
          {...attrs}
        >
          {this.cityList.map(({ label, value, disabled }) => (
            <option value={value} disabled={disabled} selected={value === this.cityValue}>
              {label}
            </option>
          ))}
        </select>
      );

      cityContent = (
        <div class={divClassName}>
          <label class="form-label" htmlFor={this.elementid}>
            {currentCity.id}
            <required-icon required={this.required}></required-icon>
          </label>
          {citySelect}
        </div>
      );
    } else {
      divClassName = 'col-12 form-group';
    }
    if (currentZip) {
      divClassName = 'col-4 form-group';
      const zipSelect = (
        <select
          class="form-control"
          id={`${this.elementid}-`}
          name={currentZip.id}
          onChange={e => this.onZipChange(e)}
          required={this.required}
          {...attrs}
        >
          {this.zipList.map(({ label, value, disabled }) => (
            <option value={value} disabled={disabled} selected={value === this.zipValue}>
              {label}
            </option>
          ))}
        </select>
      );
      zipContent = (
        <div class={divClassName}>
          <label class="form-label" htmlFor={this.elementid}>
            {currentZip.id}
            <required-icon required={this.required}></required-icon>
          </label>
          {zipSelect}
        </div>
      );
    }

    return (
      <div class="row row-padding-fixed">
        <div class={divClassName}>
          <label class="form-label" htmlFor={this.elementid}>
            {this.question}
            <required-icon required={this.required}></required-icon>
          </label>
          {stateSelect}
        </div>
        {cityContent}
        {zipContent}
      </div>
    );
  }
}
