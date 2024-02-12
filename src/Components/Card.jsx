import React from "react";
import renault from "./../renault.png"
import honda from "./../honda.png";
import hyundai from "./../hyundai.png"
import mercedesBenz from "./../mercedes-benz.png";
import suzuki from "./../suzuki.png";
import mahindra from "./../mahindra.png";
import tata from "./../tata.png";
import toyota from "./../toyota.png";
import volkswagen from "./../volkswagen.png";
import bmw from "./../bmw.png";
import ford from "./../ford.png";
import { useDispatch } from "react-redux";
import { setCurrentModel } from "../Reducers/reducer";


const Card = ({ details, index}) => {
    const dispatch = useDispatch();
    const imageData = (type) => {
        switch(type) {
            case 'renault' :
                return renault;
            case 'suzuki' :
                return suzuki;
            case 'honda' :
                return honda;
            case 'mercedes-benz' :
                return mercedesBenz;
            case 'tata' :
                return tata;
            case 'toyota' :
                return toyota;
            case 'mahindra' :
                return mahindra;
            case 'hyundai' :
                return hyundai;
            case 'volkswagen' :
                return volkswagen;
            case 'bmw' :
                return bmw;
            case 'ford' :
                return ford;

        }
    }
    const handleLogo = (item) => {
        dispatch(setCurrentModel(item))
    }
    return (
        <div style={{ display : "grid", justifyContent : "center", justifyItems : "center"}} onClick={() => handleLogo(details)}>
            <img src = {imageData(details?.model?.toLowerCase())} alt={`${details?.model}`} height={'auto'} width={'100px'}/>
            {/* <img src = {renault} alt={`${details?.model}`} height={'80px'} width={'100px'}/> */}
            <span>{details?.model}</span>
        </div>
    )
}

export default Card;