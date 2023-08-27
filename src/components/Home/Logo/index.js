import { useEffect, useRef } from 'react';
import LogoS from '../../../assets/images/logo.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    const bgElement = bgRef.current;
    const outlineLogoElement = outlineLogoRef.current;
    const solidLogoElement = solidLogoRef.current;

    const timeline = [
      {
        element: bgElement,
        animation: [
          {
            property: 'opacity',
            duration: 1000,
            delay: 0,
            from: 0,
            to: 1,
          },
        ],
      },
      {
        element: outlineLogoElement,
        animation: [
          {
            property: 'strokeDashoffset',
            duration: 20000,
            delay: 0,
            from: outlineLogoElement.getTotalLength(),
            to: 0,
          },
        ],
      },
      {
        element: solidLogoElement,
        animation: [
          {
            property: 'opacity',
            duration: 4000,
            delay: 4000,
            from: 0,
            to: 1,
          },
        ],
      },
    ];

    timeline.forEach(({ element, animation }) => {
      animation.forEach((anim) => {
        element.style.transition = `${anim.property} ${anim.duration}ms ${anim.delay}ms ease`;
        element.style[anim.property] = anim.to;
      });
    });
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" ref={solidLogoRef} src={LogoS} alt="JavaScript,  Developer" />

      <svg width="559pt" height="897pt" version="1.0" viewBox="0 0 559 897" xmlns="http://www.w3.org/2000/svg">
        <g className="svg-container" transform="translate(0 457) scale(.3 -.2)" fill="none">
          <path ref={outlineLogoRef} />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
