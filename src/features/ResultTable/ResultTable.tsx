import { TableContainer, Table, TableRow, TableCell, TableBody } from '@mui/material';
import { useGetRepositories } from '../../hooks/useGetRepositories';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { EnhancedTableHead } from './EnhancedTableHead/EnhancedTableHead';
import { useAppDispatch } from '../Redux/hooks';
import { setSelectedRepository } from '../Redux/searchSlice/searchSlice';
import { useCallback } from 'react';
import { RepositoryRequest } from '../../services/githubApi.types';
import { useSearchParams } from 'react-router-dom';
import { initialState } from '../Redux/searchSlice/searchSlice.constants';
import { RouterParams } from '../Router/Router.enum';

export function ResultTable() {
  const { repositories } = useGetRepositories();
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleOnCellClick = useCallback(
    (selectedRepository: RepositoryRequest) => () => {
      dispatch(setSelectedRepository(selectedRepository));
      setSearchParams({
        [RouterParams.QUERY]: searchParams.get(RouterParams.QUERY) ?? '',
        [RouterParams.PAGE]: initialState.currentPage.toString(),
        [RouterParams.DETAILS]: `${selectedRepository.login}_${selectedRepository.name}`
      });
    },
    [dispatch, searchParams, setSearchParams]
  );

  return (
    <TableContainer>
      <Table>
        <EnhancedTableHead />
        <TableBody>
          {!repositories.length ? (
            <TableRow>
              <TableCell colSpan={5}>{ComponentsCaptions.NOTHING_FOUND}</TableCell>
            </TableRow>
          ) : (
            repositories.map((repository) => (
              <TableRow
                key={`${repository.name} ${repository.updatedAt}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={handleOnCellClick({ name: repository.name, login: repository.owner.login })}
              >
                <TableCell component="th" scope="row">
                  {repository.name}
                </TableCell>
                <TableCell align="right">
                  {repository.languages.nodes.length > 0 ? repository.languages.nodes[0].name : ''}
                </TableCell>
                <TableCell align="right">{repository.forkCount}</TableCell>
                <TableCell align="right">{repository.stargazerCount}</TableCell>
                <TableCell align="right">{repository.updatedAt}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
