import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp'
import StarSharpIcon from '@material-ui/icons/StarSharp'
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Card from '@material-ui/core/Card'
import {CardActions, CardContent, CardHeader, IconButton, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        width: 250,
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flexGrow: 1,
    }
}))

export function Lesson({lesson}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title={lesson.title} subheader={lesson.subtitle}/>
            <CardContent className={classes.content}>
                <Typography variant="body2" as="span" color="textSecondary">
                    {lesson.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

function Status({status}) {
    switch (status) {
        case "done":
            return <CheckCircleOutlineSharpIcon/>
        case "current":
            return <StarSharpIcon/>
        case "todo":
            return <RadioButtonUncheckedSharpIcon/>
        default:
            return null
    }
}
