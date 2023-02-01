import React from 'react'; 

const HemisphereDisplay = (props) => {
    let imageHighlight = {
        width: '50%',
        height: '50%',
        objectFit: 'contain',
        textAlign: 'center'
    }
    console.log(props.latitude);
    console.log(props.longitude);
    
    const picture = props.latitude >0 ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ByHMZ5V6y5LoGKwBdmAVnhergvC7zVsLfA&usqp=CAU' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDUCOGa_u-3E7ZMx69ZrPtlj2872P4rjpxQ&usqp=CAU';
    const hemi = props.longitude >0 ? 'You are in Northeren Hemisphere' : "You are in Southeren Hemisphere";
    return(
        <div className='App'>
        <img style={imageHighlight} src={picture} alt="" />
        <p>{hemi}{': Longitude '}{props.longitude}</p>
        </div>)
    }
    export default HemisphereDisplay;
