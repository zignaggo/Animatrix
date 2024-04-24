import { SVGProps } from "react"
const Google = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.35 9.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C6.36 17.27 3 14.25 3 10c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L17 2.72S14.56 0 10.1 0C4.42 0 .03 4.8.03 10c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z"
    />
  </svg>
)
export default Google
