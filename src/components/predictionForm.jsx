import React, { useState } from "react";
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
const PredictionForm = () => {

    const [cid, setcid] = useState("")
    const [locCode, setlocCode] = useState("")
    const [accLength, setaccLength] = useState("")
    const [intertiolPlan, setintertiolPlan] = useState("")
    const [vmPlan, setvmPlan] = useState("")
    const [numVMMsg, setnumVMMsg] = useState("")
    const [totalDayMin, settotalDayMin] = useState("")
    const [totalDayCalls, settotalDayCalls] = useState("")
    const [totalDayCharge, settotalDayCharge] = useState("")
    const [totalEvngMin, settotalEvngMin] = useState("")
    const [totalEvngCalls, settotalEvngCalls] = useState("")
    const [totalEvngCharge, settotalEvngCharge] = useState("")
    const [totalNytMin, settotalNytMin] = useState("")
    const [totalNytCalls, settotalNytCalls] = useState("")
    const [totalNytCharge, settotalNytCharge] = useState("")
    const [totalIntlMin, settotalIntlMin] = useState("")
    const [totalIntlCalls, settotalIntlCalls] = useState("")
    const [totalIntlCharge, settotalIntlCharge] = useState("")
    const [CustomerServiceCalls, setCustomerServiceCalls] = useState("")

    const [isChurn, setisChurn] = useState("");
    const [output, setoutput] = useState("")

    const handleSubmit = (e) => {
        console.log("predict button clicked..");
        e.preventDefault();
        const data = {
            //CustomerServiceCalls: "4",
            // accLength: "4",
            // cid: "70",
            // intertiolPlan: "1",
            // locCode: "452",
            // numVMMsg: "56",
            // totalDayCalls: "686",
            // totalDayCharge: "45",
            // totalDayMin: "44",
            // totalEvngCalls: "45",
            // totalEvngCharge: "45",
            // totalEvngMin: "4",
            // totalIntlCalls: "75",
            // totalIntlCharge: "45",
            // totalIntlMin: "75",
            // totalNytCalls: "57",
            // totalNytCharge: "75",
            // totalNytMin: "54",
            // vmPlan: "1"

            cid: cid,
            accLength: accLength,
            locCode: locCode,
            accLength: accLength,
            intertiolPlan: intertiolPlan,
            vmPlan: vmPlan,
            numVMMsg: numVMMsg,
            totalDayMin: totalDayMin,
            totalDayCalls: totalDayCalls,
            totalDayCharge: totalDayCharge,
            totalEvngMin: totalEvngMin,
            totalEvngCalls: totalEvngCalls,
            totalEvngCharge: totalEvngCharge,
            totalNytMin: totalNytMin,
            totalNytCalls: totalNytCalls,
            totalNytCharge: totalNytCharge,
            totalIntlMin: totalIntlMin,
            totalIntlCalls: totalIntlCalls,
            totalIntlCharge: totalIntlCharge,
            CustomerServiceCalls: CustomerServiceCalls

        }
        console.log(data);

        axios.post(`http://localhost:5000/predict`, data)
            .then(res => {
                console.log("form data send to backend..");
                console.log(res.data);
                console.log(res.data['result']);
                if ((res.data['result']) == 'Yes') {
                    setisChurn(true);
                    setoutput("Customer will churn");
                } else if ((res.data['result']) == 'No') {
                    setisChurn(true);
                    setoutput("Customer will not churn")
                } else {
                    setisChurn(null);
                }
            })
            .catch((err) => console.log(err));
    }


    return (
        <React.Fragment>


            {isChurn ? (<Alert variant="primary"> {output}</Alert>) : ("")}

            <div className="border border-secondary border-5 p-5 text-end shadow-lg p-3 mb-5 bg-body rounded">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Customer ID</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => setcid(e.target.value)} /></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Account Length</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => setaccLength(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Location Code</Form.Label></Col>
                                <Col><Form.Group className="mb-3">
                                    <Form.Select onChange={(e) => setlocCode(e.target.value)}>
                                        <option value="0">Select Location Code</option>
                                        <option value="445">445</option>
                                        <option value="452">452</option>
                                        <option value="547">547</option>
                                    </Form.Select>
                                </Form.Group></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Intertiol Plan </Form.Label></Col>
                                <Col><Form.Group className="mb-3">
                                    <Form.Select onChange={(e) => setintertiolPlan(e.target.value)}>
                                        <option value="0">Select Intertiol Plan</option>
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </Form.Select>
                                </Form.Group></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Voice mail plan</Form.Label></Col>
                                <Col><Form.Group className="mb-3">
                                    <Form.Select onChange={(e) => setvmPlan(e.target.value)}>
                                        <option value="0">Select Voicemail Plan</option>
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </Form.Select>
                                </Form.Group></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Number of voicemail messages</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => setnumVMMsg(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>


                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Total day minutes</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalDayMin(e.target.value)} /></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Total day calls</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalDayCalls(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Total day charge</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalDayCharge(e.target.value)} /></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Total evening minutes</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalEvngMin(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Total evening calls</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalEvngCalls(e.target.value)} /></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Total evening charge</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalEvngCharge(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Total night minutes</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalNytMin(e.target.value)} /></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Total night calls</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalNytCalls(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Total night charge</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalNytCharge(e.target.value)} /></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Total international minutes</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalIntlMin(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Total international calls</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalIntlCalls(e.target.value)} /></Col>
                            </Row></Col>
                            <Col><Row>
                                <Col><Form.Label>Total international charge</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => settotalIntlCharge(e.target.value)} /></Col>
                            </Row></Col>
                        </Row>

                        <Row className="my-3">
                            <Col><Row>
                                <Col><Form.Label>Customer service calls</Form.Label></Col>
                                <Col><Form.Control type="number" onChange={(e) => setCustomerServiceCalls(e.target.value)} /></Col>
                            </Row></Col>
                            <Col></Col>
                        </Row>
                    </Form.Group>

                    <div className=""><Button variant="primary" size="lg" className="btn-secondary  " onClick={handleSubmit}>
                        Predict
                    </Button></div>


                </Form>
            </div>


        </React.Fragment>
    );
}

export default PredictionForm;