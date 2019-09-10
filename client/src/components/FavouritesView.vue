<template lang="html">
  <form>
    <div v-for="mural of this.favourites">
      <p>{{mural.name}}</p>
      <button @click.prevent="handleDelete(mural._id)">Delete</button>
      <p>{{mural.location.area}}</p>
      <p><img :src="mural.image"></p>
      <!-- <input type="text"> -->
      <textarea name="message" v-model="review" placeholder="submit your reviews!" rows="10" cols="30">
      </textarea>
      <button @click="handleSubmit">Submit</button>

    <li>  {{review}}
      </li>
    </div>
  </form>


</template>

<script>
import{eventBus} from '@/main.js';

export default {
  name: 'favourites-view',
  props: ['chosenMural','favourites'],
  data(){
    return{
      review: ""
    }
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
</style>
