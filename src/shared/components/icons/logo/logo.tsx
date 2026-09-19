import { type FC, type ReactElement } from "react";
interface LogoIconProps {
  className?: string;
}

export const LogoIcon: FC<LogoIconProps> = ({ className }): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1885 213"
      fill="none"
      className={className}
    >
      <path
        fill="#ffffff"
        fillRule="evenodd"
        d="M0 1L1 212L51 211L53 62L245 211H298V0H245L244 148L51 0Z"
      />
      <path fill="#ffffff" d="M339 1V46H622V0L339 1Z" />
      <path fill="#ffffff" d="M339 84L340 129H622V83L339 84Z" />
      <path fill="#ffffff" d="M339 164L341 191L345 200L353 210H622V164H339Z" />
      <path
        fill="#ffffff"
        fillRule="evenodd"
        d="M642 0L751 105L649 203L655 210L660 211H705L819 104L705 0H642Z"
      />
      <path fill="#ffffff" d="M803 140L880 212H945L915 183L836 113L803 140Z" />
      <path fill="#ffffff" d="M931 0H878L806 71L836 96H840L934 9L931 0Z" />
      <path
        fill="#ffffff"
        d="M959 0L960 27L967 45L1073 46L1074 212H1127V47L1129 45H1249V0H959Z"
      />
      <path
        fill="#c0ff01"
        fillRule="evenodd"
        d="M1281 212L1330 211L1331 131H1523L1555 120L1572 104L1581 85L1582 55L1575 34L1559 15L1546 7L1526 1H1281V45H1516L1525 48L1534 61L1530 79L1516 86H1281V212Z"
      />
      <path
        fill="#c0ff01"
        fillRule="evenodd"
        d="M1613 47L1600 85V131L1612 166L1622 180L1641 197L1665 208L1687 212H1884V166H1690L1673 160L1661 150L1652 135L1648 120V93L1652 78L1663 60L1673 52L1697 45H1884V46L1883 1L1680 2L1658 8L1641 17L1624 32L1613 47Z"
      />
    </svg>
  );
};
