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
  <div v-for="members in myJson">
    <div v-for="names in members" class="img__wrap">
      <div class="card">
        <img :src="'../images/' + names.name + '.png'" class="card-img-top img__img" alt="...">
        <div v-if="names.enabled == true" class="card-body">
          <h5 class="card-title">{{ names.name }}</h5>
          <div v-for="link in splitJoin(names.links)" class="img__description_layer">
            <a :href="link" class="row img__description">{{ link }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="css" scoped>
/* relevant styles */
.img__wrap {
  position: relative;
  display: inline-block;
}

.img__img {
  vertical-align: bottom;
}

.img__description_layer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(196, 201, 231, 0.6);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  display: block;
  align-items: center;
  justify-content: center;

  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
}

.img__wrap:hover .img__description_layer {
  visibility: visible;
  opacity: 1;
}

.img__description {
  transition: .2s;
  transform: translateY(1em);
  text-align: center;
}

.img__wrap:hover .img__description {
  transform: translateY(0);
}
</style>