import '../styles/globals.css'
import CssBaseline from "@material-ui/core/CssBaseline"
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        marginBottom: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function MyApp({Component, pageProps}) {
    const classes = useStyles()

    return (
        <CssBaseline>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Path To Mastery
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="xl">
                <Component {...pageProps} />
            </Container>
        </CssBaseline>
    )
}

export default MyApp
