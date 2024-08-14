import { RepositoryRequest } from '../../../services/githubApi.types';
import { Order } from '../../ResultTable/EnhancedTableHead/EnhancedTableHead.type';

//интерфейс для слайса по поиску
export default interface SearchState {
  currentPage: number;
  searchValue: string;
  rowsPerPage: number;
  orderBy: string;
  order: Order;
  selectedRepository: RepositoryRequest;
}
