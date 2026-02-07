import { Flex, Image } from "@chakra-ui/react";
import { StyledText } from "../StyledText";
import { Acute, Error, Minus, Union } from "@/assets";

export const ThemeColor = {
  red: "#B93C3C",
  green: "#0E7411",
} as const;

interface IResolutionMask {
  resolutionTime?: { value: string; theme?: string };
}

export const ResolutionMask: React.FC<IResolutionMask> = ({
  resolutionTime,
}) => {
  if (!resolutionTime?.value) {
    return (
      <Flex align="center" justifyContent="center">
        <Image src={Minus} alt="Minus" boxSize="24px" objectFit="contain" />
      </Flex>
    );
  }
  return (
    <Flex align="center" gap="4px" wrap="nowrap">
      {resolutionTime?.theme === "green" ? (
        <Image src={Union} alt="Union" boxSize="14px" objectFit="contain" />
      ) : resolutionTime?.theme === "red" ? (
        <Image src={Error} alt="Error" boxSize="14px" objectFit="contain" />
      ) : (
        <Image src={Acute} alt="Acute" boxSize="14px" objectFit="contain" />
      )}

      {resolutionTime?.value ?? (
        <Image src={Minus} alt="Minus" boxSize="24px" objectFit="contain" />
      )}
      <StyledText
        display="flex"
        justifyContent="center"
        color={
          resolutionTime?.theme === "green"
            ? "#0E7411"
            : resolutionTime?.theme === "red"
              ? "#B93C3C"
              : "#1C1C1C"
        }
      ></StyledText>
    </Flex>
  );
};
