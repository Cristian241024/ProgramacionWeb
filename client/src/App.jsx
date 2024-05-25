import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';
import { MyRoutes } from './routes/routesWeb';
import { WebContextProvider } from './context/ContextWeb';

function App() {
  const [isAsideVisible, setIsAsideVisible] = useState(true);
  const location = useLocation();
  const asideRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setIsAsideVisible(location.pathname === '/');
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        asideRef.current &&
        !asideRef.current.contains(event.target) &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsAsideVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <WebContextProvider>
      <div ref={headerRef}>
        <Header setIsAsideVisible={setIsAsideVisible} isAsideVisible={isAsideVisible} />
      </div>
      <div ref={asideRef}>
        <Aside isVisible={isAsideVisible} />
      </div>
      <MyRoutes/>
    </WebContextProvider>
  );
}

export default App;



