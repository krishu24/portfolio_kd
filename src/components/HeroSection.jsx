import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Social from './Social';
import Hidden from '@material-ui/core/Hidden'
import Zoom from '@material-ui/core/Zoom'
import {StaticImage} from 'gatsby-plugin-image'
import backimg from '../images/backimg.jpg'

const useStyles = makeStyles((theme) =>({
    section: {
        height: "90vh",
        position: "relative"
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.4)",
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2
      },
      heroImage:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 1
      },
    content:{
        height: "100%",
        zIndex: 100,
        position: 'relative'
    },
    container:{
        height: "100%"
    },
    anim:{
        animation: `$trackingInExpand 0.7s ${theme.transitions.easing.easeInOut}`,
    },
    "@keyframes trackingInExpand": {
        "0%": {
          spacing: -0.5,
          opacity: 0
        },
        "40%": {
          opacity: 0.6,
        },
        "100%": {
          opacity: 1,
        }
      }    
    
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  // https://images.unsplash.com/photo-1559163387-e46e8dcb27f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZSUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60
  return (
    <Paper className={styles.section} pt={8} id="about">
        <StaticImage className={styles.heroImage} src={backimg}></StaticImage>
        <div className={styles.overlay}>
            <Container className={styles.container} maxWidth="md">
                <Grid 
                    className={styles.content} 
                    container 
                    justifyContent="space-between"
                    alignItems="center">
                    <Zoom in={shouldShow}>
                    <Grid item sm={8}>
                    <Typography component="h1" 
                        variant="h4" align="left">
                           Hey, There 
                        </Typography>
                        <Typography component="h1" 
                        variant="h1" align="center">
                          I'm Krishna
                            </Typography>
                            <Typography component="h1" 
                        variant="h4" align="right">
                           An ambitious Web Developer
                        </Typography>
                        {/* <Box my={2}>
                        <Button href="mailto:krishna.desai240391@gmail.com" 
                        variant="outlined" color="secondary">
                            Get in touch
                        </Button>
                        </Box> */}
                    </Grid>
                    </Zoom>
                    <Hidden xsDown>
                    <Grid item>
                        <Social direction="column"></Social>
                    </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </div>
    </Paper>
  )
}
