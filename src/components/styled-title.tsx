import { Box, Text } from "@chakra-ui/react";
import BigLeaf from "../assets/images/big-leaf.png";
import SmallLEaf from "../assets/images/small-leaf.png";

interface StyledTitleProps {
  title: string;
}

export const StyledTitle: React.FC<StyledTitleProps> = ({ title }) => {
  return (
    <Box className="relative w-fit px-10 mb-10">
      <img
        src={BigLeaf}
        alt="Big Leaf"
        className="absolute -top-8 right-0 w-[40px] h-20"
      />
      <img
        src={SmallLEaf}
        alt="Small Leaf"
        className="absolute -bottom-5 left-0 w-[16px] h-10"
      />
      <Text
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        className="text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-[#BD2128] to-[#196432] w-fit !font-semibold">
        {title}
      </Text>
    </Box>
  );
};
