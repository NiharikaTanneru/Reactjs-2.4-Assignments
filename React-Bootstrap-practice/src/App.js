import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import BasicProgressbar from './components/Forms/BasicProgressBar';
// import FormDisabled from './components/Forms/FormDisabled';
// import FormDisabledInput from './components/Forms/FormDisabledInput';
// import LoginForm from './components/Forms/LoginForm';

//  import TextControlsExample from './components/Formcontrol/TextControlsExample';
//  import InputSizesExample from './components/Formcontrol/InputSizesExample';
//  import FormControlDisabled from './components/Formcontrol/FormControlDisabled';
// import InputReadOnly from './components/Formcontrol/InputReadOnly';
// import PlainTextExample from './components/Formcontrol/PlainTextExample';
//    import FormFileExample from './components/Formcontrol/FormFileExample';
//   import ColorPickerExample from './components/Formcontrol/ColorPickerExample';
  
//  import FormTextExample from './components/FormText/FormTextExample';

// import SelectBasicExample from './components/Select/SelectBasicExample';
// import SelectSizesExample from './components/Select/SelectSizesExample';

// import CheckExample from './components/Checks Radios/CheckExample';
// import SwitchExample from './components/Checks Radios/SwitchExample';
// import CheckInlineExample from './components/Checks Radios/CheckInlineExample';
// import NoLabelExample from './components/Checks Radios/NolabelExample';
// import CheckApiExample from './components/Checks Radios/CheckApiExample';

// import RangeExample from './components/Range/RangeExample';

// import BasicExample from './components/InputGroup/BasicExample';
// import CheckboxesExample from './components/InputGroup/CheckBoxesExample';
// import FormDisabledExample from './components/Forms/FormDisabled';

// import AlwaysOpenExample from './components/Accordion/AlwaysOpenExample';
// import Assignment from './components/Accordion/Assignment';

// import KitchenSinkExample from './components/Cards/KitchenSinkExample';

// import Tooltip from 'react-bootstrap/esm/Tooltip';

// import AutoLayoutExample from './components/Grid/AutoLayoutExample';

import Mapemp from './components/Modal/Mapemp';
function App() {
  let Employee=
  [{name:"niharika",address:"Hyderabad",emailId:"niha@gmail.com",contactno:"9845825555",pic:"https://thumbs.dreamstime.com/b/beautiful-smiling-businesswoman-arms-folded-standing-black-suit-brown-jacket-isolated-white-background-also-105189427.jpg"},
  {name:"Vasudhara",address:"Chennai",emailId:"vasu@gmail.com",contactno:"9845825896",pic:"https://thumbs.dreamstime.com/b/beautiful-smiling-businesswoman-arms-folded-standing-black-suit-brown-jacket-isolated-white-background-also-105189427.jpg"},
  {name:"Sanjay",address:"Delhi",emailId:"Sanjay.335@gmail.com",contactno:"9845858896",pic:"https://w7.pngwing.com/pngs/315/234/png-transparent-graphy-young-blond-man-men-s-health-male-man-thumbnail.png"},
  {name:"Ravi",address:"Kerala",emailId:"Ravi.225@gmail.com",contactno:"9845889896",pic:"https://w7.pngwing.com/pngs/315/234/png-transparent-graphy-young-blond-man-men-s-health-male-man-thumbnail.png"}]
  return (
    <div className="App">

      {/* forms */}
    {/* <BasicProgressbar/>
     <LoginForm />
     <FormDisabledInput />
     <FormDisabled />
     <FormDisabledExample /> */}

           {/* Formcontrol  */}
       {/* <TextControlsExample /> 
       <InputSizesExample /> 
       <FormControlDisabled /> 
      <InputReadOnly /> 
       <PlainTextExample /> 
       <FormFileExample /> 
        <ColorPickerExample /> */}

          {/* FormText */}
           {/* <FormTextExample/> */}

               {/* Select */}
          {/* <SelectBasicExample />
          <SelectSizesExample /> */}
            
            {/* Check Radios */}
             {/* <CheckExample />
             <SwitchExample />
             <CheckInlineExample /> 
             <NoLabelExample />
             <CheckApiExample /> */}

             {/* Range Examples */}
             {/* <RangeExample /> */}
                
                  {/* InputGroup */}
                {/* <BasicExample/>
                  <CheckboxesExample />
                */}
               {/* Accordion */}
               {/* <AlwaysOpenExample/> */}
                {/* <Assignment value={Employee} /> */}
               {/* Card */}
               {/* <KitchenSinkExample /> */}

               {/* Tooltip */}
               {/* <Tooltip /> */}
                  {/* Grid */}
{/* <AutoLayoutExample/> */}
               
               {/* Modal */}
               <Mapemp  EmpArr={Employee}/>
    </div>
  );
}

export default App;
