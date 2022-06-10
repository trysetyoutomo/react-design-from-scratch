import React from "react";
import Building from "./Building";
import BuildingMap from "./BuildingMap";

class Modal extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="modal">
                <div  className="modal-backdrop"></div>
                <Building size={this.props.size} mode={this.props.mode} />
                {/* <BuildingMap size={this.props.size} mode={this.props.mode} /> */}
            </div>
        )
    }

}

export default Modal;