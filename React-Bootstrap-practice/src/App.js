import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BasicProgressbar from './components/Forms/BasicProgressBar';
import FormDisabled from './components/Forms/FormDisabled';
import FormDisabledInput from './components/Forms/FormDisabledInput';
import LoginForm from './components/Forms/LoginForm';

 import TextControlsExample from './components/Formcontrol/TextControlsExample';
 import InputSizesExample from './components/Formcontrol/InputSizesExample';
 import FormControlDisabled from './components/Formcontrol/FormControlDisabled';
import InputReadOnly from './components/Formcontrol/InputReadOnly';
import PlainTextExample from './components/Formcontrol/PlainTextExample';
   import FormFileExample from './components/Formcontrol/FormFileExample';
  import ColorPickerExample from './components/Formcontrol/ColorPickerExample';
  
 import FormTextExample from './components/FormText/FormTextExample';

import SelectBasicExample from './components/Select/SelectBasicExample';
import SelectSizesExample from './components/Select/SelectSizesExample';

import CheckExample from './components/Checks Radios/CheckExample';
import SwitchExample from './components/Checks Radios/SwitchExample';
import CheckInlineExample from './components/Checks Radios/CheckInlineExample';
import NoLabelExample from './components/Checks Radios/NolabelExample';
import CheckApiExample from './components/Checks Radios/CheckApiExample';

import RangeExample from './components/Range/RangeExample';

import BasicExample from './components/InputGroup/BasicExample';
import CheckboxesExample from './components/InputGroup/CheckBoxesExample';
import FormDisabledExample from './components/Forms/FormDisabled';

import AlwaysOpenExample from './components/Accordion/AlwaysOpenExample';

import KitchenSinkExample from './components/Cards/KitchenSinkExample';

import Tooltip from 'react-bootstrap/esm/Tooltip';

import AutoLayoutExample from './components/Grid/AutoLayoutExample';
function App() {
  return (
    <div className="App">

      {/* forms */}
    <BasicProgressbar/>
     <LoginForm />
     <FormDisabledInput />
     <FormDisabled />
     <FormDisabledExample />

           {/* Formcontrol  */}
       <TextControlsExample /> 
       <InputSizesExample /> 
       <FormControlDisabled /> 
      <InputReadOnly /> 
       <PlainTextExample /> 
       <FormFileExample /> 
        <ColorPickerExample />

          {/* FormText */}
           <FormTextExample/>

               {/* Select */}
          <SelectBasicExample />
          <SelectSizesExample />
            
            {/* Check Radios */}
             <CheckExample />
             <SwitchExample />
             <CheckInlineExample /> 
             <NoLabelExample />
             <CheckApiExample />

             {/* Range Examples */}
             <RangeExample />
                
                  {/* InputGroup */}
                <BasicExample/>
                  <CheckboxesExample />
               
               {/* Accordion */}
               <AlwaysOpenExample/>
               
               {/* Card */}
               <KitchenSinkExample />

               {/* Tooltip */}
               <Tooltip />
                  {/* Grid */}
<AutoLayoutExample/>

    </div>
  );
}

export default App;
