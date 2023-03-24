import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";
import { AboutUs } from "../components/AboutUs";


export function Home() {

  return (
    <>
      <header className="h-full min-h-screen w-screen bg-white pt-24">
        <div className="container mx-auto grid items-center text-center">
          <div className="mx-auto mb-8 inline-flex w-max items-center rounded-full bg-blue-50 py-1 pl-1 pr-3">
            <Typography
              variant="small"
              className="mr-3 rounded-full bg-white px-2.5 py-0.5 font-medium text-blue-500"
            >
              <span className="changa text-blue-600">
                Let's
              </span>
            </Typography>
            <Typography
              color="blue"
              variant="small"
              className="!flex !items-center !font-semibold uppercase"
            >
              <Typewriter
                options={{
                  strings: [
                    "রক্ত দিন, জীবন বাঁচান।",
                    "donate blood save life.",
                    "रक्तदान करें, जीवन रक्षक बनें",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <ArrowSmallRightIcon className="ml-1.5 h-4 w-4" strokeWidth={3} />
            </Typography>
          </div>
        </div>
        <div className="mx-0 pb-0 lg:container lg:mx-auto">
          <img
            src="/assets/images/blood/bloods.png"
            alt=""
            className="h-96 w-full object-cover md:h-[34rem] lg:h-[50rem] lg:rounded-xl"
          />
        </div>
      </header>
      <AboutUs />
    </>
  );
}

export default Home;
