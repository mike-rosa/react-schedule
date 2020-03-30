import React, { useState } from "react";
// import AppModal from '../Modal/AppModal'
import {
  Button,
  Modal,
  DropdownButton,
  InputGroup,
  FormControl,
  Dropdown
} from "react-bootstrap";
import "./Day.css";



const Day = ({ days, handleEdit, handleEvent, event }) => {
  const { id, day } = days;
  const [modalShow, setModalShow] = useState(false);
  const [nEvent, setnEvent] = useState([]);
  const [qtd, setQtd] = useState(0);
  

  const myChangeHandler = e => {
    let id = +1;
    let evt = e.target.value;

    const singleEvent = { id, evt };
    setnEvent([...nEvent, singleEvent]);
  
    setQtd(qtd + 1);
    handleEvent(nEvent);
    setModalShow(false);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup onBlur={myChangeHandler}>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        <Modal.Footer>
          {/* <Button onClick={props.handleEvent}>ADD</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="btn-day " onClick={() => handleEdit(id)}>
        <div className="btn-modal " onClick={() => setModalShow(true)}>
          <div className="events">
            <div className="day">{day}</div>
            <div className="event">
              {nEvent.length > 0 &&
                nEvent.map(evt => {
                  return <div>{evt.evt} </div>;
                })}
            </div>
            {qtd > 0 && <div className="qtd">{qtd}</div>}

            {/* {console.log('nEventer --- '+ qtd)} */}
            {/* <button onClick={handleEvent}>{nEvent}</button> */}
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          event={event}
          handleEvent={handleEvent}
        />
      </div>
    </>
  );
};

export default Day;
