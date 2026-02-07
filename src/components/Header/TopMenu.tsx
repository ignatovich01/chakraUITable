import {
  HStack,
  MenuRoot,
  MenuTrigger,
  Image,
  MenuContent,
  MenuItem,
  MenuPositioner,
} from "@chakra-ui/react";
import { useState } from "react";
import { Polygon } from "../../assets";
import { StyledText } from "../ui/StyledText";

export const TopMenu = () => {
  const [active, setActive] = useState<"Заявки" | "Отчеты" | "Справочники">(
    "Заявки",
  );

  const color = (v: string) => (active === v ? "black" : "gray.500");

  return (
    <HStack gap="20px">
      <StyledText
        cursor="pointer"
        color={color("Заявки")}
        onClick={() => setActive("Заявки")}
      >
        Заявки
      </StyledText>

      <StyledText
        cursor="pointer"
        color={color("Отчеты")}
        onClick={() => setActive("Отчеты")}
      >
        Отчеты
      </StyledText>

      <MenuRoot>
        <MenuTrigger asChild>
          <HStack
            cursor="pointer"
            gap="2"
            color={color("Справочники")}
            onClick={() => setActive("Справочники")}
          >
            <HStack spaceX="4px">
              <StyledText>Справочники</StyledText>
              <Image
                src={Polygon}
                alt="Polygon"
                boxSize="7px"
                objectFit="contain"
              />
            </HStack>
          </HStack>
        </MenuTrigger>
        <MenuPositioner>
          <MenuContent>
            <MenuItem value="orgs"></MenuItem>
            <MenuItem value="users">
              <StyledText fontSize={16}>Пользователи</StyledText>
            </MenuItem>
            <MenuItem value="roles">
              <StyledText fontSize={16}>Роли</StyledText>
            </MenuItem>
            <MenuItem value="settings">
              <StyledText fontSize={16}>Настройки</StyledText>
            </MenuItem>
          </MenuContent>
        </MenuPositioner>
      </MenuRoot>
    </HStack>
  );
};
