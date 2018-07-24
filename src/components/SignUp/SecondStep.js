import React , { Component } from 'react'
import './index.css'
import { Container, Col, Form, FormGroup, Row, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import ContinueButton from '../../assets/images/authcontainer/continue-button.png'
import BackButton from '../../assets/images/authcontainer/back-button.png'

class SecondStep extends Component {
    backSignUpStep = () => {
        const { signUpStep , changeSignUpStep } = this.props
        const step = signUpStep - 1
        changeSignUpStep(step)
    }
    forwardSignUpStep = () => {
        const { signUpStep , changeSignUpStep } = this.props
        const step = signUpStep + 1
        changeSignUpStep(step)
    }
    render () {
        return (
            <Container className="signup-container">
                <Label className="label-top-title">Create an Account</Label>
                <Form>
                    <FormGroup>
                        <Input type="text" name="company" id="company" placeholder="Company" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                    </FormGroup>  
                    <FormGroup>
                        <Input type="text" name="location" id="signupLocation" placeholder="Location" />
                    </FormGroup>          
                    <Container className="stepper-container">
                        <img src={BackButton} alt="Back Button" onClick={this.backSignUpStep}/>
                        <img src={ ContinueButton } alt="Continue Button" onClick={this.forwardSignUpStep}/>
                    </Container>         
                    
                </Form>
            </Container>
        )
    }
}

export default SecondStep;