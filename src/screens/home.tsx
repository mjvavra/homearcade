import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import house from '../../assets/background-image/house.png';

export function Page() {
  const btnRef = useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (btnRef.current) {
      btnRef.current.focus();
    }
  }, []);

  const navigate = useNavigate();
  const home: React.KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === ' ') {
      // eslint-disable-next-line no-alert
      navigate('/main-menu');
    }
  };

  return (
    <div>
      <div className="container-page-title">
        <p className="page-title">Home Arcade</p>
      </div>
      <div className="content">
        <img alt="house" src={house} />
      </div>
      <div className="bottom-button">
        <button
          className="home-button"
          ref={btnRef}
          type="button"
          onKeyDown={home}
        >
          PRESS SPACEBAR
        </button>
      </div>
    </div>
  );
}

export default Page;
