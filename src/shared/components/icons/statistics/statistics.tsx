import { type FC, type ReactElement } from 'react';

interface StatisticsIconProps {
  className?: string;
}

export const StatisticsIcon: FC<StatisticsIconProps> = ({ className }): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.8 0C1.24183 0 1.6 0.358172 1.6 0.8V12C1.6 13.3255 2.67452 14.4 4 14.4H15.2C15.6418 14.4 16 14.7582 16 15.2C16 15.6418 15.6418 16 15.2 16H4C1.79086 16 0 14.2091 0 12V0.8C0 0.358172 0.358172 0 0.8 0Z"
        fill="#F5F5F5"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.80781 7.19531C5.24964 7.19531 5.60781 7.55348 5.60781 7.99531L5.60781 11.1953C5.60781 11.6371 5.24964 11.9953 4.80781 11.9953C4.36598 11.9953 4.00781 11.6371 4.00781 11.1953L4.00781 7.99531C4.00781 7.55348 4.36598 7.19531 4.80781 7.19531Z"
        fill="#F5F5F5"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.8 1.58594C9.24183 1.58594 9.6 1.94411 9.6 2.38594L9.6 11.1859C9.6 11.6278 9.24183 11.9859 8.8 11.9859C8.35817 11.9859 8 11.6278 8 11.1859L8 2.38594C8 1.94411 8.35817 1.58594 8.8 1.58594Z"
        fill="#F5F5F5"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8078 4.00781C13.2496 4.00781 13.6078 4.36598 13.6078 4.80781L13.6078 11.2078C13.6078 11.6496 13.2496 12.0078 12.8078 12.0078C12.366 12.0078 12.0078 11.6496 12.0078 11.2078L12.0078 4.80781C12.0078 4.36598 12.366 4.00781 12.8078 4.00781Z"
        fill="#F5F5F5"
      ></path>
    </svg>
  );
};
