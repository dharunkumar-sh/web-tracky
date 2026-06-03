"use client";
import Image from "next/image";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <header className="flex  flex-wrap sm:justify-start  sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-2 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav
          className="relative p-2 w-full mx-auto px-2 sm:flex sm:items-center sm:justify-between sm:px-4 lg:px-6"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <Image
                src={"/logo2.png"}
                alt="logo"
                width={75}
                height={75}
                className="h-8 w-8"
              />
              <h2 className="font-medium text-xl">WebTracky</h2>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7 cursor-pointer">
              {/* Clerk Authentication  */}
              {!user ? (
                <SignInButton
                  mode="modal"
                  signUpForceRedirectUrl={"/dashboard"}
                >
                  <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 text-base">
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Get Started
                  </div>
                </SignInButton>
              ) : (
                <UserButton />
              )}
            </div>
          </div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-1 before:transform before:-translate-x-1/2">
        <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-4xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Smart Website Analytics
              <br />
              <span className="text-primary">
                That Actually Grows Your Business
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-4xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Track visitors, conversions, heatmaps, and funnels in real-time.
              Get AI-powered insights and actionable data to make smarter
              decisions faster.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-linear-to-tl bg-primary hover:bg-primary/90 border border-transparent cursor-pointer text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              href="/dashboard"
            >
              Get started
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Visitor Tracking
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Track every visitor in real-time with session replay, geographic
                data, and user behavior patterns
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M2 12h20" />
                <path d="m19 5-7 7-7-7M5 19l7-7 7 7" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Conversions & Funnels
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Visualize your conversion funnels, identify drop-off points, and
                optimize your user journey
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M3 9h6M15 3v6M3 15h6" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Heatmaps & Session Replay
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                See exactly where users click, scroll, and move. Replay sessions
                to understand user interactions
              </p>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg
                className="shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.59 0h1.42a2 2 0 0 1 1.94 2.5l-.5 2a2 2 0 0 0 1.94 2.5h4.1a2 2 0 0 1 1.94 2.5l-1 5a2 2 0 0 1-1.94 1.5H7M6 13v6a2 2 0 0 0 2 2h10" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                AI Insights & Revenue
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Get AI-powered recommendations and track revenue metrics to
                maximize ROI and business growth
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
