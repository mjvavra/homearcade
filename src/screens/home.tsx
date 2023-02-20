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
      <h1>Home Arcade</h1>
      <img alt="house" src={house} />
      <button ref={btnRef} type="submit" onKeyDown={home}>
        PRESS SPACEBAR
      </button>
    </div>
  );
}

export default Page;
