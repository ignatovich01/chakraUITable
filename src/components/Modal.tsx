import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Portal,
  Textarea,
  chakra,
  FileUpload,
  Image,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { StyledText } from "./ui/StyledText";
import { Upload } from "@/assets";

interface IModal {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ open, setOpen }: IModal) => {
  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button variant="outline">Создать заявку</Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          p={4}
        >
          <Dialog.Content
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            width="100%"
            maxW="900px"
            p={6}
            position="relative"
          >
            <Dialog.CloseTrigger asChild>
              <CloseButton position="absolute" top={4} right={4} />
            </Dialog.CloseTrigger>

            <Box mb={6}>
              <StyledText fontSize={24} fontWeight="bold">
                Создание заявки
              </StyledText>
            </Box>

            <Flex gap={6} flexWrap="wrap">
              {/* Левая колонка */}
              <Box flex="1 1 250px">
                <Box mb={4}>
                  <StyledText fontSize={12}>Аптека</StyledText>
                  <chakra.select
                    w="100%"
                    p={2}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.300"
                  >
                    <option value="">Выберите аптеку</option>
                    <option value="pharmacy1">Аптека 1</option>
                    <option value="pharmacy2">Аптека 2</option>
                  </chakra.select>
                </Box>

                <Box mb={4}>
                  <StyledText fontSize={12}>Категория заявки</StyledText>
                  <chakra.select
                    w="100%"
                    p={2}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.300"
                  >
                    <option value="">Выберите категорию</option>
                    <option value="fridges">Холодильники</option>
                    <option value="aircons">Кондиционеры</option>
                    <option value="other">Другое</option>
                  </chakra.select>
                </Box>

                <Box display="flex" alignItems="center">
                  <chakra.input type="checkbox" id="warranty" mr={2} />
                  <StyledText fontSize={14} as="label">
                    Гарантийный случай?
                  </StyledText>
                </Box>
              </Box>

              {/* Правая колонка */}
              <Box flex="1 1 250px">
                <Box mb={4}>
                  <StyledText fontSize={12}>Тема заявки</StyledText>
                  <Textarea
                    resize="none"
                    placeholder="Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер"
                  />
                </Box>

                <Box mb={4}>
                  <StyledText fontSize={12}>Приоритет</StyledText>
                  <chakra.select
                    w="100%"
                    p={2}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.300"
                  >
                    <option value="">Выберите приоритет</option>
                    <option value="low">Низкий</option>
                    <option value="medium">Средний</option>
                    <option value="high">Высокий</option>
                  </chakra.select>
                </Box>

                <Box mb={4}>
                  <StyledText fontSize={12}>Описание проблемы</StyledText>
                  <Textarea
                    placeholder="Кратко опишите проблему: 

что случилось? 
дата и время произошедшего? 
сколько длится проблема?
насколько она влияет на вашу работу?"
                    resize="none"
                    minH="140px"
                  />
                </Box>

                <Flex>
                  <FileUpload.Root alignItems="stretch" maxFiles={5} maxW="s">
                    <FileUpload.HiddenInput />
                    <FileUpload.Dropzone>
                      <FileUpload.DropzoneContent>
                        <Box>Выберите или перетащите фото или файл</Box>
                        <Image
                          src={Upload}
                          alt="Upload"
                          boxSize="15px"
                          objectFit="contain"
                        />
                      </FileUpload.DropzoneContent>
                    </FileUpload.Dropzone>
                    <FileUpload.List clearable />
                  </FileUpload.Root>
                </Flex>
              </Box>
            </Flex>

            <Flex mt={6} justifyContent="flex-start" gap={3}>
              <Button colorScheme="blackAlpha">Создать заявку</Button>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Отмена</Button>
              </Dialog.ActionTrigger>
            </Flex>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
