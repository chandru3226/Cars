import React from "react";
import Card from "../../Components/Card";
import FormDetails from "../../Components/FormDetails";
import data from "./../../data.json";
import { useSelector } from "react-redux";

const Home = () => {
    const cars = useSelector((state) => state.cars);
    console.log("data ::: ", cars, Object.keys(cars?.currentItem).length === 0  );

    return (
        <div >
            <div className="d-grid justify-content-center">
            <div className="d-flex m-5">
                { data?.modelDetails?.map((item, idx) => {
                    return (
                        <Card details = {item} key = {idx} />
                    )
                }) }
            </div>
            </div>
            <div>
                {Object.keys(cars?.currentItem).length !== 0 && 
                    <FormDetails />
                }
            </div>
            {!!cars?.stringData && 
                <p style={{margin : "20px"}}>{cars?.stringData}</p> 
            }
        </div>
    )
}

export default Home;
