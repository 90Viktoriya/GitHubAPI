import { Typography } from '@mui/material';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import styles from './Error.module.sass';

//404 страница
export function Error() {
  return (
    <Typography className={styles.error} variant="h3">
      {ComponentsCaptions.ERROR_PAGE}
    </Typography>
  );
}
