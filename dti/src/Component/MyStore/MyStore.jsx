import React from 'react';
import { Link} from 'react-router-dom';
import Logo from '../../Pictures/Logo.png';

const glassEffect = {
    background: 'rgba(0,0,0)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(0,0,0)',
    width: '100%', 
    height: '78px', 
  };

function MyStore(){
    return(
        <>
            <div>
      
      <header className="shadow sticky z-50 top-0">     
              <nav style={glassEffect}>
                  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                      <Link to="/" className="flex items-center">
                          <img
                              src={Logo}
                              className="mr-10 h-20"
                              alt="Logo"
                          />
                      </Link>
                  </div>
              </nav>
          </header>          
      </div>
        </>
    )
}

export default MyStore