import { Box, Button, Container, Grid, IconButton, Menu, MenuItem, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Delete, Logout } from "@mui/icons-material"
import { useState } from "react"

function Home({ setLoggedIn }) {
    const [menuOpen, setMenuOpen] = useState(false)

    function handleLogout() {
        setLoggedIn(false)
    }

    return <Grid container sx={{ width: '100%', background: "lightcyan" }}>
        <Grid item xs={12} md={2} style={{background: "lightblue"}}>
        <Box>
                <Button onClick={() => setMenuOpen(true)} >Mostra menu</Button>
                <Menu id="basic-menu" open={menuOpen}>
                    <MenuItem>
                      <Link to="/product/1">Prodotto 1</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/product/2">Prodotto 2</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/product/3">Prodotto 3</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/product/4">Prodotto 4</Link>
                    </MenuItem>

                    <MenuItem onClick={() => setMenuOpen(false)}>Chiudi</MenuItem>
                </Menu>
            </Box>
        </Grid>
        <Grid item xs={12} md={8}>
            <Stack spacing={2}>
                <Box>
                    <Typography variant="h1" gutterBottom>
                        Material ui examples
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>
                        h2. Heading
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body1">
                        <Box>body</Box>
                    </Typography>
                </Box>
                <Box>
                    <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }}>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained" color='error'>Error</Button>
                    </Stack>
                </Box>
                <Box>
                    <TextField id="txt" label="txt" variant="filled" />
                </Box>
            </Stack>
            <Box>
                <Tooltip title="Delete" placement='top'>
                    <IconButton>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box>
                <Tooltip title="Logout" placement='top'>
                    <IconButton>
                        <Logout onClick={handleLogout} />
                    </IconButton>
                </Tooltip>
            </Box>
        </Grid>
    </Grid>
}

export default Home
