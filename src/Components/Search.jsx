import React, { useContext} from 'react'
import { userContext } from '../context/context'
import { Box,Input } from '@mui/material'

const Search = () => {
    // this is used from conext
    const {value,setValue} = useContext(userContext)
  return (
    <Box sx={{ width: '100%', maxWidth: 250,mx:'auto',mb:'30px' }}>
    <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value.toLowerCase())}
        sx={{
            padding: '5px',
            borderRadius: '10px',
            width: '100%',
            height:'50px',
            background:'white',
            outline:'none'
        }}
    />
</Box>
  )
}

export default Search