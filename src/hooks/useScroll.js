import { useState, useEffect, useRef } from 'react'

const useScroll = (window) => {
	const [height, setHeight] = useState();

  const handleScroll = () => {
    setHeight(window.pageYOffset);
  };

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
	}, []);

	return height;
}

export default useScroll;
