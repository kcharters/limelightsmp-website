<script>
import json from './members.json'
export default {
  data() {
    return {
      myJson: json
    }
  },
  methods: {
    splitJoin(theText) {
      return theText.split(',');

    }
  }
}
</script>

<template >
  <div class="container">
  <div v-for="members in myJson" class="row">
    <div v-for="names in members" class="col-sm-3" >
      <v-hover v-slot:default="{ isHovering, props }">
      <v-card :elevation="isHovering ? 16 : 2"
          :class="{ 'on-hover': isHovering }"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props">
        <img :src="'../images/' + names.name + '.png'" class="card-img-top" alt="...">
        <div v-if="names.enabled == true" class="card-body">
          <h5 class="card-title">{{ names.name }}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <div v-for="link in splitJoin(names.links)">
            <a :href="link" class="">{{ link }}</a>
          </div>
        </div>
      </v-card>
    </v-hover>
</div>
</div>
    </div>
</template>
<style lang="scss" scoped>
.v-card.on-hover.v-theme--dark
{
  background-color: rgba(#FFF, 0.8),
  
  }
  .v-card__text{
    color: #000
  }
</style>
