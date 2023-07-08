import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary">
            <nav>
        <div className="header">
          <div className="header-left">
            </div>
              <Link className="btn btn-lg btn-info m-2 ui primary button" id="notesdash" to="/Notes">
                Notes
              </Link>
              <Link className="btn btn-lg btn-light m-2 ui primary button" id='weatherdash' to="/Weather">
                Weather
           </Link>
   
            </div>
            </nav>
            </header>
    
    )
    }


export default Header;