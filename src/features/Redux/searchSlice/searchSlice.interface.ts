import { RepositoryInfo, RepositoryRequest } from '../../../services/githubApi.types';
import { Order } from '../../ResultTable/EnhancedTableHead/EnhancedTableHead.type';

//интерфейс для слайса по поиску
export default interface SearchState {
  currentPage: number;
  searchValue: string;
  rowsPerPage: number;
  orderBy: keyof RepositoryInfo;
  order: Order;
  selectedRepository: RepositoryRequest;
}
