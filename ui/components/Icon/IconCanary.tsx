/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

"use client";

import { memo } from "react";

export const IconCanary = memo<
  JSX.IntrinsicElements["svg"] & { title?: string }
>(function IconCanary({ className, title }) {
  return (
    <svg
      className={className}
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="noun-labs-1201738-(2)"
          transform="translate(2, 0)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <path
            d="M10.2865804,5.55665262 L10.2865804,2.22331605 L10.8591544,2.22331605 C11.0103911,2.22244799 11.1551447,2.16342155 11.2617505,2.05914367 C11.3684534,1.95486857 11.4282767,1.81370176 11.4282767,1.66667106 L11.4282767,0.556642208 C11.4282767,0.40907262 11.3678934,0.26747526 11.2605218,0.16308627 C11.1531503,0.0587028348 11.0074938,0 10.8556998,0 L5.14338868,0 C4.9915947,0 4.84594391,0.0587028348 4.73856664,0.16308627 C4.63119507,0.267469704 4.57081178,0.40907262 4.57081178,0.556642208 L4.57081178,1.66667106 C4.57081178,1.81434899 4.63119507,1.95594912 4.73856664,2.06033811 C4.8459382,2.16472155 4.9915947,2.22331605 5.14338868,2.22331605 L5.71596273,2.22331605 L5.71596273,5.55665262 C5.71596273,8.38665538 2.97295619,9.88999017 0.651686904,15.5566623 C-0.0957823782,17.360053 -2.00560068,20 7.99951567,20 C18.004632,20 16.0948137,17.3600252 15.3507732,15.5566623 C13.0124432,9.88999017 10.2865804,8.38665538 10.2865804,5.55665262 Z M9.89570197,10.709991 C10.0921412,10.709991 10.2805515,10.7858383 10.4193876,10.9209301 C10.5583466,11.0559135 10.6363652,11.2390693 10.6363652,11.4300417 C10.6363652,11.6210141 10.5583466,11.8040698 10.4193876,11.9391533 C10.2805401,12.0741367 10.0921412,12.1499813 9.89570197,12.1499813 C9.6992627,12.1499813 9.51096673,12.074134 9.37201631,11.9391533 C9.23316875,11.8040615 9.15515307,11.6210141 9.15515307,11.4300417 C9.15515307,11.2390693 9.2331716,11.0559024 9.37201631,10.9209301 C9.57264221,10.7258996 9.61239426,10.709991 9.89570197,10.709991 Z M8.98919546,9.04212824 C9.09790709,9.14792278 9.15884755,9.29158681 9.1585213,9.44110085 C9.15829001,9.59073155 9.09678989,9.73407335 8.98763252,9.83954568 C8.87847514,9.945018 8.73069852,10.0039347 8.57678157,10.0033977 C8.42286747,10.0027392 8.27565088,9.94273467 8.16727355,9.83639845 C8.05900765,9.73006224 7.99873866,9.58628988 7.99963013,9.43664806 C8.00052304,9.28788403 8.0620221,9.14542556 8.17051087,9.04048101 C8.27911107,8.93555591 8.42599335,8.87663641 8.57913312,8.87663641 C8.73291864,8.87665585 8.88047525,8.93622535 8.98919546,9.04212824 Z M7.99965585,17.9999981 C4.91377349,17.9999981 3.29882839,17.7332867 2.51364277,17.4999976 C2.37780966,17.4476975 2.26954376,17.3439641 2.21396931,17.2125528 C2.15838628,17.0811499 2.16006066,16.9334692 2.21876871,16.8033858 C2.6144474,15.5921346 3.14916224,14.4280501 3.81316983,13.3333824 C5.980145,9.82337899 8.22941036,13.8867718 10.0980836,13.8867718 C11.9666996,13.8867718 11.4695868,12.1534924 12.1827971,13.3333824 C12.8511505,14.4269112 13.3916656,15.5896902 13.794259,16.8000524 C13.8533022,16.9322137 13.8537479,17.0822749 13.7952635,17.2147751 C13.7368889,17.3472613 13.6248314,17.4504531 13.4856467,17.5000531 C12.6833967,17.7332867 11.0855382,17.9999981 7.99965585,17.9999981 Z"
            id="Shape"
          ></path>
        </g>
      </g>
    </svg>
  );
});
