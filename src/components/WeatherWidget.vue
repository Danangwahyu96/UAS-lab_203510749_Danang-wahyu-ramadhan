<template>
    <q-page padding>
      <q-card>
        <q-card-section>
          <h2>Weather Widget</h2>
          <q-input v-model="location" placeholder="Enter location" />
          <q-btn @click="getWeather">Get Weather</q-btn>
        </q-card-section>
        <q-card-section v-if="weather">
          <h3>{{ weather.name }}</h3>
          <p>{{ weather.main.temp }} °C</p>
          <p>{{ weather.weather[0].description }}</p>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        location: '',
        weather: null
      };
    },
    methods: {
      async getWeather() {
        const API_KEY = 'YOUR_API_KEY';
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${API_KEY}&units=metric`);
        this.weather = response.data;
      }
    }
  };
  </script>
  