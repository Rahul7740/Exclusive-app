import { Link } from "react-router-dom";
import "../style/productDetail.css";
import ImgPath from "../assets/images/ImgPath";
import SvgPath from "../assets/svg/SvgPath";
import Button from "../snippets/butttons/button";
import { Fragment, useState } from "react";
import Product from "../home/Product";
import Related from "../json/Related.json"
import ProductCard from "../snippets/product-card/product-card";
function ProductDetail() {
    const [quantity, setQuantity] = useState(2)

    return (
        <>
            <section className="all-section">
                <div className="container">
                    <div className="direction-container">
                        <Link to={"/"}>Home</Link>/
                        <Link to={"/productDetail"}>Havic HV G-92 Gamepad</Link>
                    </div>
                    <div className="productDetail-container">
                        <img src={ImgPath.gamepad1} />
                        <img src={ImgPath.gamepad2} />
                        <img src={ImgPath.gamepad3} />
                        <img src={ImgPath.gamepad4} />
                        <img className="product-main-img" src={ImgPath.gamepadMain} />
                        <div className="product-imformation">
                            <h2>Havic HV G-92 Gamepad</h2>
                            <div className="ratting-container">
                                <div className="card-rating">
                                    <img src={SvgPath.star} alt="star" />
                                    <img src={SvgPath.star} alt="star" />
                                    <img src={SvgPath.star} alt="star" />
                                    <img src={SvgPath.star} alt="star" />
                                    <img src={SvgPath.emptyStars} alt="Empty Stars" />
                                </div>
                                <p className="card-rate-no">(150 Reviews)</p>
                                <p
                                    style={{ paddingLeft: "16px", borderLeft: "1px solid gray" }}
                                >
                                    In Stock
                                </p>
                            </div>
                            <h2>$192.00</h2>
                            <p className="product-i-discription">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                            <hr />
                            <div className="radio-container">
                                <p>Colours:</p>
                                <label className="custom-radio">
                                    <input type="radio" name="color" />
                                    <span className="radio-button" style={{ backgroundColor: '#A0BCE0' }}></span>
                                </label>
                                <label className="custom-radio">
                                    <input type="radio" name="color" />
                                    <span className="radio-button" style={{ backgroundColor: '#E07575' }}></span>
                                </label>
                            </div>
                            <div className="radio-container">
                                <p>Size:</p>
                                <label htmlFor="a1" className="custom-radio">
                                    <input id="a1" type="radio" name="size" />
                                    <span className="size-btn" >XS</span>
                                </label>
                                <label htmlFor="a2" className="custom-radio">
                                    <input id="a2" type="radio" name="size" />
                                    <span className="size-btn">S</span>
                                </label>
                                <label htmlFor="a3" className="custom-radio">
                                    <input id="a3" type="radio" name="size" />
                                    <span className="size-btn">M</span>
                                </label>
                                <label htmlFor="a4" className="custom-radio">
                                    <input id="a4" type="radio" name="size" />
                                    <span className="size-btn">L</span>
                                </label>
                                <label htmlFor="a5" className="custom-radio">
                                    <input id="a5" type="radio" name="size" />
                                    <span className="size-btn">XL</span>
                                </label>
                            </div>
                            <div className="flex-spaceBetween">
                                <div className="plus-minus-container">
                                    <button onClick={() => { setQuantity(quantity - 1) }} className="plus-minus-btn">-</button>
                                    <p>{quantity}</p>
                                    <button onClick={() => { setQuantity(quantity + 1) }} className="plus-minus-btn">+</button>
                                </div>
                                <Button name="Buy Now" bgColor="#DB4444" />
                                <div className="like-btn-div"><img src={SvgPath.heart} alt="like" /></div>
                            </div>
                            <div className="product-offers-container">
                                <div className="product-offers-contents abadf">
                                    <img src={SvgPath.freeDelivery} />
                                    <div>
                                        <h3>Free Delivery</h3>
                                        <a href=""><ins>Enter your postal code for Delivery Availability</ins></a>
                                    </div>
                                </div>
                                <div className="product-offers-contents">
                                    <img src={SvgPath.return} />
                                    <div>
                                        <h3>Return Delivery</h3>
                                        <a href="">Free 30 Days Delivery Returns. <ins>?Details</ins> </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="all-section">
                <div className="container">
                    <div className="overview">
                        <div className="overview-head">
                            <div className="red-rec"></div>
                            <h3 className="overview-h3">Related Item</h3>
                        </div>

                        <div className="all-projects">
                            {Related.map((i, index) => (
                                <Fragment key={index}>
                                    <ProductCard
                                        image={i.image}
                                        head={i.head}
                                        price={i.price}
                                        rate={i.rate}
                                        percentOFF={i.percentOFF}
                                    />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProductDetail;
