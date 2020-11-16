import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: "25px",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    pos: {
        marginBottom: 12,
    },
    urlLink: {
        backgroundColor: 'cyan',
        textDecoration: 'none',
        border: 'none',
        borderRadius:'8px',
    },
});

const Post= ({ post, commentButton }) => {  
  const classes = useStyles();
  const { id, title, body } = post;
  return (
      <Card className={classes.root} variant="outlined">
          <CardContent>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                  {title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                  {body}
              </Typography>

          </CardContent>
          <CardActions>
              {
                  commentButton === true &&
                  <Link className={classes.urlLink} to={{ pathname: "/post/" + id }}>
                      <Button color = "textGreen">See More</Button>
                  </Link>
              }
          </CardActions>
      </Card>
    );
};

export default Post;