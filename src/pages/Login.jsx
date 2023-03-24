import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Checkbox
} from "@material-tailwind/react";
import {
    LockClosedIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";






export default function Login() {
    const [type, setType] = React.useState("login");

    return (
        <div className="h-full min-h-screen w-screen bg-white pt-24">
            <div className="flex justify-center mt-10">
                <Card className="w-full max-w-[24rem]">
                    <CardHeader
                        color="red"
                        floated={false}
                        shadow={false}
                        className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    >
                        <Link to="/" className="mb-4 rounded-full shadow-lg border border-gray-50 bg-gray-50  p-2 uppercase">
                            <span className="text-black changa text-xl font-bold">u</span><span className="text-red-600 changa text-xl font-bold">blood</span>
                        </Link>
                        <Typography variant="h4" color="white">
                            {type === "login" ? "Login" : "Registration"}
                        </Typography>
                    </CardHeader>
                    <CardBody>
                        <Tabs value={type} className="overflow-visible">
                            <TabsHeader className="relative z-0 ">
                                <Tab value="login" onClick={() => setType("login")}>
                                    Login
                                </Tab>
                                <Tab value="signup" onClick={() => setType("signup")}>
                                    Registration
                                </Tab>
                            </TabsHeader>
                            <TabsBody
                                className="!overflow-x-hidden !overflow-y-hidden"
                                animate={{
                                    initial: {
                                        x: type ? 400 : -400,
                                    },
                                    mount: {
                                        x: 0,
                                    },
                                    unmount: {
                                        x: type ? 400 : -400,
                                    },
                                }}
                            >
                                <TabPanel value="login" className="p-0">
                                    <form className="mt-12 flex flex-col gap-4">
                                        <div className="space-y-2">
                                            <Input type="email" label="Email Address" />
                                            <Input type="password" label="Password" />
                                        </div>
                                        <Checkbox
                                            label={
                                                (
                                                    <Typography
                                                        variant="small"
                                                        color="gray"
                                                        className="flex items-center font-normal"
                                                    >
                                                        I agree the
                                                        <Link
                                                            to="/"
                                                            className="font-medium transition-colors hover:text-blue-500"
                                                        >
                                                            &nbsp;Terms and Conditions
                                                        </Link>
                                                    </Typography>
                                                )
                                            }
                                            containerProps={{ className: "-ml-2.5" }}
                                        />
                                        <Button color="red" size="md">Login Now</Button>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                                        >
                                            <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Having trauble into login?
                                        </Typography>
                                    </form>
                                </TabPanel>
                                <TabPanel value="signup" className="p-0">
                                    <form className="mt-12 flex flex-col gap-4">
                                        <div className="space-y-2">
                                            <Input type="text" label="Full Name" />
                                            <Input type="email" label="Email Address" />
                                            <Input type="tel" label="Mobile" />
                                            <Input type="password" label="Password" />
                                        </div>

                                        <Button color="red" size="md">Create Account</Button>
                                    </form>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}