import { Box } from "@chakra-ui/react";
import { StyledText } from "../StyledText";
import { Status, StatusKey } from "@/data/Interface";

interface IStatusTextMask {
  status: StatusKey;
}

const statusColors: Record<StatusKey, string> = {
  new: "#F0CDFA",
  inProgress: "#FFEBB3",
  done: "#A2E3A4",
  closed: "#F1F1F1",
};

export const StatusTextMask: React.FC<IStatusTextMask> = ({
  status,
  ...props
}) => {
  return (
    <Box
      min-height="24px"
      borderRadius="4px"
      px="6px"
      py="2px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="7px"
      // bg={"black"}
      bg={statusColors[status]}
    >
      <StyledText {...props}>{Status[status]}</StyledText>
    </Box>
  );
};
