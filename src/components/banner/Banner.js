import React from "react";
import "./Banner.css";
import bannerPhoto from '../../assets/elegant-3d-rolex-logo-pa7cr98e79z31ngk.jpg'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishies, removeFromWishies } from "../../redux/wishiesSlice";
import { incCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

function Banner({ date }) {
  const dispatch = useDispatch();
  let wishes = useSelector((state) => state.wishes.value);
  return (
    <div className="banner container">
      <div className="banner">
        <div className="photo">
          <img src={bannerPhoto} alt="" />
        </div>
        <div className="text">
          {date.map((el, index) => {
            return (
              <div className="banner-card">
                <div className="banner-card-img-wrapper">
                  <a className="banner-card-img-link" href="">
                    <Link to={`product/${el.id}`}>
                      <img className="banner-card-img" src={el.url[0]} alt="" />
                    </Link>
                  </a>

                  {wishes?.some((item) => item.id === el.id) ? (
                    <div
                      onClick={() => dispatch(removeFromWishies(el))}
                      className="banner-card-heart"
                    >
                      <p>
                        {" "}
                        <FaHeart />
                      </p>
                    </div>
                  ) : (
                    <div
                      onClick={() => dispatch(addToWishies(el))}
                      className="banner-card-heart"
                    >
                      <p>
                        <CiHeart />
                      </p>
                    </div>
                  )}
                </div>

                <div className="banner-card-body">
                  <h2 className="banner-card-title">{el.title}</h2>

                  <div className="banner-card-price-wrapper">
                    <div className="banner-card-price-item">
                      <del>{el.price * 1.5}</del>
                      <br />
                      <br />
                      <p>{el.price}</p>
                      <br />
                    </div>
                    <div
                      onClick={() => dispatch(incCart(el))}
                      className="banner-card-price-icon"
                    >
                      <p>
                        <IoIosStar />
                      </p>
                      <span>5</span>
                    </div>
                  </div>
                  <button className="btn">07.06.2024</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Banner;
