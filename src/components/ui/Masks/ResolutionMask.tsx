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
    <Flex justify="center" align="center" gap="4px" wrap="nowrap">
      {resolutionTime?.theme === "green" ? (
        <Image src={Union} alt="Union" boxSize="14px" objectFit="contain" />
      ) : resolutionTime?.theme === "red" ? (
        <Image src={Error} alt="Error" boxSize="14px" objectFit="contain" />
      ) : (
        <Image src={Acute} alt="Acute" boxSize="14px" objectFit="contain" />
      )}

      {!resolutionTime?.value ? (
        <Flex>
          <Image src={Minus} alt="Minus" boxSize="24px" objectFit="contain" />
        </Flex>
      ) : (
        <StyledText
          display="flex"
          justifyContent="center"
          fontSize={14}
          color={
            resolutionTime?.theme === "green"
              ? "#0E7411"
              : resolutionTime?.theme === "red"
                ? "#B93C3C"
                : "#1C1C1C"
          }
        >
          {resolutionTime.value}
        </StyledText>
      )}
    </Flex>
  );
};
