import Container from "@/components/ui/container";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { ImageDisplay } from "@/components/home-hero-image-section";
import MissionImg from "../assets/images/mission.webp";
import Videoplayer from "../assets/images/videoplayer.png";
import { StyledTitle } from "@/components/styled-title";
import ChallengeImg from "../assets/images/challenge.webp";
import { ProductCard, ServiceCard } from "@/components/custom-cards";
import { PRODUCTS, SERVICES } from "@/constant";
import FertilizerImg from "../assets/images/Fertilizer.webp";
import Waste4CashImg from "../assets/images/Waste4Cash.webp";
import BlogImg from "../assets/images/Blog.webp";
import SDGBadge1 from "../assets/images/SDG Badge-1.webp";
import SDGBadge2 from "../assets/images/SDG Badge-2.webp";
import SDGBadge3 from "../assets/images/SDG Badge-13.webp";

const HomePage = () => {
  return (
    <Box>
      {/* Hero section */}
      <Container className=" relative flex justify-center !mt-35 mb-20">
        <Flex as="section" direction="column" alignItems="center">
          <Heading
            size={{ base: "xl", md: "xl" }}
            maxW={{ md: "3xl" }}
            className=" text-[#0E6A10] !leading-tight text-center ">
            Powering Sustainable Animal Nutrition through Innovation and Nature
          </Heading>
          <Text className="text-center font-montserrat font-medium md:text-sm text-gray-400 !my-5 md:max-w-2xl">
            We transform organic waste into high-protein, eco-friendly feed for
            poultry, fish, and pigs, thus, creating climate-smart value chains
            and sustainable farming systems
          </Text>
          <Button
            rounded="full"
            fontSize="xs"
            px={5}
            className="!bg-[#0A5914] hover:!bg-[#0E6A10] delay-100 transition-colors !text-white "
            style={{
              boxShadow: "0 10px 20px #0A5914",
            }}>
            Discover Our Products
          </Button>

          {/* Image display */}
          <ImageDisplay />
        </Flex>
      </Container>
      <Divider />

      {/* Mission section */}
      <Box as="section" my={10}>
        <Container>
          <Box bg="#0A5914" rounded="3xl" p={{ base: 5, md: 10 }}>
            <Text
              as="h2"
              mb={10}
              color="white"
              fontWeight="semibold"
              fontSize={25}>
              Our Mission
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              gap={5}>
              <Box>
                <Text maxW="xl" className=" md:text-sm text-gray-200 !mb-5">
                  At Eco Protin Feed, our mission is to redefine animal
                  nutrition through climate-smart innovation. We create
                  affordable, and sustainable insect-based feed that empowers
                  farmers, reduces production costs, and promotes circular,
                  environmentally responsible agriculture.
                </Text>
                <Text maxW="xl" className="md:text-sm text-gray-200">
                  FEED stands for:
                  <ul className="list-disc !pl-5 !text-sm">
                    <li>Fostering sustainable animal nutrition</li>
                    <li>Empowering farmers with affordable solutions</li>
                    <li>Enhancing food security through innovation</li>
                    <li>Driving climate-smart agriculture practices</li>
                  </ul>
                </Text>
              </Box>
              <Flex
                justify="center"
                alignItems="center"
                className="mt-10 md:mt-0">
                <Box className="h-fit  w-[200px] md:h-[250px] md:w-[300px]">
                  <img
                    src={MissionImg}
                    alt="Missions abbreviation"
                    className="w-full h-full object-contain"
                  />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>

      {/* Video section */}
      <Container>
        <Box my={20}>
          <img
            src={Videoplayer}
            alt="Video player"
            className="w-full md:!h-[400px]"
          />
        </Box>
      </Container>

      {/* Challenge section */}
      <Container>
        <Box as="section" my={10}>
          <StyledTitle title="The Challenge" />
          <Text className="text-lg text-[#616060]">
            Across Ghana and Africa, livestock and aquaculture farmers face
            steep feed costs; up to 80% of total production, which hinders their
            ability to compete with imports. Simultaneously, 5000 tons of
            organic waste are generated daily,ending up in landfills, which
            makes them an environmental nuisance, which also leads to an
            increase in carbon emeissions and breeds pests and diseases.
          </Text>
          <br />
          <Text className="text-lg text-[#616060]">
            At Eco Protin Ltd we close this gap by employing a circular econpmy
            model which harnesses organic waste, insect technology(bsf) and IoT
            into high-impact,affordable circular feed products targeted at
            poultry, aqaculture , and pig farmers .Our organic fertilzer,
            obtained as a by-product of our production process regenerate soil,
            promote organic farming and helps reduce pesticide usage. Our key
            differentiator is the ability to provide a superior product at a
            lesser cost which enables a fair price to the farmer and consumer,
            whilst our climate and nature-positive production system also
            ensures sustainable use of resources that minimize environmental
            pollution, and maintain or increase bio-diversity
          </Text>
          <Box className="mt-10">
            <img
              src={ChallengeImg}
              alt="Challenge"
              className="w-full h-[400px] object-cover"
            />
          </Box>
        </Box>
      </Container>

      {/* Product section */}
      <Container>
        <Box as="section" my={20}>
          <StyledTitle title="Our Products" />
          <Text className="text-lg text-[#616060]">
            Sustainable insect-based innovations designed for productive farms
            and a healthy planet.
          </Text>
          <Text className="text-lg font-semibold !mt-5">
            Insect-Based Animal Feed Solutions
          </Text>

          <Box className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-5">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))}
          </Box>
          <ProductCard
            title={PRODUCTS[4].title}
            description={PRODUCTS[4].description}
            imageUrl={PRODUCTS[4].imageUrl}
          />
        </Box>
        <Text className="text-lg font-semibold !mb-10">Organic Fertilizer</Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={10}
          className="mb-10 bg-white p-3 rounded-4xl">
          <Box className="w-full md:w-1/2">
            <img
              src={FertilizerImg}
              alt="Organic Fertilizer"
              className="w-full h-full object-cover rounded-lg"
            />
          </Box>
          <Flex
            direction="column"
            justify="space-between"
            className="w-full md:w-1/2 py-10">
            <Box>
              <Text
                as="h2"
                className="!text-2xl !font-semibold !mb-5 text-[#196432]">
                ENTOFERT
              </Text>
              <Text maxW="lg" className="text-lg text-[#616060]">
                Our nutrient-rich frass by-product enhances soil microbiology
                and plant immunity. Ideal for organic and regenerative farming
                systems, reducing the need for chemical fertilizers.
              </Text>
            </Box>
            <Text className="text-sm font-medium !mt-5">Learn more</Text>
          </Flex>
        </Flex>
      </Container>

      {/* Service section */}
      <Container>
        <Box as="section" my={20}>
          <StyledTitle title="Our Services" />
          <Text maxW="4xl" className="text-lg text-[#616060]">
            At Eco Protin, we are committed to transforming agriculture through
            innovative, sustainable solutions. Our services are designed to
            empower farmers, enhance productivity, and promote food security
            across West Africa.
          </Text>
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 mt-10">
            {SERVICES.map((service, index) => (
              <Box
                key={index}
                className={index === 3 ? "md:col-span-2 " : "col-span-1"}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Project and Collaboration section */}
      <Container>
        <Box as="section" my={20}>
          <StyledTitle title="Projects and Collaborations" />
          <Text maxW="4xl" className="text-lg text-[#616060]">
            We work across the value chain with waste aggregators, farmer
            cooperatives, and research institutions to expand climate-positive
            impact.
          </Text>

          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            gap={10}
            mt={10}>
            <Box className="w-full md:w-1/2">
              <Text
                as="h3"
                className="!text-xl !font-semibold text-[#616060] !mb-5">
                Waste4Cash
              </Text>
              <Text className="text-base text-[#616060] mt-2">
                According to ACDI/VOCA, women make up about 70% of the labor
                force in the poultry industry and play a vital role as the
                principal guarantors of nutrition, food safety, and quality at
                both household and community levels. To supplement their income
                and help reduce the carbon footprint of the poultry sector, our
                Waste4Cash program targets women-led poultry farms and youth
                across the poultry value chain. Through this initiative,
                participants actively engage in the aggregation and valorization
                of poultry waste, turning waste into economic
                opportunity-earning no less than $100 each month as part of our
                shared commitment to environmental sustainability and inclusive
                growth.
              </Text>
            </Box>
            <Box className="w-full md:w-1/2 h-[300px] rounded-4xl">
              <img
                src={Waste4CashImg}
                alt="Waste4Cash Project"
                className="!w-full !h-full object-cover rounded-4xl"
              />
            </Box>
          </Flex>
          <Divider className="!my-10" />
          <Box>
            <Text
              as="h3"
              className="!text-xl !font-semibold text-[#616060] !mb-5">
              Farmer Feed Hubs:
            </Text>
            <Text maxW="4xl" className="text-base text-[#616060] mt-2">
              These are decentralized, community-based access points where local
              livestock and fish farmers receive affordable BSF feed and
              ENTOFERT. The hubs also offer training, demo plots, and farmer
              support services to promote adoption of climate-smart farming.
            </Text>
          </Box>
          <Divider className="!my-10" />
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            gap={10}
            mt={10}>
            <Box className="w-full md:w-1/2">
              <Text
                as="h3"
                className="!text-xl !font-semibold text-[#616060] !mb-5">
                Blog
              </Text>
              <Text maxW="xl" className="md:text-lg text-[#616060]">
                Stories and insights from the frontlines of circular
                agriculture.
                <ul className="list-disc !pl-5 !text-base">
                  <li> Climate-smart farming</li>
                  <li>BSF rearing techniques</li>
                  <li> Farmer success stories</li>
                  <li> Waste-to-value innovations</li>
                </ul>
              </Text>
            </Box>
            <Box className="w-full md:w-1/2 h-[200px] rounded-4xl">
              <img
                src={BlogImg}
                alt="Waste4Cash Project"
                className="!w-full !h-full object-cover rounded-4xl"
              />
            </Box>
          </Flex>
          <Divider className="!my-10" />
          <Box>
            <Text
              as="h3"
              className="!text-xl !font-semibold text-[#616060] !mb-5">
              Our Team
            </Text>
            <Text className="text-base text-[#616060] mt-2">
              We are a dynamic team of scientists, entrepreneurs, and grassroots
              changemakers committed to building a future where farming and
              nature thrive in harmony. Our strength lies in our diverse
              backgrounds, shared vision, and hands-on experience across
              agriculture, business, and sustainability.
            </Text>
            <br />
            <Text className="text-base text-[#616060] mt-2">
              Kwabena Tufuor, our Team Lead and CEO, is a Master of Business
              Creation Scholar at the University of Utah. He brings a unique
              blend of strategic leadership and creative marketing to Eco
              Protin. With a Bachelor's degree in Psychology from the University
              of Cape Coast and postgraduate training in Marketing, Kwabena has
              led marketing and communication efforts across industries
              including radio journalism, automotive lubricants, real estate,
              insurance, and facilities management. At Eco Protin, he spearheads
              brand strategy, stakeholder engagement, and overall business
              development. <br />
              Our Chief Operating Officer, Nana Yaw, is a seasoned Civil
              Engineer with a degree from the Kwame Nkrumah University of
              Science and Technology (KNUST) and a Fellow of the Ghana
              Institution of Engineering. He leads our finance and logistics
              operations, applying structured problem-solving and systems
              thinking to ensure efficiency across the value chain.
            </Text>
            <br />
            <Text className="text-base text-[#616060] mt-2">
              Together, we are ably supported by a technical team comprising an
              entomologist, a crop scientist, and an animal nutritionist, whose
              expertise anchors the scientific rigor of our processes. In
              addition, we maintain strategic partnerships with key institutions
              in the agribusiness sector, ensuring we stay connected,
              collaborative, and forward-thinking in delivering scalable
              solutions. <br />
              At Eco Protin, we combine deep local insight with global thinking
              to create impact-driven solutions that promote circular
              agriculture, empower underserved communities, and contribute to a
              more resilient food system across Ghana and West Africa.
            </Text>
          </Box>
          <Divider className="!my-10" />
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            gap={10}
            mt={10}>
            <Box className="w-full md:w-1/2">
              <Text
                as="h3"
                className="!text-xl !font-semibold text-[#616060] !mb-5">
                Environmental and Social Policy
              </Text>
              <Text maxW="xl" className="md:text-lg text-[#616060]">
                Our values guide every action:
                <ul className="list-disc !pl-5 !text-base">
                  <li>
                    Sustainability: Zero-waste, low-emission models aligned with
                    SDG Goal1 of No Poverty,Goal 2 of Zero Hunger, and Goal 13
                    of Climate Action
                  </li>
                  <li>
                    Innovation: Continuous R&D for better circular solutions
                  </li>
                  <li>Integrity: Radical transparency and traceability</li>
                  <li>
                    Health & Wellness: Nutritious animal feed, clean food
                    systems
                  </li>
                  <li>
                    Community: Youth and women-led inclusive growth which
                    generates employment in rural and peri-urban areas
                  </li>
                </ul>
              </Text>
            </Box>
            <Flex
              gap={3}
              className="w-full md:w-1/2  justify-center items-center lg:items-end">
              <img
                src={SDGBadge1}
                alt="SDG"
                className="!w-[100px] !h-[100px] lg:!w-[150px] lg:!h-[150px]"
              />
              <img
                src={SDGBadge2}
                alt="SDG"
                className="!w-[100px] !h-[100px] lg:!w-[150px] lg:!h-[150px]"
              />
              <img
                src={SDGBadge3}
                alt="SDG"
                className="!w-[100px] !h-[100px] lg:!w-[150px] lg:!h-[150px]"
              />
            </Flex>
          </Flex>
          <Divider className="!my-10" />
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            gap={10}
            mt={10}>
            <Box className="w-full md:w-1/2">
              <Text
                as="h3"
                className="!text-xl !font-semibold text-[#616060] !mb-5">
                Milestones
              </Text>
              <Text maxW="xl" className="md:text-lg text-[#616060]">
                From idea to impact, Eco Protin is forging the path for
                circular, climate-forward agriculture: agriculture.
                <ul className="list-disc !pl-5 !text-base">
                  <li> 2024 - Concept development and pilot phase</li>
                  <li>2025 - First BSF facility launched</li>
                  <li> 20 tonnes of organic waste valorised</li>
                  <li>
                    {" "}
                    30+ catfish and livestock farmers onboarded and served
                  </li>
                </ul>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
