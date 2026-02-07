import { Box } from "@chakra-ui/react";
import { StyledText } from "../StyledText";

interface IDateTimeMask {
  data: string;
}

export const DateTimeMask: React.FC<IDateTimeMask> = ({ data }) => {
  const dateObj = new Date(data);

  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();

  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getSeconds()).padStart(2, "0");

  return (
    <Box spaceX="6px" display="flex" alignItems="center">
      <StyledText fontSize={14}>{`${day}.${month}.${year}`}</StyledText>
      <StyledText
        fontSize={14}
        opacity={0.3}
      >{`${hours}:${minutes}:${seconds}`}</StyledText>
    </Box>
  );
};
