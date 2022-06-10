import React from "react";

class Building extends React.Component{
    constructor(props){
        super(props);

        // this.showModal = this.showModal.bind(this);
    }

    showModal(val){
        this.props.setShowProductDetail();
    }

    render() {
        return (
            <div className={"building mx-auto "+ this.props.size}>
                <div className="photo">
                    <img alt="Image Not Found" src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" />
                </div>
                <div className="building-content">
                    <div className="building-transaction">
                        <div className="transaction-type"><strong>Dijual</strong></div>
                        <div className="transaction-negotiable">Nego</div>
                        <div className="transaction-lovelist">
                            <img src="./images/icon/Love.svg" />
                        </div>
                        <div className="clear-both"></div>
                    </div>
                    <div className="price">
                        <span className="price fw-bold">Rp. 300 juta </span>
                        <span className="credit">Cicilan 26 juta / bulan</span>
                    </div>
                    <div className="features">
                        <ul>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Kamar Tidur.svg" />
                                <span>2K.Tidur</span>
                            </li>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Kamar mandi.svg" />
                                <span>2 K.Mandi</span>
                            </li>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Luas Tanah.svg" />
                                <span>62 m2</span>
                            </li>
                            <li>
                                <img alt="Image Not Found" src="./images/icon/Luas Bangunan.svg" />
                                <span>65 m2</span>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper-btn">
                        {
                            this.props.mode === "detail" ? 
                            <button onClick={this.showModal.bind(this,true)} className="btn btn-detail mx-auto">Lihat Peta</button>
                            :
                            <button onClick={this.showModal.bind(this,true)} className="btn btn-detail mx-auto">Lihat Detail</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Building;