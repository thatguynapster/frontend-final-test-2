import React from "react";

type Props = {};

const Board = (props: Props) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5422 1H2.81778C1.81385 1 1 1.81385 1 2.81778V15.5422C1 16.5462 1.81385 17.36 2.81778 17.36H15.5422C16.5462 17.36 17.36 16.5462 17.36 15.5422V2.81778C17.36 1.81385 16.5462 1 15.5422 1Z"
        stroke="url(#paint0_linear_100_105)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.36216 4.63556H4.6355V12.8156H7.36216V4.63556Z"
        stroke="url(#paint1_linear_100_105)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7245 4.63556H10.9978V9.18H13.7245V4.63556Z"
        stroke="url(#paint2_linear_100_105)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_100_105"
          x1="9.18"
          y1="1"
          x2="9.18"
          y2="17.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A259FF" />
          <stop offset="1" stopColor="#613599" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_100_105"
          x1="5.99883"
          y1="4.63556"
          x2="5.99883"
          y2="12.8156"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A259FF" />
          <stop offset="1" stopColor="#613599" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_100_105"
          x1="12.3611"
          y1="4.63556"
          x2="12.3611"
          y2="9.18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A259FF" />
          <stop offset="1" stopColor="#613599" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Board;
