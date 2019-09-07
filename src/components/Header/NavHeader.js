import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
class NavHeader extends Component {

    render() {

        return (
            <div className="col-md-7 col-sm-12 right-header">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <i className="fas fa-mobile-alt" />
                                <NavLink className="nav-link" to="/category">
                                    Điện thoại
                                </NavLink>
                              
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-mobile-alt" />
                                <a className="nav-link" href="#">Phụ kiện</a>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-mobile-alt" />
                                <a className="nav-link" href="#">Sửa chữa</a>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-mobile-alt" />
                                <a className="nav-link" href="#">Trả góp</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="hotline text-center">
                    <p> <i className="fas fa-phone" /></p>
                    <p> 097 457 1080</p>
                </div>
                <div className="cart text-center">
                    <p> <i className="fas fa-shopping-cart" /></p>
                    <p> Giỏ hàng</p>
                </div>
            </div>
        );


    }
}

export default NavHeader;

