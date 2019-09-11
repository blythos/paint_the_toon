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
        <textarea name="message" v-model="review" placeholder="submit your reviews!">
        </textarea>
        <button @click="handleSubmit">Submit</button>

      <ul>
        <li>
        {{review}}
        </li>
      </ul>
      <hr>
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
  margin-bottom: 4vh;
}

#favDetail {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
}

#faveInput {

}

img {
  max-width: 6vw;
  max-height: 8vh;
  margin-bottom: 0.5vw;
}

button {
  height: 4vh;
  width: 10vw;
  color: white;
  background: darkcyan;
  font-weight: 600;
  cursor: pointer;
}

h3 {
  margin-left: 2vw;
  margin-right: 2vw;
}

textarea {
  width: 40vw;
  height: 5vh;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

</style>
