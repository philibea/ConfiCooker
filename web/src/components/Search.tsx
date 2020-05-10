import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Button, IconButton, InputBase, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import storage from '../helpers/storage'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      width: '80%',
      margin: 'auto',
      marginBottom: theme.spacing(4),
    },
    list: {
      marginLeft: 'auto',
    },
    button: {
      width: theme.spacing(16),
      height: '100%',

    },
    input: {
      margin: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }),
)
interface Values {
  searchProduct: string
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
    setValues({ ...values, searchProduct: event.target.value })
  }

  const { products = [] } = storage.getProductsList()

  console.log(products)
  return (
    <Box className={classes.root}>
      <Paper>
        <InputBase
          className={classes.input}
          placeholder="Search Product"
          value={values.searchProduct}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
          inputProps={{ 'aria-label': 'search a product' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* {products.length !== 0 &&
        <Box className={classes.list}>
          <Button color="primary" variant="contained" className={classes.button} >See list</Button>
        </Box>
      } */}
    </Box>
  );
}
export default Search
