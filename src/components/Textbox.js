import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
 
// import { Link } from "gatsby";
import {
  LargeButton,Heading
} from '@hackclub/design-system'
 
 
 class Example extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nextPage: false,
      wrongPassword:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    if(this.state.value == "29080109"){
      // <Link to="/instructions" />
      this.setState({nextPage: true});
      this.setState({wrongPassword:false})
    }else{
      this.setState({wrongPassword:true})
    }
    event.preventDefault();
  } 
   render()
   {
     return(
   <section>
   <div style={{display: 'flex', justifyContent: 'center'}}>
   <Form onSubmit={this.handleSubmit}>
      <FormGroup row>
        <Col >
          <Input type="password" name="password" id="pass" value={this.state.value}  onChange={this.handleChange}  placeholder="Password" />
        </Col>
      </FormGroup>
      <FormGroup style={{display: 'flex', justifyContent: 'center'}}>
        <Button
          type="submit"
          color="primary"
        >
          Submit
        </Button>
      </FormGroup>
    </Form>
   </div>
   {this.state.wrongPassword? (
     <div>
     <div style={{display: 'flex', justifyContent: 'center'}}>
        <Heading.h2 color="white" align="center" f={[3, 4]} mt={3} regular>
          Wrong Password! try again.
          <br/>
          Hint: It is your hotspot password
        </Heading.h2>
     </div>
     </div>
   ):null}
   {this.state.nextPage? (
     <div>
     <div style={{display: 'flex', justifyContent: 'center'}}>
        <Heading.h2 color="white" align="center" f={[3, 4]} mt={3} regular>
          Thank you this is the right password. Please continue by clicking below!
        </Heading.h2>
     </div>
     <div style={{display: 'flex', justifyContent: 'center'}}>
        <LargeButton
          inverted
          href="https://osamaimadi.github.io/birthday/wish"
          mb={4}
        >
          Continue
        </LargeButton>
     </div>
     </div>
   ):null}
 </section>
 );}
}
 export default Example