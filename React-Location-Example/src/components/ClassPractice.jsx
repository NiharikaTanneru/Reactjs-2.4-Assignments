import React,{useState}from 'react';

// class Car extends React.Component{
//         constructor(props){
//             super(props);
//             this.state={
//                 color:"red"}
//         }
//         changeName=(e)=>{
    //            e.preventDefault();
//             this.setState({color:"blue"})
//         }
//         render(){
//             return (
//                 <div>
           
//                 <h2>{this.state.color}</h2>
//                 <button onClick={this.changeName}>Change</button>
//                 </div>
//                  )
//         }

// }
function Car(props){
    const[color,setColor]=useState("red");

    return(
        <div>
         <h1>My Initial color is {color} and quality is{props.quality}</h1>
         
         <button onClick={()=>setColor("blue")}>change</button>
        {
            props.obj.map((ele,i)=>{
                return(
                 <h2>{ele.person}</h2>
                
                )
                
            }

            )
        }
         
        </div>
    )
}
export default Car;