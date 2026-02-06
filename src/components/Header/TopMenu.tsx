import { HStack, Text, MenuRoot, MenuTrigger, Image } from "@chakra-ui/react";
import { useState } from "react";
import { Polygon } from "../../assets";

export const TopMenu = () => {
  const [active, setActive] = useState<"Заявки" | "Отчеты" | "Справочники">(
    "Заявки",
  );

  const color = (v: string) => (active === v ? "black" : "gray.500");
  const weight = (v: string) => (active === v ? "600" : "400");

  return (
    <HStack gap="20px">
      <Text
        cursor="pointer"
        color={color("Заявки")}
        fontWeight={weight("Заявки")}
        onClick={() => setActive("Заявки")}
      >
        Заявки
      </Text>

      <Text
        cursor="pointer"
        color={color("Отчеты")}
        fontWeight={weight("Отчеты")}
        onClick={() => setActive("Отчеты")}
      >
        Отчеты
      </Text>

      <MenuRoot>
        <MenuTrigger asChild>
          <HStack
            cursor="pointer"
            gap="2"
            color={color("Справочники")}
            fontWeight={weight("Справочники")}
            onClick={() => setActive("Справочники")}
          >
            <HStack spaceX="4px">
              <Text fontWeight="600">Справочники</Text>
              <Image
                src={Polygon}
                alt="стрелка"
                boxSize="7px"
                objectFit="contain"
              />
            </HStack>
          </HStack>
        </MenuTrigger>
      </MenuRoot>
    </HStack>
  );
};
