import { Box, Button, Checkbox, HStack, Input, Tabs } from "@chakra-ui/react";
import { FC, useState } from "react";
import { StyledText } from "./ui/StyledText";
import { Modal } from "./Modal";

export type Status =
  | "new"
  | "rejected"
  | "review"
  | "inProgress"
  | "waitingParts"
  | "done"
  | "closed"
  | "all";

const STATUSES: { label: string; value: Status }[] = [
  { label: "Новые", value: "new" },
  { label: "Отклонены", value: "rejected" },
  { label: "На рассмотрении", value: "review" },
  { label: "В работе", value: "inProgress" },
  { label: "Ожидают запчасти", value: "waitingParts" },
  { label: "Готовы", value: "done" },
  { label: "Закрыты", value: "closed" },
  { label: "Все статусы", value: "all" },
];

export const ToolBar: FC = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<Status>("all");
  const [onlyMine, setOnlyMine] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      bg="bg.surface"
      borderRadius="md"
      p={4}
      boxShadow="sm"
      display="flex"
      flexDirection="column"
      gap={4}
    >
      <HStack gap={3}>
        <Input
          placeholder="Поиск по номеру или теме заявки"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="outline">Экспорт</Button>

        <Button onClick={() => setOpenModal(true)} colorScheme="gray">
          + Создать новую заявку
        </Button>

        {openModal && <Modal open={openModal} setOpen={setOpenModal} />}
      </HStack>

      <HStack justify="space-between" align="center">
        <Tabs.Root
          value={status}
          onValueChange={(e) => setStatus(e.value as Status)}
          variant="plain"
        >
          <Tabs.List>
            {STATUSES.map((item) => (
              <Tabs.Trigger
                key={item.value}
                value={item.value}
                borderRadius="4px"
                _selected={{
                  bg: "black",
                  color: "white",
                }}
              >
                {item.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <Checkbox.Root
          checked={onlyMine}
          onCheckedChange={(e) => setOnlyMine(Boolean(e.checked))}
        >
          <Checkbox.Control />
          <Checkbox.Label>
            <StyledText>Показать только мои</StyledText> ............
          </Checkbox.Label>
        </Checkbox.Root>
      </HStack>
    </Box>
  );
};
