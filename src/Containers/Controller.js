import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, Container, FormControl, InputGroup, Jumbotron} from "react-bootstrap";
import * as actionTypes from '../store/actionTypes'

class Controller extends Component {

    onCalculateBMIHandler(height, weight) {
        const bmi = height/(weight**2)
        this.props.setBMI(bmi)
    }

    render() {
        let bmiDisplay = null
        if (this.props.bmi) {
            bmiDisplay = <Card>
                <Card.Body>
                    <Card.Title>
                        Your BMI Is...
                    </Card.Title>
                    <Card.Text>
                        {Math.round((this.props.bmi + Number.EPSILON) * 100) / 100}
                    </Card.Text>
                </Card.Body>
            </Card>
        }

        return (
            <Container className="pt-4">
                <Jumbotron>
                    <h1 className="pb-3">BMI Calculator</h1>
                    <InputGroup className="my-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                Weight
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={this.props.weight}
                            onChange={(event) => this.props.setWeight(event.target.value)}
                            placeholder="kg"
                            className="d-block"
                        />
                    </InputGroup>
                    <InputGroup className="my-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                Height
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={this.props.height}
                            onChange={(event) => this.props.setHeight(event.target.value)}
                            placeholder="meters"
                            className="d-block"
                        />
                    </InputGroup>
                    <Button onClick={() => this.onCalculateBMIHandler(this.props.weight, this.props.height)} variant="primary" className="mt-3" >Calculate</Button>
                </Jumbotron>
                {bmiDisplay}
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        height: state.height,
        weight: state.weight,
        bmi: state.bmi
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setHeight: (height) => dispatch({type: actionTypes.SET_HEIGHT, height: height}),
        setWeight: (weight) => dispatch({type: actionTypes.SET_WEIGHT, weight: weight}),
        setBMI:    (bmi)    => dispatch({type: actionTypes.SET_BMI, bmi: bmi})
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Controller);


