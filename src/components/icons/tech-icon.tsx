import * as React from "react";
import { type SVGProps } from "react";

export const TechIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4 9.859 19.455"
      ></path>
    </svg>
  );
};
