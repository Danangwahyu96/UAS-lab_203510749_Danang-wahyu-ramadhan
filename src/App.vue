<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>Weather App</q-toolbar-title>
        <q-btn flat to="/">Home</q-btn>
        <q-btn flat to="/task1">Task 1</q-btn>
        <q-btn flat to="/task2">Task 2</q-btn>
        <!-- Tambahkan tombol untuk halaman lainnya -->
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
