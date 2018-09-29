import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Social() {
  return (
    <ul className="socialmediaicons">
      <li className="contacticons" id="facebook">
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD///+AgIBSUlKHh4fGxsbLy8vx8fE3NzfIyMgICAi/v78MDAy4uLgcHBwWFhYkJCTY2NjS0tKsrKylpaV6enqfn5/e3t6rq6v4+PiysrIfHx8oKCgRERGhoaGRkZFpaWlFRUXm5uZtbW1eXl5NTU0yMjJzc3NOTk49PT2MjIy194Q8AAAD0ElEQVR4nO3djXKiMBiFYfGPVkUrVRCl9Y/q6v1f4O6MOzu1xeoXsvlOMue9gE6eKQxIQmi1lBpNVuXho9rvj8f5fN7+W/dP7X/NL7W3WoM0bXXqbLqzXh492lp7xJLGH8f167R4GOebsFonUp1PwvI8fPzA9FB4mOUG/z2PhO+xKc8P4d743+eHcDts5IMXjo+7hsAoG2gjfqrMmpyBHghXy2anIL6w6Sl4EY60GbdLbACRhQsrQGBh1w4wyt60JTeqGl8mwIWn1BIQVphZuE5cep9oW2qzdoxG0QxSOJlZA4IKO9aOUVDhwNKlEFd4sAiMZmNtTk3t4IWGz5z8Ea5sAqMFoNDqQRotVtqe71m7YUMVjixeDDGFVfDCzCowesUT9u0Kly/aoG9ZvRoiCsvghb/s/TQEFR6bP+YGF57tXiwAhfae0FxKSm3R10x+/Ra7fJqm/brSNdz1cCnlxUnW3lcf29Ppqa4SbmZGOluRVnCH4Z2Ewp1vPvGUWkd7vPJkwp32cA2SCV+1h2tQTyQ8ag/XIJnQw9Ow9SwSPmkPV95AJvTvWtEayYRwt9X3m8geYgA+7r1X+MKxTIg4dXYnCr8EutDip2TCwkPhKnjhC4UUwkfhdTHs4tHbUUghfjLhjkLAZMKcQsBkwincxNL9whfKfh+m2sP9qbJT22YqEeb1f+RzJ7VT1dZbP/dK1B6p2l1Feju9N7tcCc9aQGfCdujCQm+G0ZEw3oQuzPXmUB0JU70deBwJe3qzxI6Eigv3HAmXerNTjoQLNaAr4XvwQsXNW9wIC73bUkfCeB66cLcJXZhXoQunitsmuhH2D6ELnxUXTbkRDvWAFFoqCV6oeOPtRlho7inoRBjrPUt0JNS8aXMk1HxbwYkw13xbwY1Q8/VKJ8KpIpBCO/WCF6q+vOdCqHpL40QY7zWF8yKuTUQoejcbJstFV/Vd/NOnb1F8qiva2iTXFBg2kK1rC35NlI8r9yikED+ZMPzVlxQiRiGF+IUvlO04QCFiFFKIH4XXpRQCRiGF+IUvfBPtZuajULZfG4WIUUghfjJhn0LAKKQQv/CFsn2EfRTK9oKmEDIKKcRPJHwOXqi6QtY0mTD8/yGFiFFIIX6i78xQCBmFFOInEmq+bm8chRTiRyGF+FFIIX4ioeYGO8ZRSCF+oi8eUwgZhRTiJxIutUdrEoUU4kchhfhRSCF+IqHqjnOmUUghfhRSiB+FV2luKm+cSDjTHq1J4QsTCimEj0IK8aPwKsXvN5onEmbaozWJQgrxo5BC/ML/fVh1H+/8vz/J9RuVX2Srqzb7AQAAAABJRU5ErkJggg=="
          className="contacticonimage"
        />
      </li>
      <li className="contacticons" id="instagram">
        <img
          alt=""
          src="https://ubisafe.org/images/instagram-transparent-round-4.png"
          className="contacticonimage"
        />
      </li>
      <li className="contacticons" id="twitter">
        <img
          alt=""
          src="https://techflourish.com/images/transparent-twitter-clipart-6.png"
          className="contacticonimage"
        />
      </li>
      <Link to="/about">
        <li className="contacticons" id="contactpif">
          <img
            alt=""
            src="https://banner2.kisspng.com/20180405/zbw/kisspng-computer-icons-mobile-phones-telephone-email-home-phone-icon-5ac5cd33820a46.8508185315229125635327.jpg"
            className="contacticonimage"
          />
        </li>
      </Link>
    </ul>
  );
}
