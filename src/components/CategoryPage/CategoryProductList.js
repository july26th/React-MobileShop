import React, { Component } from "react";
import CategoryProductItem from "./CategoryProductItem";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actFetchCategoriesRequest } from '../../actions/index';
class CategoryProductList extends Component {
    render() {
        const { products, filters } = this.props;
        var productsList = "";
        if (products) {
            if (filters) {
                productsList = products.map((product, index) => {
                    if (product.category_id == filters) {
                        return (
                            <CategoryProductItem key={index} product={product} />
                        );
                    }
                });
            }
            else {
                productsList = products.map((product, index) => {
                    return (
                        <CategoryProductItem key={index} product={product} />
                    );
                });
            }
        }
        return (
            <div className="row product-category-list border-top border-left">
                {productsList}
            </div>
        );


    }
}
const mapStateToProps = state => {
    return {
        products: state.products,
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // fetchAllProducts: () => {
        //     dispatch(actFetchProductsRequest());
        // },
        // fetchAllCategories: () => {
        //     dispatch(actFetchCategoriesRequest());
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProductList);

