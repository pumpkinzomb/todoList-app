import React, {Component} from "react";
import "./Palette.css"

const Color = ({color, onSelect ,selected}) => {
    return (
        <span className={`palette-${color} color ${selected===color? "active" :""}`} onClick={()=>{onSelect(color)}}></span>
    );
}

class Palette extends Component{
    
    render(){
        const {colors, onSelect, selected, onBolded} = this.props;
        return(
            <div className="palette">
                {
                colors.map(color=>(
                    <Color 
                        color={color}
                        selected={selected} 
                        onSelect={onSelect} 
                        key={color}
                    />  
                ))
                }
                <div className="make-bold" onClick={onBolded}><img src="imgs/bold.png" alt="bold 처리하기" /></div>
            </div>
        );
    }    
}

export default Palette;