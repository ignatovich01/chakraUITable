import { Text, TextProps } from "@chakra-ui/react";

interface StyledTextProps extends TextProps {
  bold?: boolean;
  fontSize?: number;
  lineHeight?: number;
}

export const StyledText: React.FC<StyledTextProps> = ({
  bold = false,
  fontSize = 14,
  lineHeight = 24,
  ...textProps
}) => {
  return (
    <Text
      fontFamily="Inter ,sans-serif"
      fontWeight={bold ? 600 : 400}
      fontSize={`${fontSize}px`}
      lineHeight={`${lineHeight}px`}
      letterSpacing={bold ? "8%" : "0px"}
      {...textProps}
    />
  );
};
