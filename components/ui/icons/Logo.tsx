import * as React from "react"
import { SVGProps, Ref, forwardRef } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 115 130"
    width={115}
    height={130}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      stroke="#27252C"
      strokeWidth={5.728}
      d="M106.834 122.704 83.926 86.626H97.17l-1.345-3.817L84.96 51.99l21.345-33.327 2.824-4.408H80.153l-.836 1.383-4.53 7.499-6.376-18.09-.674-1.911H46.292l-.674 1.913-5.866 16.663-3.65-6.07-.834-1.387H6.256l2.733 4.38 20.358 32.632L18.242 82.81 16.9 86.626h13.937l-22.274 36.11-2.694 4.367h29.123l.838-1.368 21.827-35.66 21.827 35.66.838 1.368H109.628l-2.794-4.399ZM57.006 29.799l5.012 14.48-4.358 7.214-5.203-8.653 4.549-13.041Z"
    />
  </svg>
)
const Logo = forwardRef(SvgComponent)
export default Logo
