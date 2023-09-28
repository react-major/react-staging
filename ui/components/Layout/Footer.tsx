/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from "react";
import NextLink from "next/link";
import cn from "classnames";
import { ExternalLink } from "ui/components/ExternalLink";
import { IconFacebookCircle } from "ui/components/Icon/IconFacebookCircle";
import { IconTwitter } from "ui/components/Icon/IconTwitter";
import { IconGitHub } from "ui/components/Icon/IconGitHub";

export function Footer() {
  const socialLinkClasses = "hover:text-primary dark:text-primary-dark";
  return (
    <footer className={cn("text-secondary dark:text-secondary-dark")}>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1 justify-items-start mt-3.5">
          <ExternalLink
            href="https://opensource.fb.com/"
            aria-label="Meta Open Source"
          >
            <div>
              <svg
                width="160"
                height="19"
                viewBox="0 0 160 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary dark:text-primary-dark"
              >
                <path
                  d="M22.0605 3.62598H24.3349L28.202 10.6212L32.0691 3.62598H34.2942V15.1206H32.4387V6.31077L29.0476 12.4111H27.307L23.9162 6.31077V15.1206H22.0605V3.62598Z"
                  fill="currentColor"
                />
                <path
                  d="M40.2785 15.3259C39.4191 15.3259 38.6638 15.1357 38.0124 14.7554C37.367 14.3812 36.8394 13.8336 36.4895 13.1747C36.1253 12.5015 35.9433 11.7297 35.9434 10.8594C35.9434 9.97825 36.1213 9.19824 36.4771 8.5194C36.8329 7.84077 37.3269 7.30982 37.9592 6.92653C38.5913 6.54347 39.3179 6.3519 40.139 6.35181C40.9546 6.35181 41.6566 6.54477 42.2449 6.9307C42.8334 7.31658 43.2863 7.85713 43.6038 8.55232C43.9212 9.24748 44.08 10.063 44.0801 10.9989V11.5081H37.7826C37.8975 12.2088 38.1808 12.7602 38.6323 13.1625C39.0839 13.5648 39.6546 13.7659 40.3443 13.766C40.8971 13.766 41.3733 13.6839 41.7729 13.5196C42.1723 13.3554 42.5473 13.1063 42.8977 12.7724L43.8831 13.9794C42.9031 14.8771 41.7016 15.326 40.2785 15.3259ZM41.6334 8.50718C41.2447 8.11027 40.7356 7.91184 40.1062 7.91189C39.4931 7.91189 38.9799 8.11439 38.5667 8.51941C38.1533 8.92464 37.8919 9.46931 37.7826 10.1534H42.2984C42.2436 9.45273 42.0219 8.90398 41.6334 8.50716V8.50718Z"
                  fill="currentColor"
                />
                <path
                  d="M46.3308 8.07609H44.623V6.55715H46.3308V4.04468H48.1209V6.55715H50.7153V8.07609H48.1209V11.9267C48.1209 12.5672 48.2303 13.0243 48.4492 13.298C48.6682 13.5717 49.0431 13.7086 49.5741 13.7084C49.7742 13.7102 49.9743 13.7006 50.1734 13.6797C50.3376 13.6606 50.5183 13.6346 50.7153 13.6017V15.1043C50.4905 15.1692 50.2614 15.2186 50.0297 15.252C49.7647 15.2911 49.4971 15.3103 49.2292 15.3095C47.2969 15.3095 46.3308 14.2531 46.3308 12.1403L46.3308 8.07609Z"
                  fill="currentColor"
                />
                <path
                  d="M60.0415 15.1207H58.2844V13.9219C57.9815 14.3629 57.572 14.7202 57.094 14.9606C56.6123 15.204 56.0649 15.3258 55.4519 15.3259C54.6966 15.3259 54.0274 15.133 53.4444 14.7472C52.8614 14.3611 52.4029 13.8302 52.0692 13.1543C51.7353 12.4784 51.5684 11.7052 51.5684 10.8348C51.5684 9.95904 51.738 9.1845 52.0774 8.5112C52.4167 7.83795 52.8861 7.30972 53.4855 6.92653C54.0847 6.54347 54.773 6.3519 55.5503 6.35181C56.1361 6.35181 56.6616 6.46538 57.1269 6.69253C57.5858 6.91465 57.9833 7.24591 58.2844 7.65731V6.55718H60.0415V15.1207ZM58.2516 9.55395C58.06 9.06686 57.7576 8.68232 57.3444 8.40033C56.9311 8.11861 56.4535 7.97771 55.9116 7.97762C55.1452 7.97762 54.5349 8.23487 54.0807 8.74939C53.6264 9.2639 53.3993 9.95905 53.3993 10.8349C53.3993 11.7162 53.6182 12.4141 54.0561 12.9285C54.4939 13.443 55.0877 13.7003 55.8377 13.7003C56.3906 13.7003 56.8833 13.5579 57.3156 13.2733C57.7405 12.9979 58.068 12.5957 58.2516 12.1238V9.55395Z"
                  fill="currentColor"
                />
                <path
                  d="M64.4113 11.7585C64.1266 11.0332 63.9843 10.2382 63.9844 9.3733C63.9844 8.50853 64.1267 7.71351 64.4113 6.98824C64.6823 6.28392 65.0929 5.6416 65.6182 5.09981C66.1399 4.56496 66.7659 4.14298 67.4573 3.86003C68.1634 3.56716 68.9379 3.4207 69.7808 3.42065C70.6238 3.42065 71.3984 3.56711 72.1045 3.86003C72.796 4.14302 73.422 4.56499 73.9437 5.09981C74.4689 5.64171 74.8795 6.284 75.1507 6.98824C75.4351 7.71351 75.5774 8.50853 75.5776 9.3733C75.5776 10.2382 75.4353 11.0333 75.1507 11.7585C74.8795 12.4627 74.4689 13.105 73.9437 13.6469C73.422 14.1818 72.796 14.6038 72.1045 14.8867C71.3984 15.1794 70.6239 15.3259 69.7808 15.3259C68.938 15.3259 68.1635 15.1795 67.4573 14.8867C66.7658 14.6038 66.1399 14.1818 65.6182 13.6469C65.0929 13.1051 64.6823 12.4628 64.4113 11.7585ZM73.6152 9.3733C73.6152 8.54697 73.451 7.81763 73.1226 7.18529C72.7942 6.55303 72.3413 6.05904 71.7637 5.70331C71.1862 5.34753 70.5252 5.16962 69.7808 5.16958C69.0365 5.16958 68.3756 5.34749 67.7981 5.70331C67.2205 6.05909 66.7676 6.55308 66.4392 7.18529C66.1108 7.81741 65.9466 8.54674 65.9466 9.3733C65.9466 10.1999 66.1108 10.9293 66.4392 11.5615C66.7677 12.1937 67.2206 12.6877 67.7981 13.0434C68.3755 13.3993 69.0364 13.5773 69.7808 13.5772C70.5252 13.5772 71.1862 13.3993 71.7637 13.0434C72.3413 12.6877 72.7942 12.1937 73.1226 11.5615C73.451 10.9292 73.6152 10.1998 73.6152 9.3733V9.3733Z"
                  fill="currentColor"
                />
                <path
                  d="M77.2188 6.55718H78.9839V7.74763C79.2856 7.30796 79.6938 6.95201 80.1705 6.71309C80.6492 6.47237 81.1952 6.35194 81.8084 6.35181C82.5637 6.35181 83.2342 6.54477 83.8199 6.9307C84.4056 7.31658 84.8641 7.84615 85.1952 8.5194C85.5263 9.19264 85.6919 9.96719 85.6919 10.843C85.6919 11.7133 85.5223 12.4865 85.1829 13.1625C84.8436 13.8386 84.3742 14.3681 83.7747 14.7512C83.1755 15.1343 82.4873 15.3258 81.71 15.3259C81.1353 15.3259 80.618 15.2165 80.1581 14.9976C79.7045 14.7837 79.31 14.4624 79.0087 14.0616V18.569H77.2188V6.55718ZM79.9159 13.2774C80.3291 13.5594 80.8067 13.7004 81.3487 13.7003C82.1148 13.7003 82.7251 13.443 83.1796 12.9285C83.6339 12.414 83.861 11.7188 83.861 10.843C83.861 9.96172 83.6421 9.26383 83.2042 8.74937C82.7662 8.23486 82.1723 7.9776 81.4226 7.9776C80.8697 7.9776 80.377 8.11989 79.9447 8.40448C79.5197 8.67987 79.1923 9.08202 79.0087 9.55393V12.1238C79.2002 12.611 79.5026 12.9956 79.9159 13.2774Z"
                  fill="currentColor"
                />
                <path
                  d="M91.177 15.3259C90.3176 15.3259 89.5622 15.1357 88.9109 14.7554C88.2654 14.3812 87.7377 13.8336 87.3878 13.1747C87.0236 12.5015 86.8417 11.7297 86.8418 10.8594C86.8418 9.97825 87.0197 9.19824 87.3754 8.5194C87.7312 7.84077 88.2252 7.30982 88.8574 6.92653C89.4896 6.54347 90.2163 6.3519 91.0373 6.35181C91.8528 6.35181 92.5548 6.54477 93.1434 6.9307C93.7317 7.31658 94.1846 7.85713 94.5022 8.55232C94.8196 9.24748 94.9782 10.063 94.9783 10.9989V11.5081H88.6809C88.7958 12.2088 89.0791 12.7602 89.5308 13.1625C89.9824 13.5648 90.553 13.7659 91.2426 13.766C91.7954 13.766 92.2716 13.6839 92.6712 13.5196C93.0708 13.3554 93.4457 13.1063 93.796 12.7724L94.7812 13.9794C93.8014 14.8771 92.6 15.326 91.177 15.3259ZM92.5315 8.50718C92.1428 8.11027 91.6338 7.91184 91.0044 7.91189C90.3914 7.91189 89.8782 8.11439 89.465 8.51941C89.0517 8.92464 88.7903 9.46931 88.6809 10.1534H93.1966C93.1419 9.45273 92.9202 8.90398 92.5315 8.50716V8.50718Z"
                  fill="currentColor"
                />
                <path
                  d="M96.4883 6.55718H98.2536V7.80515C98.9158 6.83621 99.8381 6.35176 101.021 6.35181C102.039 6.35181 102.821 6.66928 103.369 7.30422C103.916 7.93929 104.19 8.84793 104.19 10.0301V15.1207H102.4V10.2436C102.4 9.44454 102.258 8.85615 101.973 8.47842C101.688 8.10074 101.242 7.9119 100.635 7.9119C100.104 7.9119 99.6356 8.04872 99.2307 8.32238C98.8255 8.59617 98.508 8.97932 98.2783 9.47183V15.1207H96.4883L96.4883 6.55718Z"
                  fill="currentColor"
                />
                <path
                  d="M116.875 11.8694C116.875 12.9586 116.499 13.8071 115.746 14.4147C114.994 15.0222 113.914 15.3259 112.507 15.3259C111.451 15.3259 110.511 15.1262 109.687 14.7266C108.863 14.3272 108.221 13.7469 107.762 12.9859L109.157 11.8858C109.54 12.466 110.019 12.8971 110.594 13.1789C111.169 13.4609 111.829 13.6018 112.573 13.6018C113.323 13.6018 113.906 13.4594 114.322 13.1747C114.738 12.8902 114.946 12.5043 114.946 12.0171C114.946 11.5957 114.801 11.2468 114.511 10.9703C114.221 10.694 113.728 10.4846 113.033 10.3422L111.309 9.98094C109.196 9.54304 108.139 8.47567 108.139 6.77883C108.139 6.10558 108.315 5.51714 108.665 5.01352C109.015 4.51002 109.512 4.11867 110.155 3.83947C110.798 3.56031 111.552 3.4207 112.417 3.42065C114.338 3.42065 115.775 4.16509 116.727 5.65397L115.315 6.66391C114.976 6.14939 114.572 5.76759 114.104 5.51849C113.636 5.26943 113.068 5.14492 112.401 5.14497C111.662 5.14497 111.088 5.28041 110.681 5.55128C110.273 5.82225 110.069 6.20952 110.069 6.7131C110.069 7.09629 110.202 7.40557 110.467 7.64091C110.732 7.87626 111.196 8.0651 111.859 8.20744L113.583 8.56874C115.778 9.02855 116.875 10.1288 116.875 11.8694Z"
                  fill="currentColor"
                />
                <path
                  d="M118.677 13.1831C118.308 12.5097 118.123 11.7297 118.123 10.843C118.123 9.95083 118.308 9.16809 118.677 8.4948C119.034 7.83483 119.569 7.28851 120.221 6.91833C120.88 6.54065 121.645 6.3518 122.516 6.35181C123.386 6.35181 124.151 6.54065 124.81 6.91833C125.463 7.28862 125.998 7.83491 126.354 8.4948C126.724 9.16805 126.908 9.95079 126.908 10.843C126.908 11.7297 126.724 12.5097 126.354 13.1831C125.998 13.8429 125.463 14.3892 124.81 14.7594C124.151 15.1371 123.386 15.3259 122.516 15.3259C121.651 15.3259 120.887 15.1371 120.225 14.7594C119.571 14.3902 119.034 13.8438 118.677 13.1831ZM125.077 10.843C125.077 9.98377 124.843 9.29408 124.375 8.77396C123.907 8.25393 123.288 7.99394 122.516 7.994C121.744 7.994 121.124 8.25398 120.656 8.77396C120.188 9.29399 119.954 9.98368 119.954 10.843C119.954 11.6969 120.188 12.3839 120.656 12.9039C121.124 13.4239 121.744 13.6839 122.516 13.6839C123.288 13.6839 123.907 13.4239 124.375 12.9039C124.843 12.3839 125.077 11.6969 125.077 10.843Z"
                  fill="currentColor"
                />
                <path
                  d="M135.907 15.1206H134.141V13.8891C133.484 14.847 132.576 15.3259 131.415 15.3259C130.408 15.3259 129.635 15.0084 129.096 14.3735C128.557 13.7385 128.287 12.8299 128.287 11.6475V6.55713H130.077V11.4341C130.077 12.2278 130.217 12.8148 130.496 13.1953C130.775 13.5758 131.213 13.766 131.809 13.7659C132.324 13.7659 132.781 13.6305 133.18 13.3595C133.58 13.0885 133.892 12.7095 134.116 12.2223V6.55713H135.907L135.907 15.1206Z"
                  fill="currentColor"
                />
                <path
                  d="M137.877 6.55733H139.642V7.8709C140.195 6.91311 140.95 6.43417 141.908 6.43408C142.22 6.43408 142.475 6.46146 142.672 6.5162V8.16659C142.403 8.12858 142.131 8.10936 141.859 8.10907C140.786 8.10907 140.055 8.59074 139.667 9.55408V15.1208H137.877L137.877 6.55733Z"
                  fill="currentColor"
                />
                <path
                  d="M143.737 8.49063C144.079 7.83229 144.601 7.28535 145.244 6.9143C145.889 6.53944 146.645 6.35194 147.51 6.35181C149.119 6.35181 150.318 6.98952 151.106 8.26496L149.71 9.20918C149.431 8.78768 149.119 8.47975 148.774 8.2854C148.429 8.09118 148.013 7.99405 147.526 7.994C146.782 7.994 146.18 8.25534 145.72 8.778C145.26 9.30085 145.03 9.98647 145.03 10.8348C145.03 11.727 145.255 12.4249 145.703 12.9285C146.152 13.4321 146.785 13.6839 147.6 13.6839C148.034 13.6874 148.463 13.5845 148.848 13.3841C149.218 13.1962 149.536 12.9215 149.776 12.5836L151.024 13.6839C150.186 14.7786 149.031 15.326 147.559 15.3259C146.678 15.3259 145.91 15.1412 145.256 14.7718C144.609 14.4099 144.081 13.8679 143.737 13.2117C143.378 12.5413 143.199 11.7544 143.199 10.8512C143.199 9.95352 143.378 9.16666 143.737 8.49063Z"
                  fill="currentColor"
                />
                <path
                  d="M156.195 15.3259C155.335 15.3259 154.58 15.1357 153.928 14.7554C153.283 14.3812 152.755 13.8336 152.405 13.1747C152.041 12.5015 151.859 11.7297 151.859 10.8594C151.859 9.97825 152.037 9.19824 152.393 8.5194C152.749 7.84077 153.243 7.30982 153.875 6.92653C154.507 6.54347 155.234 6.3519 156.055 6.35181C156.87 6.35181 157.572 6.54477 158.161 6.9307C158.749 7.31658 159.202 7.85713 159.52 8.55232C159.837 9.24748 159.996 10.063 159.996 10.9989V11.5081H153.698C153.814 12.2088 154.097 12.7602 154.548 13.1625C155 13.5648 155.571 13.7659 156.26 13.766C156.813 13.766 157.289 13.6839 157.689 13.5196C158.088 13.3554 158.463 13.1063 158.814 12.7724L159.799 13.9794C158.819 14.8771 157.618 15.326 156.195 15.3259ZM157.549 8.50718C157.161 8.11027 156.651 7.91184 156.022 7.91189C155.409 7.91189 154.896 8.11439 154.483 8.51941C154.069 8.92464 153.808 9.46931 153.698 10.1534H158.214C158.159 9.45273 157.938 8.90398 157.549 8.50716V8.50718Z"
                  fill="currentColor"
                />
                <path
                  d="M5.26022 3.23511C5.25436 3.23511 5.24854 3.23513 5.24268 3.23516L5.21875 5.21191C5.22423 5.21185 5.22969 5.2118 5.23518 5.2118C6.53629 5.2118 7.54551 6.23768 9.73906 9.93252L9.87278 10.1575L9.88153 10.1722L11.1094 8.32979L11.1009 8.31556C10.812 7.84556 10.5344 7.41312 10.2681 7.01826C9.95934 6.56075 9.66404 6.15204 9.37746 5.78713C7.92635 3.93952 6.71249 3.23511 5.26022 3.23511Z"
                  fill="url(#paint0_linear_627_396207)"
                />
                <path
                  d="M5.24198 3.23516C3.78266 3.24267 2.49251 4.18633 1.56092 5.63032C1.55819 5.63455 1.55546 5.63879 1.55273 5.64302L3.26279 6.57377C3.26556 6.56957 3.26836 6.56535 3.27114 6.56117C3.81514 5.7421 4.49212 5.21969 5.21805 5.21191C5.22353 5.21185 5.229 5.21181 5.23448 5.21181L5.2595 3.23511C5.25364 3.23511 5.24783 3.23513 5.24198 3.23516Z"
                  fill="url(#paint1_linear_627_396207)"
                />
                <path
                  d="M1.56088 5.63037C1.55816 5.6346 1.55543 5.63884 1.5527 5.64307C0.94054 6.596 0.484192 7.76537 0.237567 9.02689C0.236499 9.03235 0.235435 9.03781 0.234375 9.04329L2.15555 9.49659C2.15655 9.49111 2.15756 9.48562 2.15857 9.48015C2.36393 8.37149 2.75488 7.34323 3.26274 6.57382C3.26552 6.56962 3.26831 6.5654 3.2711 6.56122L1.56088 5.63037Z"
                  fill="url(#paint2_linear_627_396207)"
                />
                <path
                  d="M2.15979 9.48011L0.238778 9.02686C0.23771 9.03231 0.236646 9.03778 0.235585 9.04325C0.101104 9.73704 0.0326863 10.442 0.03125 11.1487C0.03125 11.1544 0.03125 11.1601 0.03125 11.1658L2.00149 11.3421C2.00133 11.3364 2.00117 11.3307 2.00103 11.3249C2.00007 11.284 1.99958 11.2424 1.99956 11.2003C2.00054 10.6288 2.05316 10.0586 2.15678 9.49655C2.15776 9.49107 2.15878 9.48558 2.15979 9.48011Z"
                  fill="url(#paint3_linear_627_396207)"
                />
                <path
                  d="M2.06148 11.9568C2.02614 11.7537 2.00611 11.5482 2.00156 11.3421C2.0014 11.3363 2.00124 11.3307 2.0011 11.3249L0.031335 11.1487C0.031335 11.1544 0.031335 11.1601 0.031335 11.1658V11.1669C0.0292535 11.5801 0.0653944 11.9925 0.139296 12.399C0.140327 12.4045 0.14134 12.4099 0.142386 12.4154L2.06448 11.9732C2.06345 11.9678 2.06247 11.9623 2.06148 11.9568Z"
                  fill="url(#paint4_linear_627_396207)"
                />
                <path
                  d="M2.50976 12.9765C2.29536 12.7425 2.14362 12.405 2.06386 11.9732C2.06285 11.9678 2.06187 11.9623 2.06088 11.9568L0.138672 12.399C0.139703 12.4045 0.140716 12.4099 0.141762 12.4154C0.28705 13.1782 0.571996 13.8139 0.980035 14.2949C0.983663 14.2991 0.987305 14.3034 0.990959 14.3077L2.52121 12.9888C2.51738 12.9848 2.51355 12.9807 2.50976 12.9765Z"
                  fill="url(#paint5_linear_627_396207)"
                />
                <path
                  d="M8.20487 7.50854C7.04655 9.28523 6.34486 10.3996 6.34486 10.3996C4.80187 12.8183 4.26806 13.3604 3.409 13.3604C3.05054 13.3604 2.75107 13.2328 2.52164 12.9888C2.51782 12.9848 2.51398 12.9807 2.51019 12.9765L0.980469 14.2949C0.984097 14.2991 0.987738 14.3034 0.991392 14.3077C1.5548 14.9644 2.35009 15.3288 3.33393 15.3288C4.82242 15.3288 5.89296 14.6271 7.79608 11.3004C7.79608 11.3004 8.58943 9.8994 9.1352 8.93436C8.79713 8.38854 8.48948 7.91597 8.20487 7.50854Z"
                  fill="#0082FB"
                />
                <path
                  d="M10.2688 4.7041C10.2649 4.70825 10.261 4.71248 10.2571 4.71664C9.94322 5.05596 9.64935 5.41323 9.37695 5.78663C9.66354 6.15154 9.95939 6.56105 10.2682 7.01855C10.6321 6.45684 10.9718 6.00189 11.3048 5.6532C11.3087 5.64907 11.3126 5.64504 11.3166 5.64094L10.2688 4.7041Z"
                  fill="url(#paint6_linear_627_396207)"
                />
                <path
                  d="M15.8912 4.53007C15.0834 3.71396 14.1202 3.23511 13.0905 3.23511C12.0047 3.23511 11.0914 3.83012 10.2677 4.70423C10.2637 4.70837 10.2598 4.71261 10.2559 4.71677L11.3036 5.65333C11.3075 5.6492 11.3114 5.64517 11.3154 5.64107C11.858 5.0766 12.3832 4.79478 12.9654 4.79478H12.9654C13.592 4.79478 14.1786 5.08975 14.6867 5.60687C14.6906 5.61092 14.6946 5.61494 14.6986 5.61902L15.9032 4.54221C15.8992 4.53815 15.8952 4.53412 15.8912 4.53007Z"
                  fill="#0082FB"
                />
                <path
                  d="M18.2273 10.8885C18.1821 8.26813 17.2651 5.92556 15.904 4.54218C15.9 4.53811 15.896 4.53408 15.892 4.53003L14.6875 5.60684C14.6915 5.61089 14.6954 5.61491 14.6994 5.61899C15.7233 6.67077 16.4256 8.6271 16.4895 10.8879C16.4897 10.8936 16.4898 10.8993 16.49 10.905L18.2276 10.9056C18.2275 10.8999 18.2274 10.8942 18.2273 10.8885Z"
                  fill="url(#paint7_linear_627_396207)"
                />
                <path
                  d="M18.2262 10.9056C18.2261 10.8999 18.226 10.8942 18.2259 10.8885L16.4881 10.8879C16.4883 10.8936 16.4884 10.8993 16.4886 10.905C16.4914 11.0111 16.4928 11.1179 16.4928 11.2253C16.4928 11.8417 16.4007 12.34 16.2135 12.6997C16.2107 12.705 16.2079 12.7104 16.2051 12.7157L17.5007 14.0632C17.504 14.0583 17.5071 14.0535 17.5103 14.0486C17.9807 13.3228 18.2276 12.3145 18.2276 11.0918C18.2276 11.0296 18.2272 10.9675 18.2262 10.9056Z"
                  fill="url(#paint8_linear_627_396207)"
                />
                <path
                  d="M16.2158 12.6997C16.213 12.705 16.2102 12.7104 16.2074 12.7157C16.0453 13.0189 15.814 13.2212 15.5117 13.3096L16.1024 15.1711C16.1806 15.1445 16.2567 15.1147 16.3308 15.0816C16.353 15.0718 16.3749 15.0616 16.3967 15.0512C16.4092 15.0452 16.4217 15.0391 16.4341 15.0329C16.8281 14.8341 17.1672 14.5417 17.4217 14.1812C17.438 14.1587 17.4541 14.1359 17.47 14.1127C17.4811 14.0963 17.4921 14.0798 17.5031 14.0632C17.5063 14.0583 17.5094 14.0534 17.5126 14.0485L16.2158 12.6997Z"
                  fill="url(#paint9_linear_627_396207)"
                />
                <path
                  d="M15.1349 13.3603C14.9481 13.3648 14.7626 13.3286 14.5911 13.2544L13.9863 15.1602C14.3262 15.2763 14.6889 15.3287 15.0932 15.3287C15.4415 15.3319 15.7878 15.2768 16.1179 15.1654L15.5273 13.3046C15.4001 13.3427 15.2678 13.3615 15.1349 13.3603Z"
                  fill="url(#paint10_linear_627_396207)"
                />
                <path
                  d="M13.9243 12.7085C13.9206 12.7042 13.9168 12.6999 13.9131 12.6956L12.5215 14.1429C12.5254 14.147 12.5293 14.1512 12.5332 14.1553C13.0167 14.6706 13.4784 14.9903 14.0021 15.1657L14.6064 13.2613C14.3857 13.1665 14.1723 12.9947 13.9243 12.7085Z"
                  fill="url(#paint11_linear_627_396207)"
                />
                <path
                  d="M13.9142 12.6956C13.4968 12.2101 12.9804 11.4019 12.1682 10.095L11.1097 8.32966L11.1012 8.31543L9.87305 10.1573L9.8818 10.172L10.6318 11.4337C11.3588 12.6503 11.9511 13.5304 12.5226 14.1428C12.5265 14.147 12.5304 14.1512 12.5343 14.1553L13.9254 12.7085C13.9217 12.7042 13.918 12.6999 13.9142 12.6956Z"
                  fill="url(#paint12_linear_627_396207)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_627_396207"
                    x1="10.2933"
                    y1="9.42293"
                    x2="6.21654"
                    y2="4.08099"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0006" stopColor="#0867DF" />
                    <stop offset="0.4539" stopColor="#0668E1" />
                    <stop offset="0.8591" stopColor="#0064E0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_627_396207"
                    x1="2.35598"
                    y1="5.96246"
                    x2="5.15084"
                    y2="3.84063"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.1323" stopColor="#0064DF" />
                    <stop offset="0.9988" stopColor="#0064E0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_627_396207"
                    x1="1.17132"
                    y1="9.07623"
                    x2="2.29244"
                    y2="6.25404"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0147" stopColor="#0072EC" />
                    <stop offset="0.6881" stopColor="#0064DF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_627_396207"
                    x1="1.02028"
                    y1="11.115"
                    x2="1.15"
                    y2="9.39138"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0731" stopColor="#007CF6" />
                    <stop offset="0.9943" stopColor="#0072EC" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_627_396207"
                    x1="1.0917"
                    y1="12.0512"
                    x2="0.998912"
                    y2="11.3606"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0731" stopColor="#007FF9" />
                    <stop offset="1" stopColor="#007CF6" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_627_396207"
                    x1="1.03663"
                    y1="12.2326"
                    x2="1.61491"
                    y2="13.4591"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0731" stopColor="#007FF9" />
                    <stop offset="1" stopColor="#0082FB" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_627_396207"
                    x1="9.92449"
                    y1="6.29781"
                    x2="10.689"
                    y2="5.24046"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2799" stopColor="#007FF8" />
                    <stop offset="0.9141" stopColor="#0082FB" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_627_396207"
                    x1="15.7367"
                    y1="4.92752"
                    x2="17.3361"
                    y2="10.8108"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0082FB" />
                    <stop offset="0.9995" stopColor="#0081FA" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_627_396207"
                    x1="17.7208"
                    y1="11.0359"
                    x2="16.7086"
                    y2="13.0813"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0619" stopColor="#0081FA" />
                    <stop offset="1" stopColor="#0080F9" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_627_396207"
                    x1="15.9065"
                    y1="14.1657"
                    x2="16.8526"
                    y2="13.5213"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#027AF3" />
                    <stop offset="1" stopColor="#0080F9" />
                  </linearGradient>
                  <linearGradient
                    id="paint10_linear_627_396207"
                    x1="14.4218"
                    y1="14.2915"
                    x2="15.7366"
                    y2="14.2915"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0377EF" />
                    <stop offset="0.9994" stopColor="#0279F1" />
                  </linearGradient>
                  <linearGradient
                    id="paint11_linear_627_396207"
                    x1="13.2783"
                    y1="13.5675"
                    x2="14.2235"
                    y2="14.1236"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0019" stopColor="#0471E9" />
                    <stop offset="1" stopColor="#0377EF" />
                  </linearGradient>
                  <linearGradient
                    id="paint12_linear_627_396207"
                    x1="10.3961"
                    y1="9.46696"
                    x2="13.424"
                    y2="13.274"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2765" stopColor="#0867DF" />
                    <stop offset="1" stopColor="#0471E9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </ExternalLink>

          <div
            className="text-xs text-left rtl:text-right mt-2 pe-0.5"
            dir="ltr"
          >
            &copy;{new Date().getFullYear()}
          </div>
        </div>
        <div className="flex flex-col">
          <FooterLink href="/learn" isHeader={true}>
            Learn React
          </FooterLink>
          <FooterLink href="/learn/">Quick Start</FooterLink>
          <FooterLink href="/learn/installation">Installation</FooterLink>
          <FooterLink href="/learn/describing-the-ui">
            Describing the UI
          </FooterLink>
          <FooterLink href="/learn/adding-interactivity">
            Adding Interactivity
          </FooterLink>
          <FooterLink href="/learn/managing-state">Managing State</FooterLink>
          <FooterLink href="/learn/escape-hatches">Escape Hatches</FooterLink>
        </div>
        <div className="flex flex-col">
          <FooterLink href="/reference/react" isHeader={true}>
            API Reference
          </FooterLink>
          <FooterLink href="/reference/react">React APIs</FooterLink>
          <FooterLink href="/reference/react-dom">React DOM APIs</FooterLink>
        </div>
        <div className="md:col-start-2 xl:col-start-4 flex flex-col">
          <FooterLink href="/community" isHeader={true}>
            Community
          </FooterLink>
          <FooterLink href="https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md">
            Code of Conduct
          </FooterLink>
          <FooterLink href="/community/team">Meet the Team</FooterLink>
          <FooterLink href="/community/docs-contributors">
            Docs Contributors
          </FooterLink>
          <FooterLink href="/community/acknowledgements">
            Acknowledgements
          </FooterLink>
        </div>
        <div className="flex flex-col">
          <FooterLink isHeader={true}>More</FooterLink>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="https://reactnative.dev/">React Native</FooterLink>
          <FooterLink href="https://opensource.facebook.com/legal/privacy">
            Privacy
          </FooterLink>
          <FooterLink href="https://opensource.fb.com/legal/terms/">
            Terms
          </FooterLink>
          <div className="flex flex-row mt-8 gap-x-2">
            <ExternalLink
              aria-label="React on Facebook"
              href="https://www.facebook.com/react"
              className={socialLinkClasses}
            >
              <IconFacebookCircle />
            </ExternalLink>
            <ExternalLink
              aria-label="React on Twitter"
              href="https://twitter.com/reactjs"
              className={socialLinkClasses}
            >
              <IconTwitter />
            </ExternalLink>
            <ExternalLink
              aria-label="React on Github"
              href="https://github.com/facebook/react"
              className={socialLinkClasses}
            >
              <IconGitHub />
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  isHeader = false,
}: {
  href?: string;
  children: React.ReactNode;
  isHeader?: boolean;
}) {
  const classes = cn("border-b inline-block border-transparent", {
    "text-sm text-primary dark:text-primary-dark": !isHeader,
    "text-md text-secondary dark:text-secondary-dark my-2 font-bold": isHeader,
    "hover:border-gray-10": href,
  });

  if (!href) {
    return <div className={classes}>{children}</div>;
  }

  if (href.startsWith("https://")) {
    return (
      <div>
        <ExternalLink href={href} className={classes}>
          {children}
        </ExternalLink>
      </div>
    );
  }

  return (
    <div>
      <NextLink href={href} className={classes}>
        {children}
      </NextLink>
    </div>
  );
}
