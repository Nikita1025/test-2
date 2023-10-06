import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="MagnifyingGlass">
      <path
        id="Vector"
        d="M18.4424 17.0579L14.5306 13.1469C15.6644 11.7858 16.2298 10.0399 16.1091 8.2725C15.9884 6.50512 15.191 4.85229 13.8828 3.65785C12.5745 2.46341 10.8561 1.81932 9.0851 1.85957C7.31406 1.89982 5.62671 2.62131 4.37407 3.87395C3.12143 5.12659 2.39994 6.81394 2.35969 8.58498C2.31944 10.356 2.96353 12.0744 4.15797 13.3827C5.35241 14.6909 7.00524 15.4883 8.77263 15.609C10.54 15.7297 12.2859 15.1643 13.6471 14.0305L17.558 17.9422C17.6161 18.0003 17.685 18.0464 17.7609 18.0778C17.8367 18.1092 17.9181 18.1254 18.0002 18.1254C18.0823 18.1254 18.1636 18.1092 18.2395 18.0778C18.3154 18.0464 18.3843 18.0003 18.4424 17.9422C18.5004 17.8842 18.5465 17.8152 18.5779 17.7394C18.6094 17.6635 18.6255 17.5822 18.6255 17.5001C18.6255 17.4179 18.6094 17.3366 18.5779 17.2607C18.5465 17.1849 18.5004 17.1159 18.4424 17.0579ZM3.62518 8.75006C3.62518 7.63754 3.95508 6.55 4.57316 5.62497C5.19124 4.69995 6.06975 3.97898 7.09758 3.55323C8.12542 3.12749 9.25642 3.0161 10.3476 3.23314C11.4387 3.45018 12.441 3.98591 13.2277 4.77258C14.0143 5.55925 14.5501 6.56153 14.7671 7.65267C14.9841 8.74382 14.8727 9.87482 14.447 10.9027C14.0213 11.9305 13.3003 12.809 12.3753 13.4271C11.4502 14.0452 10.3627 14.3751 9.25018 14.3751C7.75884 14.3734 6.32906 13.7802 5.27453 12.7257C4.22 11.6712 3.62683 10.2414 3.62518 8.75006Z"
        fill="#D0D0D0"
      />
    </g>
  </svg>
);
const SearchIcon = memo(SvgComponent);

export default SearchIcon;