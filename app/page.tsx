"use client";
import Image from "next/image";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import AppHeader from "./_components/AppHeader";

export default function Home() {
  

  return (
    <div>
     <AppHeader/>
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
