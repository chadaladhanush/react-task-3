import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const arr = ["#FF0000","#32CD32","#0000FF","#FFFF00","#FF00FF","#07ede9","#faa716", "#91276a", "#fcd0c7", "#28a745", "#e65f05", "#1bc8f7", "#4a1b07", "#f57842", "#5993c2", "#edc70c"]
class T3 extends Component{
    constructor(){
        super();
        this.state={
            color: "#14c809"
        }
        this.toggle = false;
    }
    handleColor = () =>{
        this.setState({
            toggle:true
        });
    }
    selectColor = (event) =>{
        this.setState({
            color: event.target.style.backgroundColor,
            toggle:false
        });
    }
    render()
    {
        return(
            <div className="container mt-3" style={{height:"700px",width:"1100px", backgroundColor:"#bfa3cc"}}>
                <h2 className="text-center pt-5 pb-3" style={{fontWeight:"bold"}}>Color Picker</h2>
                <div className="container" style={{height:"500px", width:"900px", backgroundColor:"#fcd0c7", borderRadius:"20px", boxShadow:"0 0 10px black"}}>
                    <div className="d-flex justify-content-center align-items-center mb-3" style={{paddingTop:"230px"}}>
                        {(this.state.toggle) ? arr.map((item) => {
                            return(
                                <button className="border-0 mx-1" onClick={this.selectColor} style={{backgroundColor:item, width:"50px",height:"50px",borderRadius:"2px",boxShadow:"0 0 7px"}}></button>
                            );
                        })
                    :<p></p>}
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="border-0 text-white px-4 pb-2 pt-1" onClick={this.handleColor} style={{backgroundColor:this.state.color}}>Pick a color</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default T3;