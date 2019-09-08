import React, { Component } from "react";
import TopDetails from "./TopDetails";
import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";
import { connect } from 'react-redux';
import { actFetchDetailsProduct, actFetchDetailsProductRequest } from '../../actions/index';
class DetailsProduct extends Component {
    componentDidMount() {
        const { match } = this.props;
        if (match) {
            const id = parseInt(match.params.id,10);
            this.props.onDetailsProduct(id);
        }
        // if(this.props.match) {
        //    // this.props.onDetailsProduct(parseInt(this.props.match.params, 10))
        // /   console.log(parseInt(this.props.match.params, 10))
        // }
    }
    render() {
        return (
            <div className="details-page white-background">
                <div className="container">
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="#">Trang chủ</a>
                        <a className="breadcrumb-item" href="#">Điện thoại</a>
                        <a className="breadcrumb-item" href="#">Iphone</a>
                        <span className="breadcrumb-item active">Iphone XS</span>
                    </nav>
                </div>
                <TopDetails />
                <div className="container details-product-info mt-4">
                    <div className="row">
                        <LeftDetails />
                        <RightDetails />
                    </div>
                </div>
            </div>
        );


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDetailsProduct: (id) => {
            dispatch(actFetchDetailsProductRequest(id));
        },
    }
}

export default connect(null, mapDispatchToProps)(DetailsProduct);


