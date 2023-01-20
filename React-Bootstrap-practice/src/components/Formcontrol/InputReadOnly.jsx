import Form from 'react-bootstrap/Form';

function InputReadOnly() {
  return (
    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
  );
}

export default InputReadOnly;