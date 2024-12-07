import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Malumotlar</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  Bizning brendlarimiz
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Olib ketish punktlari
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Blog
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Bizning brendlarimiz
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Dokon Koreryasi
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Ommaviy oferta (Foydalanuvchi bitimi)
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Muddatli toʻlov asosida sotib
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Biz haqimizda
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Biz bilan aloqa</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  +998 77 276 66 64
                </a>               
              </li>
             
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  +998 91 360 65 05
                </a>               
              </li>
              

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  al.harameen_uz
                </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Guncha 7-tor kocha, 46, Namangan
                </a>
              </li>
            </ul>
          </div>


         

          <div className="footer-container-internal-wrapper">
         

            <div className="footer-container-internal-wrapper-bottom">
              <h4 className="footer-container-bottom-contact-title">
                Asia  watch tarmoqlarda
              </h4>

              <ul className="footer-container-bottom-contact-list">
                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaInstagram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaTelegram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaYoutube />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
