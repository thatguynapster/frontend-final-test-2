import React from "react";

type Props = {};

const Compass = (props: Props) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18 17.36C13.6977 17.36 17.36 13.6977 17.36 9.18C17.36 4.66231 13.6977 1 9.18 1C4.66231 1 1 4.66231 1 9.18C1 13.6977 4.66231 17.36 9.18 17.36Z"
        stroke="url(#paint0_linear_100_96)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6483 5.71167L10.9141 10.9141L5.71167 12.6483L7.44583 7.44583L12.6483 5.71167Z"
        stroke="url(#paint1_linear_100_96)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_100_96"
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
          id="paint1_linear_100_96"
          x1="9.17999"
          y1="5.71167"
          x2="9.17999"
          y2="12.6483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A259FF" />
          <stop offset="1" stopColor="#613599" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Compass;
