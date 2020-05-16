import React from 'react';
import { render } from 'react-dom';

import CitySelect from "../../src/CitySelect";
import PlaceSelect from "../../src/PlaceSelect";
import TimeZoneSelect from "../../src/TimeZoneSelect";
import LanguageSelect from "../../src/LanguageSelect";
import SelectWithLabel from "../../src/SelectWithLabel";

class App extends React.Component {

  render() {
    return(
      <div style={{ padding: "20px"}}>
        <CitySelect label={'Select a city'} classes="form-group" />
        <PlaceSelect label={'Select a place'} classes="form-group" />
        <TimeZoneSelect label={'Select a time zone'} />
        <LanguageSelect />
        <SelectWithLabel options={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
