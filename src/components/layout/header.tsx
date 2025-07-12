import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { ROUTES } from "@/constant";
import Container from "../ui/container";
import Logo from "../../assets/images/logo.webp";
import { IoMenu } from "react-icons/io5";
import MobileDrawer from "./drawer";
import { Link } from "react-scroll";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false); // Scroll down
      } else {
        setShowHeader(true); // Scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyles = {
    active:
      "!text-[#0E6A10] font-semibold text-sm p-2 !border-b-2 !border-b-[#0E6A10] transition-colors",
    inactive:
      "!text-gray-700 text-sm p-2 font-medium hover:cursor-pointer hover:!text-[#0E6A10] transition-colors",
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 h-20 bg-white ${
        showHeader ? "translate-y-0" : "-translate-y-full "
      }`}>
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <Container className="h-full flex items-center w-full  !border-b-2  border-b-gray-200">
        <Flex justify="space-between" w="full" align="center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center">
            <img
              src={Logo}
              alt="Eco-protin Logo"
              className="!h-13 !w- mr-2 cursor-pointer"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {ROUTES.map((route) => (
                <li key={route.path} className="p-3">
                  <Link
                    to={route.path}
                    smooth={true}
                    duration={1000}
                    className={linkStyles.inactive}>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            colorScheme="gray"
            variant="unstyled"
            rounded="full"
            display={{ base: "block", md: "none" }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Toggle menu">
            <IoMenu size={30} />
          </Button>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
