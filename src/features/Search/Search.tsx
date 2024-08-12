import { useCallback, useState } from 'react';
import { ComponentsCaptions } from '../../data/ComponentsCaptions';
import { setCurrentPage, setSearchValue } from '../Redux/searchSlice/searchSlice';
import { useAppDispatch } from '../Redux/hooks';
import { RouterParams, RouterPath } from '../Router/Router.enum';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { initialState } from '../Redux/searchSlice/searchSlice.constants';

export function Search() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event?.target.value);
  };

  const handleOnClick = useCallback(() => {
    dispatch(setSearchValue(inputValue));
    dispatch(setCurrentPage(initialState.currentPage));
    navigate(
      `/${RouterPath.SEARCH}/?${RouterParams.QUERY}=${inputValue}&${RouterParams.PAGE}=${initialState.currentPage}`
    );
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
