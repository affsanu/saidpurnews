import React from "react";
import {
    Navbar,
    MobileNav,
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavItem({ children }) {
    return (
        <li>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="gray"
                className="font-normal transition-colors hover:text-gray-900"
            >
                {children}
            </Typography>
        </li>
    );
}

const NavbarT = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);
    return (
        <Navbar
            className="fixed z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
            shadow={false}
            fullWidth
        >
            <div className="container mx-auto flex items-center">
                <Link to="/">
                    <Typography color="blue" className="!mb-0 uppercase text-xl">
                        <span className="font-extrabold text-black changa">U</span>
                        <span className="font-bold text-red-600 changa">Blood</span>
                    </Typography>
                </Link>
                <ul className="ml-10 hidden items-center gap-6 lg:flex uppercase">
                    <NavItem>Find A Donor</NavItem>
                    <NavItem>Gallery</NavItem>
                    <NavItem>Contact</NavItem>
                    <NavItem>About</NavItem>
                </ul>
                <div className="ml-auto hidden gap-2 lg:flex">
                    <Link to="/login">
                        <Button color="red" size="sm">
                            Login
                        </Button>
                    </Link>
                </div>
                <IconButton
                    size="sm"
                    variant="text"
                    color="blue-gray"
                    onClick={handleOpen}
                    className="ml-auto inline-block lg:hidden"
                >
                    {open ? (
                        <XMarkIcon strokeWidth={2} color="red" className="h-6 w-6" />
                    ) : (
                        <Bars3Icon strokeWidth={2} color="red" className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <MobileNav open={open}>
                <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
                    <ul className="flex flex-col gap-4 uppercase">
                        <NavItem>Find A Donor</NavItem>
                        <NavItem>Gallery</NavItem>
                        <NavItem>Contact</NavItem>
                        <NavItem>About</NavItem>
                    </ul>
                    <div className="mt-8 mb-4">
                        <Link to="/login">
                            <Button color="red" size="sm" fullWidth>
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    )
}

export default NavbarT