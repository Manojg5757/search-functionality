import React, { useContext} from 'react'
import { userContext } from '../context/context'
import { Box,Input } from '@mui/material'

const Search = () => {
    const {value,setValue} = useContext(userContext)
  return (
    <Box sx={{ width: '100%', maxWidth: 200,mx:'auto',mb:'30px' }}>
    <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.toLowerCase())}
        sx={{
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            width: '100%',
            height:'50px',
            background:'white',
            '&:focus': {
                borderColor: 'blue',
                boxShadow: '0 0 0 1px blue',
            },
        }}
    />
</Box>
  )
}

export default Search