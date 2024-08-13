import { RepositoryInfo, RepositoryRequest } from '../../../services/githubApi.types';
import { Order } from '../../ResultTable/EnhancedTableHead/EnhancedTableHead.type';

export default interface SearchState {
  currentPage: number;
  searchValue: string;
  rowsPerPage: number;
  orderBy: keyof RepositoryInfo;
  order: Order;
  selectedRepository: RepositoryRequest;
}
