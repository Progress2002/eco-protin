import { Box, Flex, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProductCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Box data-aos="fade-up" className="bg-white  rounded-[3rem]">
      <Box className="overflow-hidden rounded-t-[3rem]">
        <img
        src={imageUrl}
        alt={title}
        className="w-full !h-fit object-cover rounded-[3rem] hover:scale-105"
      />
      </Box>
      <Box className="p-5 md:px-10 relative bottom-5">
        <Text as="h2" className="!text-2xl !font-semibold !mb-5 text-[#196432]">
          {title}
        </Text>
        <Text
          maxW="4xl"
          className="text-base text-[#555555] mt-2 whitespace-pre-line ">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export const ServiceCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <Flex
      data-aos="fade-up"
      data-aos-delay="300"
      direction="column-reverse"
      className="bg-white rounded-[2rem] !justify-between h-full w-full  hover:shadow-lg hover:scale-95">
      <Box className="!rounded-b-[2rem]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full !h-fit object-contain  !rounded-b-[2rem]"
        />
      </Box>
      <Box className="p-5 md:p-10">
        <Text as="h2" className="!text-2xl !font-semibold !mb-5 text-[#196432]">
          {title}
        </Text>
        <Text
          maxW="lg"
          className="text-base text-[#555555] mt-2 whitespace-pre-line ">
          <ReactMarkdown>{description}</ReactMarkdown>
        </Text>
      </Box>
    </Flex>
  );
};
