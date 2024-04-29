import { Box, Button, Typography, TextField, IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';

function App() {
  return <Box sx={{ width: '100%', maxWidth: 500, background: "lightcyan"}}>
    <Typography variant="h1" gutterBottom>
      h1. Heading
    </Typography>
    <Typography variant="body1">
      <Box>body</Box>
    </Typography>
    <Button variant="contained">Contained</Button>
    <Button variant="contained" color='error'>Error</Button>
    <TextField id="txt" label="txt" variant="filled"/>
    <Box>
    <Tooltip title="Delete" placement='top'>
        <IconButton>
          <Delete />
        </IconButton>
    </Tooltip>
    </Box>
  </Box>
}

export default App;
