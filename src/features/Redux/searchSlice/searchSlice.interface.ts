import { RepositoryInfo } from '../../../services/githubApi.types';
import { Order } from '../../ResultTable/EnhancedTableHead/EnhancedTableHead.type';

export default interface searchState {
  currentPage: number;
  searchValue: string;
  rowsPerPage: number;
  orderBy: keyof RepositoryInfo;
  order: Order;
}
