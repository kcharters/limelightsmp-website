<script setup>

import { useDatabaseList } from 'vuefire'
import { ref as dbRef, } from "firebase/database";
import { db } from './firebase'
const todos = useDatabaseList(dbRef(db, 'members'))

</script>

<template>
  <div v-for="todo in todos" :key="todo.id" class="img__wrap">
    <div class="card">
      <img :src="'./src/assets/Website-skins/' + todo.name + '.png'" class="card-img-top img__img" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ todo.name }}</h5>
        <div class="img__description_layer">
          <div v-for="link in todo.links.split(',')">
            
           <a :href="link" class="img__description">{{ link }}</a> 
          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
