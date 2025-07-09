import { Box, Button, Flex } from "@chakra-ui/react";
import LeftDesktop from "../assets/images/Left - desktop.webp";
import RightDesktop from "../assets/images/Right - dektop.webp";
import LeftMobile from "../assets/images/Left-mobile.webp";
import RightMobile from "../assets/images/Right-mobile.webp";
import { FaPhone } from "react-icons/fa6";
import Logo from "../assets/images/logo.webp";

export const ImageDisplay = () => {
  return (
    <Flex align="baseline" gap={{ base: 2, md: 4 }} height="fit-content">
      {/* Left images */}
      <Box
        display={{ base: "none", md: "block" }}
        className="w-[250px] lg:w-[500px] h-fit">
        <img
          src={LeftDesktop}
          alt="Left Desktop"
          className="w-full h-full object-cover rounded-lg"
        />
      </Box>
      <Box display={{ base: "block", md: "none" }} className="w-[120px] h-fit">
        <img
          src={LeftMobile}
          alt="Left Mobile"
          className="w-full h-full object-cover rounded-lg"
        />
      </Box>

      <Box
        rounded="xl"
        w={{ base: "80px", md: "200px" }}
        p={2}
        bg="#0A5914"
        height="fit-content"
        className="relative bottom-5 space-y-3">
        <Box bg="#A6CE3A" rounded="2xl" className="p-2 rounded-2xl">
          <img
            src={Logo}
            alt="Eco-protin Logo"
            className="w-15 md:w-20 h-20 mx-auto"
          />
        </Box>
        <Button
          isDisabled={true}
          display={{ base: "none", md: "block" }}
          rounded="2xl"
          className="!text-xs !bg-[#0A5021]  delay-100 transition-colors !text-white w-full">
          Get in Touch
        </Button>
        <Button
          isDisabled={true}
          rounded="2xl"
          className="!text-sm !bg-[#0A5021]  delay-100 transition-colors !text-white w-full !flex !justify-center md:!hidden">
          <FaPhone size={20} className="text-white block" />
        </Button>
      </Box>

      {/* Right Images */}
      <Box
        display={{ base: "none", md: "block" }}
        className="w-[250px] lg:w-[500px]  h-fit">
        <img
          src={RightDesktop}
          alt="Right Desktop"
          className="w-full h-full object-cover rounded-lg"
        />
      </Box>
      <Box display={{ base: "block", md: "none" }} className="w-[120px] h-fit">
        <img
          src={RightMobile}
          alt="Right Mobile"
          className="w-full h-full object-cover rounded-lg"
        />
      </Box>
    </Flex>
  );
};
