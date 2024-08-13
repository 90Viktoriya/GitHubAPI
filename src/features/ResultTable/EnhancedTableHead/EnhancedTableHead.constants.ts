import { HeadCell } from './EnhancedTableHead.interface';

//Заголовок таблицы
export const headCells: HeadCell[] = [
  { id: 'name', label: 'Название', isSortable: true },
  { id: 'languages', label: 'Язык', isSortable: false },
  { id: 'forkCount', label: 'Число форков', isSortable: false },
  { id: 'stargazerCount', label: 'Число звезд', isSortable: false },
  { id: 'updatedAt', label: 'Дата обновления', isSortable: true }
];
