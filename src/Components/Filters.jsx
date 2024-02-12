import React from "react";
import { Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "../Reducers/reducer";


const Filters = ({options, setOptions}) => {
    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();
    const [filters, setFilters] = React.useState({
        locations : [],
        brands : [],
        owners : [],
        kms : [],
        transmission : [],
    });
    // const [options, setOptions] = React.useState({
    //     location : '',
    //     brands : [],
    //     owner : '',
    //     kms : [],
    //     transmission : ''
    // });
    React.useEffect(() => {
        getLocations();
    },[])
    // React.useEffect(() => {
    //     dispatch(setFilterData(options))
    // },[options])
    const getLocations = () => {
        let locations = [];
        let brands = [];
        let owners = [];
        let kms = [];
        let transmission = [];
        for(var i=0; i<cars?.totalModels?.length; i++){
            locations?.push(cars?.totalModels[i]?.data?.location);
            brands.push(cars?.totalModels[i]?.data?.model);
            owners.push(cars?.totalModels[i]?.data?.noOfOwners);
            kms.push(cars?.totalModels[i]?.data?.kms);
            transmission.push(cars?.totalModels[i]?.data?.transmission)
        }
        setFilters((prev) => ({
            ...prev,
            locations : locations?.filter((item,idx,self) => self.indexOf(item) === idx),
            brands : brands,
            owners : owners?.filter((item,idx,self) => self.indexOf(item) === idx),
            kms : kms?.sort()?.filter((item, idx, self) => self?.indexOf(item) === idx ),
            transmission : transmission?.filter((item, idx, self) => self.indexOf(item) === idx),
        }))
    }
    return(
        <div>
            <p>Location:</p>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {!!options?.location ? options?.location : filters?.locations?.[0]}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {filters?.locations?.map((loc,idx) => {
                        return <Dropdown.Item key={idx} onClick={(e) => {
                            setOptions((prev) => ({
                                ...prev,
                                location : loc
                            }))
                        }}>{loc}</Dropdown.Item>
                    })}
                    
                </Dropdown.Menu>
            </Dropdown>
            <p>Brand:</p>
            {filters?.brands?.map((brand, idx) => {
                return (
                    <div>
                        <input type={'checkbox'} onChange={(e) => {
                            if(e?.target?.checked){
                                setOptions((prev) => ({
                                    ...prev,
                                    brands : [...prev.brands, brand]
                                }));
                            }
                            else {
                                setOptions((prev) => ({
                                    ...prev,
                                    brands : prev?.brands?.splice(idx, 1)
                                }));
                            }
                        }} />
                        <span>{brand}</span>
                    </div>
                )
            })}
            <p>Owners:</p>
            {filters?.owners?.map((item, idx) => {
                return (
                    <div key={idx}>
                        <input type={'radio'} name={'owner'} onChange={(e) => {
                            if(e?.target?.checked){
                                setOptions((prev) => ({
                                    ...prev,
                                    owner : item
                                }));
                            }
                        }} />
                        <span>{item} owner</span>
                    </div>
                )
            })}
            <p>Kilometers:</p>
            <div>
                <Button variant="outline-secondary" onClick={() => {
                    setOptions((prev) => ({
                        ...prev,
                        kms : [...prev.kms, '<' + filters?.kms?.[0]]
                    }))
                }}>{'<' + filters?.kms?.[0]}</Button>
                <Button variant="outline-secondary" onClick={() => {
                    setOptions((prev) => ({
                        ...prev,
                        kms : [...prev.kms, filters?.kms?.[0] + ' - ' + filters?.kms?.[filters?.kms?.length - 1]]
                    }))
                }}>{filters?.kms?.[0] + ' - ' + filters?.kms?.[filters?.kms?.length - 1]}</Button>
                <Button variant="outline-secondary" onClick={() => {
                    setOptions((prev) => ({
                        ...prev,
                        kms : [...prev.kms, '>' +filters?.kms?.[filters?.kms?.length - 1]]
                    }))
                }}>{'>' + filters?.kms?.[filters?.kms?.length -1]}</Button>
            </div>
            <p>Transmission</p>
            {filters?.transmission?.map((item, idx) => {
                return (
                    <div key ={idx}>
                        <input type={'radio'} name={'transmission'} onChange={(e) => {
                            if(e?.target?.checked){
                                setOptions((prev) => ({
                                    ...prev,
                                    transmission : item
                                }));
                            }
                        }} />
                        <span>{item}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Filters;