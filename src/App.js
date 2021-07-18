import axios from 'axios';
import React, { useEffect, useState} from 'react'
//import {useGlobalContect} from './context'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'


const url ='https://covid19.mathdro.id/api'

function App() {
  const [data, setData] = useState()
  const [dailyData, setDailyData] = useState([])

    const fetchData = async () =>{
        try {
           const {data} = await axios.get(url) 
          // const response = await fetch(url)
          // const  data = await response.json()
           const modifiedData ={
               confirmed: data.confirmed,
               recovered: data.recovered,
               deaths: data.deaths,
               lastUpdate: data.lastUpdate,
           }
           setData(modifiedData)
         //  console.log(data);
           
          } catch (error) {
          console.log(error);
        }
    } 

      const fetchDailyData = async () =>{
      try {
        const fetchAPI = await axios.get(`${url}/daily`) 
        const modifiedDailyData = fetchAPI.map((dailyData) =>({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate
        }))
        console.log(modifiedDailyData);
        setDailyData(modifiedDailyData)
        
      } catch (error) {
        console.log(error);
        
      }
    }


    useEffect(() => {
     fetchData()
     fetchDailyData()
       
    },[])
  // console.log(data); 
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker dailyData={dailyData}/> 
      <Chart />
    </div>
  );
}

export default App;
