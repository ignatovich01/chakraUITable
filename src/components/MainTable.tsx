import { Box, Flex, Image, Table } from "@chakra-ui/react";
import { StyledText } from "./ui/StyledText";
import { DateTimeMask } from "./ui/Masks/DateTimeMask";
import { Acute, Minus, priorityIcons, Union } from "@/assets";
import { StatusTextMask } from "./ui/Masks/StatusBoxMask";
import { ResolutionMask } from "./ui/Masks/ResolutionMask";
import { Priority, Ticket } from "@/data/Interface";
interface IMainTable {
  data: Ticket[];
  headers: string[];
}

export const MainTable = ({ data, headers }: IMainTable) => {
  return (
    <Box my="31px" mx="40px">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {headers.map((header: string) => (
              <Table.ColumnHeader key={header}>{header}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((row: Ticket) => (
            <Table.Row key={row.id}>
              <Table.Cell>
                <StyledText>{row.id}</StyledText>
              </Table.Cell>
              <Table.Cell>
                <Flex direction="row" align="center" gap="10px" wrap="nowrap">
                  <StyledText bold fontSize={12}>
                    {row.storeId}
                  </StyledText>
                  <StyledText>{row.address}</StyledText>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <DateTimeMask data={row.createdAt} />
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="px" wrap="nowrap">
                  <Image
                    src={priorityIcons[`${row.priority}`]}
                    alt={row.priority}
                    boxSize="14px"
                    objectFit="contain"
                  />
                  <StyledText fontSize={12}>
                    {Priority[row.priority]}
                  </StyledText>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <StyledText>{row.title}</StyledText>
              </Table.Cell>
              <Table.Cell>
                <StyledText>{row.category}</StyledText>
              </Table.Cell>
              <Table.Cell>
                <StyledText display="flex" justifyContent="center">
                  {row.technician || (
                    <Image
                      src={Minus}
                      alt="Minus"
                      boxSize="24px"
                      objectFit="contain"
                    />
                  )}
                </StyledText>
              </Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="4px" wrap="nowrap">
                  {row.reactionTime?.theme === "green" && (
                    <Image
                      src={Union}
                      alt="Union"
                      boxSize="14px"
                      objectFit="contain"
                    />
                  )}
                  {!row.reactionTime?.theme && (
                    <Image
                      src={Acute}
                      alt="Acute"
                      boxSize="14px"
                      objectFit="contain"
                    />
                  )}

                  <StyledText
                    color={
                      row.reactionTime?.theme === "green"
                        ? "#0E7411"
                        : undefined
                    }
                  >
                    {row.reactionTime.value}
                  </StyledText>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <ResolutionMask resolutionTime={row.resolutionTime} />
              </Table.Cell>
              <Table.Cell>
                <StatusTextMask status={row.status} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
