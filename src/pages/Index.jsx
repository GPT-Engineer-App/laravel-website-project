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
            <Icon as={FaLaravel} w={24} h={24} />
            <Heading as="h1" size="3xl">
              PHP Laravel
            </Heading>
            <Text fontSize="xl" textAlign="center">
              Laravel is a web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the small things.
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
            <Heading mb={4}>About Laravel</Heading>
            <Text fontSize="lg">Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.</Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {features.map((feature, index) => (
              <Box key={index}>
                <Icon as={feature.icon} w={12} h={12} color="red.500" mb={6} />
                <Heading size="md" mb={4}>
                  {feature.title}
                </Heading>
                <Text>{feature.text}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <Box>
            <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYXJhdmVsJTIwY29kZSUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzExODE5NTUzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Laravel Code" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
