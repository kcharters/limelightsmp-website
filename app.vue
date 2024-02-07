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
<template>
  <div class="container">
  <div v-for="members in myJson" class="row">
    <div v-for="names in members" class="col-sm-3" >
      <div class="card " style="width: 18rem;">
        <img :src="'../images/' + names.name + '.png'" class="card-img-top" alt="...">
        <div v-if="names.enabled == true" class="card-body">
          <h5 class="card-title">{{ names.name }}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <div v-for="link in splitJoin(names.links)">
            <a :href="link" class="">{{ link }}</a>
          </div>
        </div>
      </div>
</div>
</div>
    </div>
</template>

<style type="css" scoped>
/* relevant styles */
</style>
