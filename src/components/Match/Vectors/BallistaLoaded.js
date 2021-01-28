import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
`;

const BallistaLoaded = ({}) => {
  return (
    <SvgImage data-name="Layer 1" viewBox="0 0 256 256">
      <title>balista</title>
      <circle cx="128" cy="128.19" r="57.52" fill="#c59c6d" />
      <rect
        x="124.97"
        y="215.24"
        width="6.05"
        height="18.23"
        rx="3.03"
        fill="#998776"
      />
      <rect
        x="103.99"
        y="30.35"
        width="48.02"
        height="184.63"
        rx="24.01"
        fill="#c8b299"
      />
      <rect x="119.85" y="29.84" width="16.31" height="185.27" fill="#998776" />
      <path
        d="M141.35,27.27h-26.7v32.1h2.63V217.68h21.44V59.37h2.63Zm-7.76,185.27H122.42V59.37h11.17Z"
        fill="#754d25"
      />
      <rect x="121.6" y="53.46" width="12.58" height="14.12" fill="#544842" />
      <path
        d="M127.55,223.45l-23.06-3.72a2.85,2.85,0,0,0-3.3,2.81v7.15a2.85,2.85,0,0,0,3.3,2.81l23.06-3.72a2.72,2.72,0,0,1,.9,0l23.06,3.72a2.85,2.85,0,0,0,3.3-2.81v-7.15a2.85,2.85,0,0,0-3.3-2.81l-23.06,3.72A2.72,2.72,0,0,1,127.55,223.45Z"
        fill="#754d25"
      />
      <polygon
        points="114.44 208.96 9.08 146.48 9.91 144.05 114.86 206.39 141.14 206.36 246.09 144.05 246.92 146.48 141.57 208.93 114.44 208.96"
        fill="#010101"
        stroke="#b4b4b4"
        strokeMiterlimit="10"
      />
      <path
        d="M138.58,207.79H117.42a8.55,8.55,0,0,1-8.44-9.94L113.39,171a8.55,8.55,0,0,1,8.44-7.16h12.34a8.55,8.55,0,0,1,8.44,7.16L147,197.85A8.55,8.55,0,0,1,138.58,207.79Z"
        fill="#603a17"
      />
      <path
        d="M246.63,136.7c-23.38-23.37-14.89-38.28-34.76-62-14.68-17.53-33.27-31.78-83.78-31.78-51.35,0-69.64,14.25-83.9,31.79C25.35,97.89,34.3,118.43,9.94,136.13L.55,145.52l8.17,8.17,10.64-10.63-1.68-1.68c25.35-25.26,15.26-45.24,37-66.23,13.06-12.59,28.77-21.69,73.38-21.69,44.21,0,59.85,8.87,73,21.25,22.15,20.9,13.74,45.77,38.16,67l-1.95,1.95,10,10,8.17-8.17Z"
        fill="#8d633a"
      />
    </SvgImage>
  );
};

export default BallistaLoaded;
