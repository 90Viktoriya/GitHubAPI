import { useCallback } from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { headCells } from './EnhancedTableHead.constants';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { setOrderBy, setOrder } from '../../Redux/searchSlice/searchSlice';

//Заголовок таблицы с сортировкой
export function EnhancedTableHead() {
  const dispatch = useAppDispatch();
  const orderBy = useAppSelector((state) => state.search.orderBy);
  const order = useAppSelector((state) => state.search.order);
  const onSortLabelClick = useCallback(
    (property: string) => () => {
      const isAsc = orderBy === property && order === 'asc';
      dispatch(setOrder(isAsc ? 'desc' : 'asc'));
      dispatch(setOrderBy(property));
      setOrderBy(property);
    },
    [dispatch, order, orderBy]
  );
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>
            {headCell.isSortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={onSortLabelClick(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              <span>{headCell.label}</span>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
