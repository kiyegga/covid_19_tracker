import React, {useState, useEffect} from 'react'
// import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2'
import { StylesProvider } from '@material-ui/styles';
import styles from './Chart.module.css'

// const url ='https://covid19.mathdro.id/api'


function Chart(dailyData) {
    // const [dailyData, setDailyData] = useState([])
     console.log(dailyData);
     const { confirmed, recovered, deaths, lastUpdate} = dailyData;

    //  const fetchDailyData = async () =>{
    //   try {
    //     const fetchAPI = await axios.get(`${url}/daily`) 
    //     console.log(fetchAPI);
    //     setDailyData(fetchAPI)
        
    //   } catch (error) {
    //     console.log(error);
        
    //   }
    // }
    
    // useEffect(() =>{
    //   fetchDailyData()
    // },[])

    const lineChart =(
        dailyData.length !== 0 ?(
        <Line 
        data={{
            labels: dailyData(({ data }) => data),
            dataset: [{
                data: dailyData(({ confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            }, {
                data: dailyData(({ deaths }) => deaths),
                label: 'Infected',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0,0, 0.5)',
                fill: true, 
            }],
        }}
        />): null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart
