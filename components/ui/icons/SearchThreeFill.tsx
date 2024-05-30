import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5ZM10.5 6a1 1 0 0 0 0 2 2.5 2.5 0 0 1 2.5 2.5 1 1 0 0 0 2 0A4.5 4.5 0 0 0 10.5 6Z"
            clipRule="evenodd"
        />
    </svg>
)
const SearchThreeFill = forwardRef(SvgComponent)
export default SearchThreeFill
