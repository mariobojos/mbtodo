import React from "react";

// Note: This is using the Functional Programming paradigm
// function ContactCard(props) {
//     console.log(props);
//     return (
//         <div>
//             <img src={props.contact.imgUrl} alt="" style={{ width: "75%" }} />
//             <h3>{props.contact.name}</h3>
//             <p>Phone: {props.contact.phone}</p>
//             <p>Email: {props.contact.email}</p>
//         </div>
//     );
// }


class ContactCard extends React.Component {

  render() {
    return (
        <div>
            <img src={this.props.contact.imgUrl} alt="" style={{ width: "75%" }} />
            <h3>{this.props.contact.name}</h3>
            <p>Phone: {this.props.contact.phone}</p>
            <p>Email: {this.props.contact.email}</p>
        </div>
    );
  }
}


export default ContactCard;