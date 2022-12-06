import React,{useState} from 'react'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {navigationLinks} from '../variables'
import avtr from '../images/avatar.png'

const useStyles = makeStyles((theme) =>({
    link:{
        marginRight: 20,
    },
    avatar:{
        marginRight:"auto",
        color: "white",
        background: "black",
        height:40
    },
}))

export default function Header() {
    const styles = useStyles();
    const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' color='default'>
       <Container maxWidth='md'>
        <ToolBar disableGutters>
            <Avatar className={styles.avatar} src={avtr}>
                {/* K */}
            </Avatar>
            <Hidden xsDown>
            {navigationLinks.map((item) =>(
                <Link 
                className={styles.link}
                color="textPrimary" 
                variant="button" 
                underline="none" 
                href={item.href}>
                    {item.name}
                </Link>
            ))}
            </Hidden>
            <Hidden smUp>
                <IconButton>
                <MenuIcon onClick={()=> setOpen(true)}/>
                </IconButton>
            </Hidden>
        </ToolBar>
     </Container>
     <SwipeableDrawer 
        anchor="right" 
        open={open} 
        onOpen={()=>setOpen(true)} 
        onClose={()=>setOpen(false)}>
        <div>
            <IconButton>
                <ChevronRightIcon onClick={()=>setOpen(false)}/>
            </IconButton>
        </div> 
            <Divider/>
                <List>
                    {navigationLinks.map((item) =>(
                <ListItem>
                <Link 
                    className={styles.link}
                    color="textPrimary" 
                    variant="button" 
                    underline="none" 
                    href={item.href}>
                        {item.name}
                </Link>
                </ListItem>
                    ))}
                </List>
     </SwipeableDrawer>
    </AppBar>
  )
}
