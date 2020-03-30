import React from "react";

import { Button, Modal,InputGroup,FormControl } from "react-bootstrap";

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
      <InputGroup onChange={props.handleEvent}>
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

        
          <Button onClick={props.handleSubmit}>ADD</Button>
          </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
       
      </Modal.Footer>
    </Modal>
  );
}

const AppModal = ({handleEvent, handleSubmit, modalShow, handleAppModal})=> {
  

  return (
    <>
   

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => handleAppModal(false)}
        handleEvent={handleEvent}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
export default AppModal;
// import React, { useState } from "react";
// import AppModal from "../Modal/AppModal";
// import { Button, Modal } from "react-bootstrap";
// import "./Day.css";

// class Day extends React.Component {
//   constructor(props) {
//     let { days, handleEdit } = props;
//     super(props);
//     this.state = {
//       day: days.day,
//       id: days.id,

//       show: false
//     };
//   }
//   handleModal() {
//     console.log("testetesttetet -----");

//     this.setState({ show: !this.state.show });
//   }
//   //   const { id, day } = days;
//   //   const [display, setDisplay] = useState("display-block");

//   render() {
//     return (
//       <div
//         className="btn-day "
//         onClick={() => {
//           this.handleModal();
//         }}
//       >
//         {/* <div className="modal" onClick={AppModal}>
   
//         </div> */}
//         {/*         
//          {console.log("dayAddEvent - " + addEvent)}
//          {console.log("display - " + display)} */}
//         <div className="day">{this.state.day}</div>

//         {/* modal */}
//         <div>
//           {" "}
//           <Modal
//             show={this.state.show}
//             onHide={() => {
//               this.handleModal();
//             }}
//           >
//             <Modal.Header>Add addEvent</Modal.Header>
//             <Modal.Body>
//             Body
//             </Modal.Body>
//             <Modal.Footer>
//               Footer
//               <Button
//                 onClick={() => {
//                   this.handleModal();
//                 }}
//               >
//                 close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </div>
//     );
//   }
// }

// export default Day;
