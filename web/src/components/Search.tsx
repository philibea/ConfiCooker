import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { FormControl, IconButton, InputBase, OutlinedInput, InputLabel, InputAdornment, Paper, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

import HomeState from '../pages/Home'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 300,
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }),
)
interface Values {
  product: string
}

interface SearchProps {
  values: Values
  setValues: React.Dispatch<React.SetStateAction<Values>>
}

const Search = ({ values, setValues }: SearchProps): JSX.Element => {
  const classes = useStyles();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValues({ ...values, product: event.target.value })
  }


  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Product"
        value={values.product}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
        inputProps={{ 'aria-label': 'search a product' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
export default Search
