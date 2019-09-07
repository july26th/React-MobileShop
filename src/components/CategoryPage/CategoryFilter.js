import React, { Component } from "react";
class Home extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="category-list d-flex py-3">
                    <a href><img src="img/category/iphone.png" alt="" /></a>
                    <a href><img src="img/category/samsung.png" alt="" /></a>
                    <a href><img src="img/category/asus.png" alt="" /></a>
                    <a href><img src="img/category/mobistar.png" alt="" /></a>
                    <a href><img src="img/category/oppo.png" alt="" /></a>
                    <a href><img src="img/category/wuawei.png" alt="" /></a>
                </div>
                <div className="choose-price mb-3">
                    <span className="font-weight-bold">Chọn mức giá:</span>
                    <div className="price-list">
                        <a href>Dưới 2 triệu</a>
                        <a href>Từ 2 - 4 triệu</a>
                        <a href>Từ 4 - 8 triệu</a>
                        <a href>Từ 8 - 15 triệu</a>
                        <a href>Trên 15 triệu</a>
                    </div>
                    <div className="filter">
                        <select className="form-control" name id>
                            <option style={{ display: 'none' }} selected>Sắp xếp theo</option>
                            <option>Mới nhất</option>
                            <option>Bán chạy</option>
                            <option>Giá cao đến thấp</option>
                            <option>Giá thấp đến cao</option>
                        </select>
                    </div>
                </div>
            </React.Fragment>
        );


    }
}

export default Home;

