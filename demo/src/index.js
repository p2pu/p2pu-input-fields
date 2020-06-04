import React, { useState } from 'react';
import { render } from 'react-dom';

import CitySelect from "../../src/CitySelect";
import PlaceSelect from "../../src/PlaceSelect";
import TimeZoneSelect from "../../src/TimeZoneSelect";
import LanguageSelect from "../../src/LanguageSelect";
import SelectWithLabel from "../../src/SelectWithLabel";

import CheckboxWithLabel from "../../src/CheckboxWithLabel"
import DatePickerWithLabel from "../../src/DatePickerWithLabel"
import ImageUploader from "../../src/ImageUploader"
import InputWithLabel from "../../src/InputWithLabel"
import RangeSliderWithLabel from "../../src/RangeSliderWithLabel"
import SwitchWithLabels from "../../src/SwitchWithLabels"
import TextareaWithLabel from "../../src/TextareaWithLabel"
import TimePickerWithLabel from "../../src/TimePickerWithLabel"

const App = () => {
  const [content, setContent] = useState({});
  const handleChange = (newContent) => {
    setContent({
      ...content,
      ...newContent
    })
  }

  console.log('content', content)

  return(
    <div style={{ padding: "20px"}}>
      <CitySelect
        label={'Select a city'}
        classes="form-group"
        name='city-demo'
        value={content['city-demo']}
        handleChange={handleChange}
      />
      <PlaceSelect
        label={'Select a place'}
        classes="form-group"
        name={'place-demo'}
        value={content['place-demo']}
        handleChange={handleChange}
      />
      <TimeZoneSelect
        label={'Select a time zone'}
        name='timezone-demo'
        value={content['timezone-demo']}
        handleChange={handleChange}
      />
      <LanguageSelect
        name='language-demo'
        value={content['language-demo']}
        handleChange={handleChange}
        helpText={'Choose as many languages as you want.'}
        errorMessage={'uh oh you messed up'}
      />
      <SelectWithLabel
        options={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]}
        name='select-demo'
        value={content['select-demo']}
        handleChange={handleChange}
      />
      <CheckboxWithLabel
        name="checkbox-demo"
        label="Checkbox"
        value={content['checkbox-demo']}
        handleChange={handleChange}
        helpText={'help meee'}
        errorMessage={'booohooo'}
      />
      <DatePickerWithLabel
        name="datepicker-demo"
        label="Date picker"
        value={content['datepicker-demo']}
        handleChange={handleChange}
      />
      <TimePickerWithLabel
        name="timepicker-demo"
        label="Time picker"
        value={content['timepicker-demo']}
        handleChange={handleChange}
      />
      <ImageUploader
        name="image-demo"
        label="Image uploader"
        value={content['image-demo']}
        handleChange={handleChange}
      />
      <InputWithLabel
        name="input-demo"
        label="Text input"
        value={content['input-demo']}
        handleChange={handleChange}
      />
      <RangeSliderWithLabel
        name="range-demo"
        label="Range slider"
        value={content['range-demo']}
        handleChange={handleChange}
      />
      <SwitchWithLabels
        name="switch-demo"
        label="Switch input"
        value={content['switch-demo']}
        handleChange={handleChange}
      />
      <TextareaWithLabel
        name="textarea-demo"
        label="Text area"
        value={content['textarea-demo']}
        handleChange={handleChange}
      />
    </div>
  );
}

render(<App />, document.getElementById("root"));
