import { useCallback, useState } from 'react';
import { ComponentsCaptions } from '../../../data/ComponentsCaptions';
import { setSearchValue } from '../../../features/Redux/searchSlice/searchSlice';
import { useAppDispatch } from '../../../features/Redux/hooks';
import { RouterPath } from '../../../features/Router/Router.enum';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';

export function Search() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target.value);
  };

  const handleOnClick = useCallback(() => {
    dispatch(setSearchValue(inputValue));
    navigate(`/${RouterPath.SEARCH}/${inputValue}`);
  }, [dispatch, inputValue, navigate]);

  return (
    <Box>
      <TextField
        type="text"
        placeholder={ComponentsCaptions.SEARCH_REQUEST}
        value={inputValue}
        onChange={handleChange}
      />
      <Button onClick={handleOnClick}>{ComponentsCaptions.SEARCH}</Button>
    </Box>
  );
}
