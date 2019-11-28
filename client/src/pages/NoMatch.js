import React from "react";
import NavBar from "../components/navBar";

function NoMatch() {
  return (
    <div>
          <NavBar>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </NavBar>
    </div>
  );
}

export default NoMatch;