import { Typography, Input, Button, Tooltip } from "@material-tailwind/react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsTiktok } from "react-icons/bs";
const currentYear = new Date().getFullYear();

export function FooterOne() {
    return (
        <footer className="mt-4 px-8 pt-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-end justify-center gap-8 md:justify-between">
                    <div className="text-center md:text-left">
                        <Typography variant="h4" className="mb-6 uppercase">
                            <span className="text-black changa">u</span><span className="text-red-600 changa">blood</span>
                        </Typography>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <Tooltip content="Like">
                                <BsFacebook className="h-6 w-6 hover:text-blue-700 cursor-pointer" />
                            </Tooltip>
                            <Tooltip content="Follow">
                                <BsTwitter className="h-6 w-6  hover:text-cyan-500 cursor-pointer" />
                            </Tooltip>
                            <Tooltip content="Follow">
                                <BsInstagram className="h-6 w-6  hover:text-[#c026d3] cursor-pointer" />
                            </Tooltip>
                            <Tooltip content="Follow">
                                <BsTiktok className="h-6 w-6  hover:text-pink-400 cursor-pointer" />
                            </Tooltip>
                            <Tooltip content="Follow">
                                <BsYoutube className="h-6 w-6  hover:text-red-500 cursor-pointer" />
                            </Tooltip>
                        </div>
                    </div>
                    <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                            Stay up to date
                        </Typography>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Input label="Enter your email" />
                            <Button>subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
                    <Typography color="gray" className="text-center font-normal">
                        &copy; {currentYear} <span className="text-black changa uppercase">u</span><span className="text-red-600 changa uppercase">blood</span>&trade;, All rights reserved.
                    </Typography>

                    <Typography color="gray" className="text-center font-normal">
                        Developed By <span className="text-orange-900">Sanu Islam</span>
                    </Typography>
                </div>
            </div>
        </footer>
    );
}

export default FooterOne;