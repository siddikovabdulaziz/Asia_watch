// import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static/index'
import { CiHeart } from "react-icons/ci";
import { FaMinus } from "react-icons/fa";
import { DATA } from '../../static/index';
import React, { useReducer, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import './SingleRoute.css'
function SingleRoute() {
  const param = useParams();
  console.log(param);

  const item = DATA.find((item) => item.id === param.id)
  console.log(item);

  const handleReducer = (state, action) => {
    switch (action.type) {
      case 'plus':
        return state + 1;
      case 'minus':
        if( state > 0){
          return state - 1; //

        }else{
          return state - 0;
        }
      case 'option':
        return state + action.value;
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(handleReducer, 0);
  const [selectValue, setSelectValue] = useState('');
  return (
    <div className='main_singleRoute'>
        <br />
      <div className="container">
       
        <div className="singlRoute">
          <img src={item.url[0]} width={400} alt="" />
          <div className="logo">
            <div className="box">

              <br />
              <p className="pp__boshi2">Набор кухонной посуды Kukmara, АП линия Granit Ultra</p>
              <br />
              <div className="box2">
                <p className="pp__boshi3">Продавец:</p>
                <a href="/" className='pp__boshi4'>Kukmara:</a>
              </div>
              <div className="box3">
                <p className="pp__boshi3">Доставка:</p>
                <p className="pp__boshi3">1 день, бесплатно:</p>
              </div>
              <br />
              <hr />
              <br />
              <p className='p'>Цвет:</p>
              <br />
              {/* lllllllllllll */}
              <a href="/">Подробнее о размерах</a>
            </div>
            <br />
            <div className="logo__2">
            <p className='p'>Количество:</p>
            <div className="box__1">
              <div className="hello">
              {/* <div class="cart__item-btns"><button disabled="">-</button><button>1</button><button>+</button></div> */}
                <button className='btn' onClick={() => dispatch({ type: 'minus' })}><FaMinus /></button>
                <h2 className='counter'>{counter}</h2>
                <button className='btn' onClick={() => dispatch({ type: 'plus' })}><FaPlus /></button>
              </div>
              <div className="hello__1">
                <p className="p_titel">В.наличии.8</p>
              </div>
            </div>
            <br />
            <div className="the">
            <button className="button">
            <h4 className='narxi'>От {item.price}сум/мес</h4>
            <span className='plo'>{item.title}</span>
            </button>
            </div>
            <div className="nomi"><h4>{item.model}</h4></div>
            </div>
          </div>
          {
            DATA.map((item, index) => {
              return (
                <div key={index} className="singleRoute">
                  <div className='singleroute' >
                  </div>
                </div>
              )
            })
          }




        </div>
      </div>  
    </div>
  )
}

export default SingleRoute