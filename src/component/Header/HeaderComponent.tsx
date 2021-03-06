import React from 'react';

function HeaderComponent() {
  return (
    <header>
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#home">George FE test</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </header>
  );
}

export default HeaderComponent;
