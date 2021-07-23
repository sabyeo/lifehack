<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li v-for="item in testlist" v-bind:key="item.field_1">
        {{item.field_1}}
    </li>
  </div>
</template>

<script>
import { database } from "@/firebase/";

export default {
  name: 'Home',
  data(){
    return{
      msg: 'This shall be our firebase test page',
      testlist: []
      }
  },
  methods: {
    fetchItems: function () {
      database
        .collection("Test")
        .get()
        .then((querySnapShot) => {
          let item = {};
          querySnapShot.forEach((doc) => {
            item = doc.data();
            this.testlist.push(item)
            
          });
        });
    }
  },
  created() {
      this.fetchItems();
      
  },
  mounted() {
      console.log(this.testlist)
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
