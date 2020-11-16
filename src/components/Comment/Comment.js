import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginTop: "20px",
  },
});


const Comment = ({comment}) => {
  const { id, name, body, email } = comment;
  // const photoUrl = `https://picsum.photos/id/${id}/400/400`;
  const photoUrl = `https://api.adorable.io/avatars/${id}/`
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{
            borderRadius: '50%',
            height: '150px',
            width: '150px',
            float: "left",
            padding:"10px",
          }}
          component="img"
          alt="Contemplative Reptile"
          image={photoUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            {email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
        <Button size="small" color="primary">
          Dislike
        </Button>
      </CardActions>
    </Card>

    );
};

export default Comment;