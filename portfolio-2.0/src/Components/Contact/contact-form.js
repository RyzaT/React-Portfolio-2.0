handleCraftReq = req => {
    this.setState({...this.state, formSubmitted: true, isLoading: true});
    this.handleSubmit(req);
};

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_gc8ybks', 'template_32owuml', form.current, 'H3t30mh9F_M8AnWSl')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

  export default class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state={
            name: " ",
            email: " ",
            multiline: " "
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const req = {
            from_name: this.state.name,
            from_email: this.state.email,
            message: this.state.multiline
        }
    this.props.handleCraftReq(req);
    }

    return () {
    <ContactViewWrap>
        <h2>Want to get in touch?</h2>
        <form className={classes.container} noValidate autoComplete='off' onSubmit={this.handleSubmit}>
            <textField
                id="outlined-name"
                label="What's your name?"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />
            <textField
                id="outlined-email-input"
                label="What's your email address?"
                type="email"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            /> 
            <TextField
                id="outlined-textarea"
                label="Tell me about your project!"
                placeholder="Tell me about your project"
                name="multiline"
                multiline
                value={this.state.multiline}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />
            <ButtonForm type="submit">Send</ButtonForm>           
        </form>
    </ContactViewWrap>

    }
}
   

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );

  

//   render()    {        
//     return(
//     <ContactWrapper>
//         <Nav />
//         <ContactWrap>
//             {this.state.isLoading ?
//                 <CircularProgress className='load' /> :
//                 this.state.formSubmitted ?
//                 <Submitted /> :
//             <   ContactForm handleCraftReq={this.handleCraftReq} />
//             }
//         </ContactWrap>
//     </ContactWrapper>
    // )}