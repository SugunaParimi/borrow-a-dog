import React from "react";
import "./about.css";
function About() {
  return (
    <div>
      <div>
        <ul className="list">
          <li className="list-item">
            Are you an animal lover who would love to own a pet Dog, but can't
            because of rent restrictions, space, time, study...? Borrow a pet
            Dog and get some fur time!
          </li>
          <li className="list-item">
            Are you looking for a dog to walk? Exercise is more fun with dogs!
            This can be a one-off walk, a weekly arrangement, whatever you and
            the Lender decide on! The time frame is negotiable!
          </li>
          <li className="list-item">
            Would you like to test whether a pet is right for you? A pet is a
            huge commitment, try it out first. We understand that it's easy to
            get wrapped up in the cuteness, but are you really ready?
          </li>
          <li className="list-item">
            Would you love the company of a dog? But aren't ready to get your
            own? Then you've come to the right place.
          </li>
          <li className="list-item">
            Are you looking to cheer up the office by brining a dog in for the
            day?
          </li>
        </ul>
      </div>
      <h1> Borrow dog in 4 easy steps</h1>
      <div className="grid">
        <div className="grid-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogm1-zz6GmQD9Gn-Qt1kxwnpP5LphHqR9rg&usqp=CAU"
            alt=""
          />
          <p>
            All members must complete a screening process to verify their
            identity.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="data:image/png;base64,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"
            alt=""
          />

          <p>
            You can lend and/or borrow for free once your account has been
            activated.
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx255JxTnaO_1yiGTnXNpyWAspORiKtOA1wQ&usqp=CAU"
            alt=""
          />

          <p>
            Choose Pet and Contact Us, We will give the information for you
            about the Pet and availability
          </p>
        </div>
        <div className="grid-item">
          <img
            src="https://www.pngfind.com/pngs/m/444-4444574_meet-greet-pet-owner-icon-png-transparent-png.png"
            alt="Meet PEt and owner"
          />

          <p>
            On both Lender and Borrowers agreement we will arrange the meetup{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
