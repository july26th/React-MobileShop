import React, { Component } from "react";
class TopDetails extends Component {

    render() {
        return (
            <div className="container details-product">
                <div className="product-name">
                    <h3>Điện thoại IPhone XS</h3>
                </div>
                <div className="row border-bottom">
                    <div className="col-md-4">
                        <img src="img/item/iphonex.png" className="w-100" alt="" />
                        <div className="details-option text-center m-3">
                            <a href><img src="img/detail/360.png" alt="" />
                                <p>Ảnh 360 độ</p>
                            </a>
                            <a href><img src="img/detail/open-box.png" alt="" />
                                <p>Mỏ hộp</p>
                            </a>
                            <a href><img src="img/detail/watch-video.png" alt="" />
                                <p>Video</p>
                            </a>
                            <a href><img src="img/detail/feedback.png" alt="" />
                                <p>Đánh giá</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="float-right pt-1">Còn hàng</div>
                        <div className="product-price">
                            <h4>7.390.000đ</h4>
                        </div>
                        <div className="choose-colors">
                            <p>Bạn đang xem phiên bản: <b>Đỏ</b></p>
                            <div className="colors-list">
                                <div className="product-color text-center active">
                                    <p><i className="fas fa-check-circle green" /> Đỏ</p>
                                    <p className="product-price">7.390.000đ</p>
                                </div>
                                <div className="product-color text-center">
                                    <p><i className="far fa-circle" /> Đen</p>
                                    <p className="product-price">8.000.000đ</p>
                                </div>
                            </div>
                        </div>
                        <div className="details-promotion mt-3">
                            <p className="text-uppercase font-weight-bold">Khuyến mãi</p>
                            <div className="promotion-list">
                                <p><i className="fas fa-check-circle green" /> Giảm 100.000đ với Khách Hàng Thân Thiết</p>
                                <p><i className="fas fa-check-circle green" /> Tặng bộ tai nghe, cáp, sạc trị giá 450.000đ</p>
                                <p><i className="fas fa-check-circle green" /> Tặng dán màn hình, ốp lưng trị giá 200.000đ</p>
                                <p><i className="fas fa-check-circle green" /> Giảm ngay 350.000đ (đã trừ vào giá)</p>
                            </div>
                        </div>
                        <div className="product-buy text-center mt-3">
                            <button type="button" className="btn btn-buy">
                                <p className="text-uppercase font-weight-bold">Mua ngay</p>
                                <p>Giao hàng miễn phí</p>
                            </button>
                            <button type="button" className="btn btn-installment">
                                <p className="text-uppercase font-weight-bold">Trả góp</p>
                                <p>Xét duyệt qua điện thoại</p>
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            Gọi <b className="red">1800-6601</b> để được tư vấn mua hàng (Miễn phí)
          </div>
                    </div>
                    <div className="col-md-3">
                        <div className="green text-uppercase font-weight-bold mb-3">Thông tin sản phẩm</div>
                        <div className="details-info">
                            <p><i className="fas fa-box-open green" /> Phụ kiện đi kèm: <span>Sạc, Sách hướng dẫn, Cáp, Cây
                lấy sim, Ốp lưng</span></p>
                            <p><i className="fas fa-award green" /> Bảo hành 12 tháng chính hãng</p>
                            <p><i className="fas fa-truck green" /> Giao hàng miễn phí toàn quốc trong 60 phút</p>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}

export default TopDetails;

