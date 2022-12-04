import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
// import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Chip from '@material-ui/core/Chip'
import Hidden from '@material-ui/core/Hidden'
import {projectData} from '../variables'

const useStyles = makeStyles((theme) =>({
    cardMedia:{
        width: 180,
    },
    card:{
        display:"flex",
    },
    links:{
        marginRight:"auto"
    },
    tag:{
        marginRight:5,
        marginBottom: 5,
    },
}));

function TagsContainer({tags}){
    const styles = useStyles();
    return(
       <div>
        {tags.map((tag)=>(
            <Chip className={styles.tag} 
            label={tag} 
            variant="outlined" 
            key={tag}></Chip>
        ))}
       </div> 
    )
}

function Project({title, description, tags, links}){
    const styles = useStyles();
    return <Grid item>
        <Card className={styles.card}>
            <div>
            <CardContent>
                <Typography variant='h5' paragraph>
                {title}
                </Typography>
                <Typography variant='subtitle1' paragraph>
                {description}
                </Typography>
                <Hidden mdUp>
                <TagsContainer tags={tags}/>
                </Hidden>
            </CardContent>
            
            <CardActions>
                {/* <div className={styles.links}>
                {links.map((linkitems)=>(
                    <IconButton href={linkitems.href} key={linkitems.href}>
                    <linkitems.icon/>
                    </IconButton>
                ))}
                </div> */}
                <Hidden smDown>
                <TagsContainer tags={tags}/> 
                </Hidden>
            </CardActions>
            </div>
            </Card>
        </Grid>;
}

export default function Projects() {
    // const styles = useStyles();
  return (
    <Container maxWidth="md" id="projects">
        <Box pt={8} mb={2}>
        <Typography variant='h4'>Projects</Typography>
        <Grid container direction="column" spacing={4}>
        {projectData.map((data)=>(
            <Project {...data}/>
        ))}
        </Grid>
        </Box>
      </Container>
  )
}
