import React from "react";
import MainNavigation from "../components/layout/MainNavigation";
import { Link } from "react-router-dom";

function Feedback() {
  return (
    <div>
      <MainNavigation />
      <main>
        <h2>FeedBack</h2>
        <div class="container">
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
              <button type="submit" className="btn btn-primary shadow">
                Send Message
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Feedback;
