import Form from 'react-bootstrap/Form';

function ColorPickerExample() {
  return (
    <>
      <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        defaultValue="#fff"
        title="Choose your color"
      />
    </>
  );
}

export default ColorPickerExample;