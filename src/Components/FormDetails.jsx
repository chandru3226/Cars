import React from "react";
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button } from "react-bootstrap"
import { INITIAL_FORM_DATA } from "./constant";
import { addCar, setCurrentModel, setResultString } from "../Reducers/reducer";

const FormDetails = () => {
    const methods = useForm(INITIAL_FORM_DATA)
    const {control, setValue, handleSubmit, register, reset} = methods;
    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log("Submit data :::: ", data);
        dispatch(addCar(data));
        dispatch(setResultString(data));
        dispatch(setCurrentModel(data));
    }

    React.useEffect(() => {
        // setValue('model', cars?.currentItem?.model)
        // reset({
        //     model : cars?.currentItem?.model,
        //     location : '',
        //     color : '',
        //     noOfOwners : '',
        //     yearOfManufacture : '',
        //     transmission : '',
        //     insuranceValidUpto : '',
        //     externalFitments : '',
        //     kms : '',
        //     photo : ''
        //     });
        reset(cars?.currentItem)
    }, [cars?.currentItem?.model])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row style={{margin : "20px"}}>
                    <Col sm={3}>
                        <span>Model</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("model")} />
                    </Col>
                    <Col sm={3}>
                        <span>Location</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("location")} />
                    </Col>
                </Row>
                <Row style={{margin : "20px"}}>
                    <Col sm={3}>
                        <span>Color</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("color")} />
                    </Col>
                    <Col sm={3}>
                        <span>No of Owners</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("noOfOwners")} />
                    </Col>
                </Row>
                <Row style={{margin : "20px"}}>
                    <Col sm={3}>
                        <span>Year of Manufacture</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("yearOfManufacture")} />
                    </Col>
                    <Col sm={3}>
                        <span>Transmission</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("transmission")} />
                    </Col>
                </Row>
                <Row style={{margin : "20px"}}>
                    <Col sm={3}>
                        <span>Insurance valid upto</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("insuranceValidUpto")} />
                    </Col>
                    <Col sm={3}>
                        <span>External fitments</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("externalFitments")} />
                    </Col>
                </Row>
                <Row style={{margin : "20px"}}>
                    <Col sm={3}>
                        <span>Kms</span>
                    </Col>
                    <Col sm={3}>
                        <input {...register("kms")} />
                    </Col>
                    <Col sm={3}>
                        <span>Photo</span>
                    </Col>
                    <Col sm={3}>
                        <Button variant="success">Browse</Button>
                    </Col>
                </Row>
                <Row style={{display : "grid", justifyContent : "center", margin : "50px"}}>
                    <Col sm={1}>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default FormDetails;