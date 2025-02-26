import * as React from "react";
import { type SVGProps } from "react";

export const AzureIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg className="h-10 w-10" viewBox="0 0 128 128" {...props}>
      <defs>
        <linearGradient
          id="azz"
          x1="9"
          x2="9"
          y1="16.97"
          y2="1.03"
          gradientTransform="scale(7.11111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0078d4"></stop>
          <stop offset="0.16" stopColor="#1380da"></stop>
          <stop offset="0.53" stopColor="#3c91e5"></stop>
          <stop offset="0.82" stopColor="#559cec"></stop>
          <stop offset="1" stopColor="#5ea0ef"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#azz)"
        d="M120.89 28.445v69.262l-28.445 23.324-44.09-16.07v15.93L23.395 88.25l72.746 5.688V31.574ZM96.64 31.93 55.82 7.11v16.285L18.348 34.418 7.109 48.852v32.785l16.075 7.11V46.718Zm0 0"
      ></path>
    </svg>
  );
};
