import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";

function Contact() {
  return (
    <div>
      <MainNavigation />
      <br />
      <br />
      <main>
        <section className="section">
          <div className="container">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h2>Contact Us</h2>
                    <hr />
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone number</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Enter Phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        rows="10"
                        className="form-control"
                        placeholder="Type your message..."
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <Link to="/">
                        <button
                          type="submit"
                          className="btn btn-primary shadow"
                        >
                          Send Message
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 border start">
                    <h2 className="main-heading ">Address Information</h2>
                    <p>MG Streets, San Francisco -56XXXX, USA</p>
                    <p>Phone : +1 88XXXXXXXX</p>
                    <p>Email: purefeel@gmail.com</p>
                  </div>
                  <div class="col-lg-6 right-image p-r-0">
                    <iframe
                      title="This is a unique title"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619902.0054433027!2d-122.68851282163044!3d37.534535608111824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1507725785789"
                      width="100%"
                      height="538"
                      frameborder="0"
                      allowfullscreen
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
