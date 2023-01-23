import Accordion from 'react-bootstrap/Accordion';

function Assignment(props) {
  return (
    <Accordion className='Acc'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.value[0].name}</Accordion.Header>
        <Accordion.Body>
              <img src={props.value[0].pic} alt="Lady image" srcset="" width={"200px"}/> 
              <h5>
                {`Address: ${props.value[0].address}`}
                </h5>     
                <h5>
                {`Email Id: ${props.value[0].emailId}`}
                </h5>
                <h5>
                {`Contact No: ${props.value[0].contactno}`}
                </h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{props.value[1].name}</Accordion.Header>
        <Accordion.Body>
              <img src={props.value[1].pic} alt="Lady image" srcset="" width={"200px"}/> 
              <h5>
                {`Address: ${props.value[1].address}`}
                </h5>     
                <h5>
                {`Email Id: ${props.value[1].emailId}`}
                </h5>
                <h5>
                {`Contact No: ${props.value[1].contactno}`}
                </h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>{props.value[2].name}</Accordion.Header>
        <Accordion.Body>
              <img src={props.value[2].pic} alt="Male image" srcset="" width={"200px"}/> 
              <h5>
                {`Address: ${props.value[2].address}`}
                </h5>     
                <h5>
                {`Email Id: ${props.value[2].emailId}`}
                </h5>
                <h5>
                {`Contact No: ${props.value[2].contactno}`}
                </h5>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Assignment;