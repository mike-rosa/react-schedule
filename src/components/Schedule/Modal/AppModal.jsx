import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

class AppModal extends Component {
  constructor() {
    super()
    this.state={
      show:false
    }
    console.log('constructor modal : '+ this.show);

  }

  handleModal(){
    this.setState({show:!this.show})
  }
  render() {
    
    return (
      

      <div>
        {console.log('inside render : '+this.props)}
        <Button onClick={()=>{this.handleModal()}}>close</Button>
        <Modal show={false}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>
            Footer
            <Button onClick={()=>{this.handleModal()}}>close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
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
