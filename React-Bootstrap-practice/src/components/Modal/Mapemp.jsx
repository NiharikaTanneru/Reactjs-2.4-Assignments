import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Mapemp({ EmpArr }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  return (
    <>
      <h3>Displaying Employee Details in Modal</h3>
      <hr />
      {EmpArr.map((i) => (
        <Button
          key={i.id}
          className="me-3"
          variant="primary"
          onClick={() => {
            setShow(true);
            setData(i);
          }}
        >
          {i.name}
        </Button>
      ))}
      {console.log(data)}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Info about: {data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={data.pic} alt="Lady image" srcset="" width={"200px"} />
          <h5>{`Address: ${data.address}`}</h5>
          <h5>{`Email Id: ${data.emailId}`}</h5>
          <h5>{`Contact No: ${data.contactno}`}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Mapemp;
