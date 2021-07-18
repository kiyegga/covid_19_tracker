import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'

const url ='https://covid19.mathdro.id/api'
const DataContext = React.createContext()

 export const DataProvider = ({children}) =>{
    const [load, setLoad] = useState(true)
    const [data, setData] = useState({})

    const fetchData = async () =>{
        setLoad(true)
        try {
           const {data} = await axios.get(url) 
           const modifiedData ={
               confirmed: data.confirmed,
               recovered: data.recovered,
               deaths: data.deaths,
               lastUpdate: data.lastUpdate,
           }
           setData(modifiedData)
           setLoad(false)
        } catch (error) {
           setLoad(false)
          console.log(error);
        }
    } 


    useEffect(() => {
     fetchData()
        
    }, [])

    return <DataContext.Provider value={{
        load,
        data
    }}>
        {children}
    </DataContext.Provider>
}

export const useGlobalContect = () =>{
    useContext(DataContext);
}

//export default useGlobalContect