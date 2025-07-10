import Container from "../ui/container";
import Logo from "../../assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import type { JSX } from "react";

interface Socials {
  icon: JSX.Element;
  link: string;
}

const Footer = () => {
  const Socials: Socials[] = [
    {
      icon: <MdOutlineFacebook size={15} />,
      link: "https://www.facebook.com/ecoprotin",
    },
    {
      icon: <FaXTwitter size={15} />,
      link: "https://twitter.com/ecoprotin",
    },
    {
      icon: <FaLinkedinIn size={15} />,
      link: "https://www.linkedin.com/company/ecoprotin",
    },
    {
      icon: <AiFillInstagram size={15} />,
      link: "https://www.instagram.com/ecoprotin",
    },
  ];

  return (
    <Container>
      <footer data-aos="fade-up" className="!bg-[#D0EAC7]  p-10 rounded-3xl my-10">
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Eco-protin Logo" className="!h-13 !w- mr-2" />
        </NavLink>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={{ base: 8, md: 5 }}
          className="my-10">
          <Text fontSize="xs" color="#616060" w={{ base: "100%", md: "190px" }}>
            Eco Protin turns organic waste into affordable, eco-friendly animal
            feed using BSF technology—cutting farmer costs and promoting
            sustainable agriculture in Africa.
          </Text>
          <Box>
            <Text as="h3" color="#0E6A10" fontWeight="semibold" mb={3}>
              Products
            </Text>
            <ul className="text-xs space-y-4 font-medium text-gray-700">
              <li>ENTOPAC</li>
              <li>ENTO+</li>
              <li>ENTOFEED</li>
              <li>ENTOFERT</li>
            </ul>
          </Box>

          <Box>
            <Text as="h3" color="#0E6A10" fontWeight="semibold" mb={3}>
              Products
            </Text>
            <ul className="text-xs space-y-4 font-medium text-gray-700">
              <li>Privacy Policy</li>
              <li>Terms & Conditions+</li>
            </ul>
          </Box>

          <Box>
            <Text as="h3" color="#0E6A10" fontWeight="semibold" mb={3}>
              Products
            </Text>
            <ul className="text-xs space-y-4 font-medium text-gray-700">
              <li>info@ecoprotin.com</li>
              <li>+233 55063 4444+</li>
              <li>Accra, Ghana</li>
            </ul>
          </Box>
        </Flex>

        <div className="w-full h-[1px] bg-black mb-5" />

        <Flex
          justify="space-between"
          align="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          className="text-xs text-gray-700">
          <Text fontWeight="medium">
            &copy; Eco Protin 2025 All Rights Reserved.
          </Text>
          <Flex gap={4} className="text-gray-700">
            {Socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:!text-[#0E6A10] hover:!border-[#0E6A10] hover:scale-105 transition-colors !border !border-gray-900 p-1 rounded-full flex items-center justify-center">
                {social.icon}
              </a>
            ))}
          </Flex>
        </Flex>
        <Text className="text-center text-sm text-gray-600">Website Design: <strong>LbH</strong></Text>
      </footer>
    </Container>
  );
};

export default Footer;
