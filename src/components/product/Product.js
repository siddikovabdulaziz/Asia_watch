import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import "./Product.css";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishies, removeFromWishies } from "../../redux/wishiesSlice";
import { addToTaqqoslash, removeFromTaqqoslash } from "../../redux/taqqoslashSlice";
import { incCart } from "../../redux/cartSlice";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
function Product({ data }) {
  const dispatch = useDispatch();
  let wishes = useSelector((state) => state.wishes.value);
  let taqqoslash = useSelector((state) => state.taqqoslash.value);

  return (
    <div className="product">
      <div className="container">
        <h2 className="product-heading">Tavsiyalar</h2>

        <div className="product-wrapper">
          {
            data.map((el, index) => {
              return (
                <div className="product-card">
                  <div className="product-card-img-wrapper">
                    <a className="product-card-img-link" href="">
                      <Link to={`product/${el.id}`}>
                        <img className="product-card-img" src={el.url[0]} alt="" />
                      </Link>
                    </a>

                    {wishes?.some((item) => item.id === el.id) ? (
                      <div
                        onClick={() => dispatch(removeFromWishies(el))}
                        className="product-card-heart"
                      >
                        <p><FaHeart /></p>
                      </div>
                    ) : (
                      <div
                        onClick={() => dispatch(addToWishies(el))}
                        className="product-card-hheart"
                      >
                        <p><CiHeart /></p>
                      </div>
                    )}
                    {taqqoslash?.some((item) => item.id === el.id) ? (
                      <div
                        onClick={() => dispatch(removeFromTaqqoslash(el))}
                        className="product-taqqos"
                      >
                        <LiaBalanceScaleSolid />
                      </div>
                    ) : (
                      <div
                        onClick={() => dispatch(addToTaqqoslash(el))}
                        className="product-card-iconn"
                      >
                        <LiaBalanceScaleSolid />
                      </div>
                    )}
                  </div>

                  <div className="product-card-body">
                    <h2 className="product-card-title">{el.title}</h2>
                    <div className="icon">
                      <p><IoIosStar /></p>
                      <p><IoIosStar /></p>
                      <p><IoIosStar /></p>
                      <p><IoIosStar /></p>
                      <p><IoIosStar /></p>

                    </div>
                    <div className="product-card-price-wrapper">
                      <div className="product-card-price-item">
                        <del>{el.price * 1.5}</del>
                        <p>{el.price}</p>

                      </div>
                      <div
                        onClick={() => dispatch(incCart(el))}
                        className="product-card-price-icon"
                      >
                        <button>Hoziroq harid qilish</button>
                        <p><TbShoppingBagPlus /></p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Product;
