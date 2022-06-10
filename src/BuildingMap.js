import React from "react";

class BuildingMap extends React.Component{
    constructor(props){
        super(props);

    }

    showModal(val){
        this.props.setShowProductDetail();
    }

    render() {
        return (
            <div className={"building building-map mx-auto "+ this.props.size}>
                <div className="photo">
                    <img alt="Image Not Found" src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" />
                </div>
            </div>
        )
    }
}

export default BuildingMap;