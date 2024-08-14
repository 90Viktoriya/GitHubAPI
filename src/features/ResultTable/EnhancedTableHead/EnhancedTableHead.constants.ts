import { HeadCell } from './EnhancedTableHead.interface';

//Заголовок таблицы
export const headCells: HeadCell[] = [
  { id: 'name', label: 'Название', isSortable: true },
  { id: 'language', label: 'Язык', isSortable: false },
  { id: 'forks', label: 'Число форков', isSortable: true },
  { id: 'stars', label: 'Число звезд', isSortable: true },
  { id: 'updated', label: 'Дата обновления', isSortable: true }
];
