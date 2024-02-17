import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGoogleSquare
} from "react-icons/ai";

const FoodieFooter = () => {
  return (
    <div>
      <footer className="py-5">
        <Container className=" d-flex justify-content-center align-items-start flex-wrap gap-5 py-5">
          <div>
            <div className=" d-flex align-items-center gap-3">
              <img src="/assets/navLogo.png" alt="" />
            </div>
            <address>
              59 Bervely Hill Ave, Brooklyn Town, New York, NY 5630, CA, US
            </address>
            <p>+(123) 456-7890</p>
            <p>info@mail.com</p>
            <div className="d-flex align-items-center gap-3">
              <AiFillFacebook className="icons_footer rounded-5 fs-3" />
              <AiFillInstagram className="icons_footer rounded-5 fs-3" />
              <AiFillYoutube className="icons_footer rounded-5 fs-3" />
              <AiFillGoogleSquare className="icons_footer rounded-5 fs-3" />
            </div>
          </div>
          <div>
            <h4 className="fw-bolder">Home</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bolder">Packaged</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Quality
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Help
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Share
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bolder">Others</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Log in
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Enter OTP
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  New Password
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Reset Password
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Create Account
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="fw-bolder">Contact Us</h4>
            <ul className="footer_ul">
              <li>
                <a className="footer_link" href="/">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="footer_link" href="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </Container>
        <div className=" d-flex justify-content-center align-items-center">
          <p>© 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FoodieFooter;
