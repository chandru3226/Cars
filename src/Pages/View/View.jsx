import React from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../Components/Filters";
import { setFilterData } from "../../Reducers/reducer";



const View = () => {
    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();
    const [resultData, setResultData] = React.useState([]);
    const [options, setOptions] = React.useState({
        location : '',
        brands : [],
        owner : '',
        kms : [],
        transmission : ''
    });
    React.useEffect(() => {
        dispatch(setFilterData(options))
        getResults(options);
    },[options])

    const getResults = (data) => {
        var result = [];
        for(var i=0; i<cars?.totalModels?.length; i++){
            if(data?.location === cars?.totalModels[i]?.data?.location){
                result.push(cars?.totalModels[i]);
            }
            if(data?.kms.length !== 0){
                for(var km=0; km<data?.kms?.length; km++){
                    let lessValue = data?.kms[km]?.includes('<') && data?.kms[km]?.split('<')?.pop();
                    let greatValue = data?.kms[km]?.includes('>') && data?.kms[km]?.split('>')?.pop();
                    let middleValue = data?.kms[km]?.includes('-') && data?.kms[km]?.split('-');
                    if((!!lessValue && cars?.totalModels[i]?.data?.kms < lessValue) || (!!greatValue && cars?.totalModels[i]?.data?.kms > greatValue) || (!!middleValue && cars?.totalModels[i]?.data?.kms < middleValue[0] && cars?.totalModels[i]?.data?.kms > middleValue[1])){
                        result.push(cars?.totalModels[i]);
                    }
                }
            }
            if(data.brands?.includes(cars?.totalModels[i]?.data?.model)){
                result.push(cars?.totalModels[i]);
               
            }
            if(!!data?.transmission){
                if(data?.transmission === cars?.totalModels[i]?.data?.transmission){
                    if(!!data?.owner && data?.owner === cars?.totalModels[i]?.data?.noOfOwners){
                        result.push(cars?.totalModels[i]);
                    }
                        
                    }
                else{
                    if(!!data?.owner && data?.owner === cars?.totalModels[i]?.data?.noOfOwners){
                        result.push(cars?.totalModels[i]);
                    }
                }
            }
        }
        let temp = result.filter((item, idx, self) => self.findIndex(x => x.id === item.id) === idx);
        setResultData(temp);
    }
    return (
        <div>
            <Row>
                <Col sm={6}>
                    <Filters options={options} setOptions={setOptions}/>
                </Col>
                <Col sm={6}>
                   {resultData?.map((item, idx) => {
                    return <span key={idx}>{JSON.stringify(item)}</span>
                   })}
                </Col>
            </Row>
        </div>
    )
}

export default View;
