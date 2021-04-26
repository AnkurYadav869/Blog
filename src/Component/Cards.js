import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		minHeight: '24rem',
		margin: '2rem 0',
		cursor: 'pointer',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function Cards({ content }) {
	const classes = useStyles();
	let click = false;
	const changeBG = (e) => {
		// console.log(e.target);
		if (!click) {
			e.target.style.color = 'red';
		} else {
			e.target.style.color = '';
		}
		click = !click;
	};

	return (
		<Card className={classes.root}>
			<CardHeader title={content.title} subheader={content.author} />
			{/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{content.post}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon onClick={changeBG} />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
