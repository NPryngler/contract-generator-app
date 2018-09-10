// import React, { Component } from "react";
// import "./style.css";
// import PDF from 'react-pdf-js';

// class FinishedContract extends Component {
//     constructor(props){
//         super(props);
//     this.state = {};
//     }

 
//   onDocumentComplete = (pages) => {
//     this.setState({ page: 1, pages });
//   }
 
//   handlePrevious = () => {
//     this.setState({ page: this.state.page - 1 });
//   }
 
//   handleNext = () => {
//     this.setState({ page: this.state.page + 1 });
//   }
 
//   renderPagination = (page, pages) => {
//     let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
//     if (page === 1) {
//       previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
//     }
//     let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
//     if (page === pages) {
//       nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
//     }
//     return (
//       <nav>
//         <ul className="pager">
//           {previousButton}
//           {nextButton}
//         </ul>
//       </nav>
//       );
//   }
 
//   render() {
    // let pagination = null;
    // if (this.state.pages) {
    //   pagination = this.renderPagination(this.state.page, this.state.pages);
    // }
//     return (
//       <div>
//         <PDF
//           file="test.pdf"
//           onDocumentComplete={this.onDocumentComplete}
//           page={this.state.page}
//         />
//         <div className="contact-form-wrapper">
//             <form>
//                 <label>Your full name: 
//                     <input type="text" placeholder="name"></input>
//                 </label>
//                 <label>E-mail address: 
//                     <input type="e-mail" placeholder="email"></input>
//                 </label>
//                 <button>Submit</button>
//             </form>
//             </div>
//         {/* {pagination} */}
//       </div>
//     )
//   }
// }
 
// export default FinishedContract;

