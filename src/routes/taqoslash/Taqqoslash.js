import React from 'react'
import taqqoslashImg from "../../assets/hearts.cf414be.png";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
function Taqqoslash() {
 let taqqoslash = useSelector((state) => state.taqqoslash.value);
  return (
    <div>
      {!taqqoslash.length ? (
        <Empty
          img={taqqoslashImg}
          title="Sizga yoqqanini qoshing"
          description="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
          link="/login"
        />
      ) : (
        <Product data={taqqoslash} />
      )}
    </div>
  )
}

export default Taqqoslash