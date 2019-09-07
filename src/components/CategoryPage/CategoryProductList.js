import React, { Component } from "react";
import CategoryProductItem from "./CategoryProductItem";
class CategoryProductList extends Component {

    render() {

        return (
            <div className="row product-category-list border-top border-left">
                <CategoryProductItem />
                <CategoryProductItem />
                <CategoryProductItem />
                <CategoryProductItem />
                <CategoryProductItem />
                <CategoryProductItem />
                <CategoryProductItem />
                <CategoryProductItem />
            </div>
        );


    }
}

export default CategoryProductList;

