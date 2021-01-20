import React, {useState, useRef, useEffect} from 'react';
import "./LazyImageStyle.css";
import placeholderImage from '../../../assets/images/lazada-placeholder.png';


// import LazyLoad from 'react-lazyload';

// const LazyImage = (props) => {
//   return (
//     <LazyLoad >
//       <img
//         src={props.src}
//         className="img"
//         alt={"Alt"}
//       />
//     </LazyLoad>
//   );
// }


function elementInViewport(el) {
  if(!el) return false;
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

// const LazyImage = (props) => {
//   return (
//     <img
//       src={props.src}
//       className="lazy-image"
//       alt={"Alt"}
//     />
//   );
// }

const LazyImage = (props) => {
  const [loaded, setLoad] = useState(false);
  const imgElm = useRef(null);
  
  const handleScroll =() => {
    if (!loaded && elementInViewport(imgElm.current)) {
      // Load real image
      const imgLoader = new Image();
      imgLoader.src = props.src;
      imgLoader.onload = () => {
        const ratioWH = imgLoader.width / imgLoader.height;
        imgElm.current.setAttribute(
          `src`,
          `${props.src}`
        );

        props.keepRatio && imgElm.current.setAttribute(
          `height`,
          `${props.width / ratioWH}`
        )

        imgElm.current.classList.add(`${props.effect}`);

        setLoad(true);
      }
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => handleScroll;
  }, [])
  
  const width = props.width || '100%';
  const height = props.height || '100%';
  
  return (
    <img
      src={props.placeHolder ?? placeholderImage}
      width={width}
      height={height}
      ref={imgElm}
      className="lazy-image"
      alt={props.alt}
    />
  );
}
export default LazyImage;
