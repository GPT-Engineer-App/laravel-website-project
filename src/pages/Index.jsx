import React from "react";
import { Box, Heading, Text, Image, Container, SimpleGrid, Button, Stack, Icon } from "@chakra-ui/react";
import { FaLaravel, FaCode, FaServer, FaHeart } from "react-icons/fa";

const features = [
  {
    title: "MVC Architecture",
    text: "Laravel follows the Model-View-Controller architectural pattern, providing a structured way to organize your code.",
    icon: FaCode,
  },
  {
    title: "Eloquent ORM",
    text: "Laravel's Eloquent ORM provides a simple ActiveRecord implementation for working with your database.",
    icon: FaServer,
  },
  {
    title: "Blade Templates",
    text: "Blade is the simple, yet powerful templating engine provided with Laravel.",
    icon: FaHeart,
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="red.500" color="white" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={6} align="center">
            <Icon as={FaPlane} w={24} h={24} />  
            <Heading as="h1" size="3xl">
              Acme Travel Agency
            </Heading>
            <Text fontSize="xl" textAlign="center">
              Discover the world with us. From adventure trips to luxury getaways, we have the perfect vacation for you. Let us help you plan the trip of a lifetime.
            </Text>
            <Button colorScheme="white" size="lg">
              Get Started
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <Stack spacing={12}>
          <Box>
            <Heading mb={4}>About Our Agency</Heading>
            <Text fontSize="lg">Acme Travel Agency has been helping people plan their dream vacations for over 20 years. Our experienced travel agents are passionate about travel and dedicated to providing exceptional service. We offer a wide range of travel options, from budget-friendly packages to luxury customized itineraries. Let us take care of all the details so you can relax and enjoy your trip.</Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box>
              <Icon as={FaPlane} w={12} h={12} color="red.500" mb={6} />
              <Heading size="md" mb={4}>
                Flights
              </Heading>
              <Text>We partner with major airlines to get you the best deals on domestic and international flights.</Text>
            </Box>
            <Box>
              <Icon as={FaHotel} w={12} h={12} color="red.500" mb={6} />
              <Heading size="md" mb={4}>
                Hotels
              </Heading>
              <Text>From budget inns to 5-star resorts, we'll find the perfect accommodations for your needs and budget.</Text>
            </Box>
            <Box>
              <Icon as={FaSuitcase} w={12} h={12} color="red.500" mb={6} />
              <Heading size="md" mb={4}>
                Vacation Packages
              </Heading>
              <Text>Save time and money with our exclusive vacation bundles including flights, hotels, transportation and more.</Text>
            </Box>
          </SimpleGrid>

          <Box>
            <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDB8fHx8MTcxMTgyMDU1MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Tropical beach" />
          </Box>

          <Box textAlign="center">
            <Heading mb={8}>Featured Destinations</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box>
                <Image src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGZyYW5jZXxlbnwwfHx8fDE3MTE4MjA1ODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Paris" mb={4} />
                <Heading size="md">Paris</Heading>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFufGVufDB8fHx8MTcxMTgyMDYwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Tokyo" mb={4} />
                <Heading size="md">Tokyo</Heading>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXxlbnwwfHx8fDE3MTE4MjA2MTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="New York City" mb={4} />
                <Heading size="md">New York City</Heading>
              </Box>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>

      <Box as="footer" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center">
            <Text>&copy; {`${new Date().getFullYear()}`} Acme Travel Agency</Text>
            <Stack direction="row" spacing={6}>
              <Link href="mailto:info@acmetravel.com">info@acmetravel.com</Link>
              <Link href="tel:+15555555555">555-555-5555</Link>
            </Stack>
            <Stack direction="row" spacing={6}>
              <Link href="https://facebook.com/acmetravel"><Icon as={FaFacebook} /></Link>
              <Link href="https://instagram.com/acmetravel"><Icon as={FaInstagram} /></Link>
              <Link href="https://twitter.com/acmetravel"><Icon as={FaTwitter} /></Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
          </Box>
  );
};

export default Index;
