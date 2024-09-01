import React from "react";

type Props = {};

const EmailIcon = (props: Props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_100_338)">
        <path
          d="M2.07264 1.09088H9.92718C10.4672 1.09088 10.909 1.64315 10.909 2.31815V9.68179C10.909 10.3568 10.4672 10.9091 9.92718 10.9091H2.07264C1.53264 10.9091 1.09082 10.3568 1.09082 9.68179V2.31815C1.09082 1.64315 1.53264 1.09088 2.07264 1.09088Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 2.5L6 6.5L2 2.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_100_338">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EmailIcon;
