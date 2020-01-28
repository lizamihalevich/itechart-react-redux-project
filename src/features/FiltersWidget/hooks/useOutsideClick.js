import { useEffect, useRef } from 'react';

const useOutsideClick = callback => {
  const ref = useRef();
  const handleRandomClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleRandomClick);

    return () => {
      document.removeEventListener('click', handleRandomClick);
    };
  });

  return ref;
};

export default useOutsideClick;
