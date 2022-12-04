import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import {socialItems} from '../variables'


export default function Social({direction}) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => 
      <Grid item>
        <Link href={item.url}>
            <IconButton>
                <item.icon style={{height: 40, width: 40}}/>
            </IconButton>
        </Link>
      </Grid>
      )}
    </Grid>
  )
}
