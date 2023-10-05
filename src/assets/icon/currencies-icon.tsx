import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Currencies" clipPath="url(#clip0_1_8290)">
      <g id="Layer 2">
        <g id="Layer 1">
          <path
            id="Vector"
            d="M16.5373 14.9167C16.5373 14.7583 16.5373 14.625 16.5373 14.5C16.5373 11.0833 16.5373 7.66528 16.5373 4.24583C16.5141 4.04771 16.5505 3.84719 16.6418 3.66983C16.7331 3.49247 16.8751 3.34632 17.0498 3.25C17.1912 3.17467 17.3491 3.13582 17.5093 3.13699C17.6696 3.13816 17.8269 3.1793 17.9672 3.25668C18.1075 3.33407 18.2263 3.44525 18.3127 3.58014C18.3992 3.71504 18.4506 3.86938 18.4623 4.02917C18.4623 4.12083 18.4623 4.20833 18.4623 4.29583V15.7042C18.4623 16.5042 18.0956 16.875 17.2914 16.875C15.3873 16.875 13.4789 16.875 11.5706 16.875C10.3368 16.8914 9.13651 16.4735 8.17978 15.6942C7.22306 14.915 6.57084 13.8241 6.33727 12.6125C6.27292 12.3111 6.23941 12.004 6.23727 11.6958C6.23727 10.0292 6.23727 8.3875 6.23727 6.73333C6.22582 6.52237 6.2835 6.31343 6.40156 6.13823C6.51962 5.96302 6.69161 5.8311 6.89143 5.7625C7.07695 5.68742 7.28253 5.67787 7.47421 5.73545C7.66588 5.79303 7.83217 5.91428 7.9456 6.07917C8.07861 6.30396 8.15043 6.55966 8.15393 6.82083C8.17477 8.375 8.15393 9.92917 8.15393 11.4833C8.13043 12.2212 8.35253 12.9459 8.78538 13.5439C9.21823 14.1419 9.83735 14.5793 10.5456 14.7875C10.8735 14.8818 11.2128 14.9308 11.5539 14.9333C13.1331 14.9333 14.7081 14.9333 16.2831 14.9333C16.3581 14.9375 16.4206 14.925 16.5373 14.9167Z"
            fill="white"
          />
          <path
            id="Vector_2"
            d="M3.45843 5.09167C3.45843 5.24167 3.45843 5.37083 3.45843 5.50833C3.45843 8.93056 3.45843 12.3486 3.45843 15.7625C3.48772 16.0172 3.41461 16.2731 3.25521 16.474C3.0958 16.6748 2.86315 16.8041 2.60843 16.8333C2.35371 16.8626 2.09779 16.7895 1.89697 16.6301C1.69615 16.4707 1.56688 16.2381 1.5376 15.9833C1.5376 15.8958 1.5376 15.8083 1.5376 15.7208V4.3C1.5376 3.49583 1.90843 3.125 2.70426 3.125C4.60843 3.125 6.51676 3.125 8.4251 3.125C9.65881 3.10821 10.8592 3.52545 11.8165 4.30381C12.7739 5.08216 13.4273 6.17215 13.6626 7.38333C13.7269 7.6847 13.7604 7.99184 13.7626 8.3C13.7626 9.96667 13.7626 11.6208 13.7626 13.2625C13.7731 13.4328 13.738 13.6027 13.6608 13.7549C13.5837 13.907 13.4674 14.0358 13.3238 14.128C13.1803 14.2201 13.0147 14.2723 12.8443 14.2791C12.6739 14.2859 12.5047 14.2471 12.3543 14.1667C12.1826 14.0764 12.0417 13.937 11.9497 13.7663C11.8577 13.5956 11.8186 13.4013 11.8376 13.2083C11.8376 11.6472 11.8376 10.0819 11.8376 8.5125C11.8644 7.72913 11.6142 6.96139 11.1311 6.34416C10.648 5.72693 9.96279 5.29969 9.19593 5.1375C8.93716 5.08211 8.67305 5.05556 8.40843 5.05833C6.85426 5.05833 5.3001 5.05833 3.74593 5.05833C3.65843 5.0625 3.5751 5.07917 3.45843 5.09167Z"
            fill="white"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_8290">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const CurrenciesIcon = memo(SvgComponent);

export default CurrenciesIcon;
