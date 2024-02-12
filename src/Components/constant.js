import Contact from "../Pages/Contact/Contact";
import View from "../Pages/View/View";
import Home from "../Pages/Home/Home";

export const INITIAL_FORM_DATA = {
    defaultValues : {
        model : '',
        location : '',
        color : '',
        noOfOwners : '',
        yearOfManufacture : '',
        transmission : '',
        insuranceValidUpto : '',
        externalFitments : '',
        kms : '',
        photo : ''
    }
};

export const RenderComponent = ({type}) => {
    switch(type) {
        case 'Home':
            return <Home />
        case 'View':
            return <View />
        case 'Contact us' :
            return <Contact />
    }
}