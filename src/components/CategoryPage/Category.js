import React, { Component } from "react";
import CategoryFilter from "./CategoryFilter";
import CategoryProductList from "./CategoryProductList";
class Category extends Component {

    render() {

        return (
            <div className="category-page white-background">
                <div className="container">
                    <CategoryFilter />
                    <CategoryProductList />
                </div>
            </div>
        );


    }
}

export default Category;

