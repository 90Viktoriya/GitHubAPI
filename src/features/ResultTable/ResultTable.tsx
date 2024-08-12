import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { TableFields } from '../../data/TableFields';
import { useGetRepositories } from '../../hooks/useGetRepositories';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';

export function ResultTable() {
  const { repositories } = useGetRepositories();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">{TableFields.TITLE}</TableCell>
            <TableCell align="right">{TableFields.LANGUAGE}</TableCell>
            <TableCell align="right">{TableFields.FORKS}</TableCell>
            <TableCell align="right">{TableFields.STARS}</TableCell>
            <TableCell align="right">{TableFields.UPDATE}</TableCell>
          </TableRow>
        </TableHead>
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
