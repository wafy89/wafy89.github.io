import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }
    render() {
        const { status } = this.state;
        return (
            <div className="contactContainer">
                <div className="pageTitle" id="contact">Contact Me</div>
                <form  onSubmit={this.submitForm}
        action="https://formspree.io/mbjzzlwz"
        method="POST" className="formContainer">
                    <div className="nameField contactField ">
                        <label>NAME</label>
                        <input type="text" name="name" placeholder="Type your name"></input>
                    </div>
                    <div className="phoneField contactField ">
                        <label>PHONE</label>
                        <input type="text" name="phone" placeholder="Type your phone number"></input>
                    </div>
                    <div className="emailField contactField ">
                        <label>EMAIL</label>
                        <input type="email" name="email" placeholder="Type your email address"></input>
                    </div>
                    <div className="messageField contactField ">
                        <label>YOUR MESSAGE</label>
                        <textarea name="message" placeholder="Type your message"></textarea>
                    </div>
                    <div className="sendBTNField">
                        <button type="submit" className="sendBTN">SEND</button>
                    </div>
                    {status === "SUCCESS" ? <p>Thanks!</p> : ""}
                    {status === "ERROR" && <p>please fill all the field with valid date.</p>}
                </form>
            </div>
        )
    }
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
}

export default Contact
