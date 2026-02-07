import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Vector, AvatarWoman } from "../../assets";
import { TopMenu } from "./TopMenu";
import { StyledText } from "../ui/StyledText";

export const Header = () => {
  return (
    <Container
      as="header"
      maxW="full"
      py={4}
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
    >
      <Stack spaceX={4}>
        <HStack justify="space-between" align="center" w="full">
          <TopMenu />

          <HStack spaceX={4}>
            <Box position="relative">
              <Avatar.Root
                size="sm"
                cursor="pointer"
                transition="all 0.2s ease"
                _hover={{
                  boxShadow: "md",
                  transform: "scale(1.05)",
                }}
                _active={{
                  transform: "scale(0.98)",
                }}
              >
                <Avatar.Fallback name="аватарка пользователя" />
                <Avatar.Image src={AvatarWoman} alt="AvatarWoman" />
              </Avatar.Root>
              <Badge
                position="absolute"
                bg="#B93C3C"
                variant="solid"
                top="6"
                right="-1"
                colorScheme="red"
                borderRadius="full"
                fontSize="0.65em"
              >
                2
              </Badge>
            </Box>
            <Button size="sm" variant="outline">
              <Image
                src={Vector}
                alt="My Icon"
                boxSize="18px"
                objectFit="contain"
              />
              <StyledText fontSize={16}>Выйти</StyledText>
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </Container>
  );
};
