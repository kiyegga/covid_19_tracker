import React from 'react'
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core'
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

 //function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {
function Cards({data}) {   
    // if(!confirmed){
    //     return 'Loading....'
    // }
     console.log(data); //data
     const { confirmed, recovered, deaths, lastUpdate} = data;
     //console.log(confirmed);
     ////////////------------------------
    return (
        <div className={styles.container}>
            {/* <h1>{confirmed.value}</h1> */}
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Infected</Typography>
                       <Typography variant="h5">
                           <CountUp start={0} end={confirmed.value} duration ={2.5} separator=","/>
                        </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of active cases of COVID-19</Typography>
                   </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                       <Typography variant="h5">
                           <CountUp start={0} end={recovered.value} duration ={2.5} separator=","/>
                        </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                   </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                       <Typography variant="h5">
                           <CountUp start={0} end={deaths.value} duration ={2.5} separator=","/>
                        </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                   </CardContent>
                </Grid>
            </Grid>
         
        </div>
    )
}

export default Cards
  