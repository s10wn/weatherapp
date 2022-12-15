import React from 'react';
import { StyleSheet} from 'react-native';
import { Alert} from 'react-native';
import * as Location from 'expo-location';
import { Loading } from './Loading';
import axios from 'axios';
import { Weather } from './Weather';

const API = "b2db9afcf37012a81fbed069553900c4"

export default class extends React.Component{

  state= {
    isLoading: true,
  }
  
  // https://api.openweathermap.org/data/2.5/weather?lat=37.3306811&lon=-122.02990041&appid=b2db9afcf37012a81fbed069553900c4
  getWeather = async (a,b) => {
    // 
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=${API}&units=metric`);
    console.log(data)
    this.setState({
      isLoading: false,
      temp: data.main.temp,
      con: data.weather[0].main,
    })
  }

  getLocation = async () => {
   
    Location.requestBackgroundPermissionsAsync();
    const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
    this.getWeather(latitude, longitude)

 
    // TODO: всделать api

    //  console.log(coords.latitude, coords.longitude);
     
  }

  componentDidMount () {
    this.getLocation();
  }
    render() {
      const {isLoading, temp, con} = this.state
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} con={con}/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C724'
  },
});