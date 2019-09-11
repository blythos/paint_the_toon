<template lang="html">
  <form id="favlist">
    <div v-for="mural of this.favourites">
      <div id="favDetail">
        <img :src="mural.image">
        <h3>{{mural.name}}</h3>
        <!-- <p>{{mural.location.area}}</p> -->
        <button @click.prevent="handleDelete(mural._id)">Delete</button>
      </div>
      <!-- <input type="text"> -->
      <div id="faveInput">
        <textarea name="message" v-model="review" placeholder="submit your reviews!" rows="10" cols="30">
        </textarea>
        <button @click="handleSubmit">Submit</button>

      <ul>
        <li>
        {{review}}
        </li>
      </ul>

      </div>
    </div>
  </form>


</template>

<script>
import{eventBus} from '@/main.js';
import Service from '@/services/Service.js';

export default {
  name: 'favourites-view',
  props: ['chosenMural','favourites'],
  data(){
    return{
      review: "",
      allFavourites: []

    }
  },
  Mounted(){

  },
  methods: {

    handleDelete(id){
      let index = this.favourites.findIndex(favourite => favourite._id === id)
      this.favourites.splice(index, 1)
    },

    handleSubmit(){




    }
  }

}

</script>


<style lang="css" scoped>
#favlist {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

#favDetail {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

#faveInput {

}

img {
  max-width: 6vw;
  max-height: 8vh;
  margin-right: 0.5vw;
  margin-bottom: 0.5vw;
}

</style>
