import { Alert, Box, Button, Container, Stack, TextField } from "@mui/material";
import { useRef, useState } from "react";

import login from "../controllers/login";

function Login({setLoggedIn}) {
    const [ trialsDone, setTrialsDone ] = useState(0)
    const usernameRef = useRef("")
    const passwordRef = useRef("")

    function handleLogin(e) {
        e.preventDefault()
        const isLoggedIn = login(usernameRef.current.value, passwordRef.current.value)
        console.log(isLoggedIn)
        setLoggedIn(isLoggedIn)
        setTrialsDone(trialsDone+1)
    }

    return <Container>
      <Stack spacing={3}>
        <TextField
            required
            id="username"
            label="username"
            inputRef={usernameRef}
        />
        <TextField
            required
            id="password"
            label="password"
            inputRef={passwordRef}
            type="password"
        />
        <Box gutter={3}>
          <Button variant="contained" onClick={handleLogin} >Login</Button>
        </Box>
        { trialsDone > 0 && <Alert severity="error"> Password errata </Alert> }
      </Stack>
    </Container>
}

export default Login
