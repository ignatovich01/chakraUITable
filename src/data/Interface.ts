export const Status = {
  new: "Новая",
  inProgress: "В работе",
  done: "Готово",
  closed: "Закрыто",
} as const;

export type StatusKey = keyof typeof Status;

export type PriorityKey = "Low" | "Medium" | "High" | "Critical";

export const Priority: Record<PriorityKey, string> = {
  Low: "Низкий",
  Medium: "Средний",
  High: "Высокий",
  Critical: "Критичный",
};

export const tableHeaders: string[] = [
  "№",
  "Аптека",
  "Создана",
  "Приоритет",
  "Тема",
  "Категория",
  "Техник",
  "Реакция",
  "Решение",
  "Статус",
];

export interface Ticket {
  id: string;
  storeId: number;
  address: string;
  createdAt: string;
  priority: PriorityKey;
  title: string;
  category: string;
  technician?: string;
  reactionTime: { value: string; theme?: string };
  resolutionTime?: { value: string; theme?: string };
  status: StatusKey;
}
