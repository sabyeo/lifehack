<template>
  <div class="main">
    <h1 id="title"> Find a group </h1> 
    <p id="desc"> Select the pair you wish to find a group for: </p>
    
    <li v-for="item in pairList" v-bind:key="item.id">
      <router-link :to="'/recommended-groups/' + item[0].id">
      {{item[1]}}
      {{item[0].data().common_modules}} 
      </router-link>
      <p>{{item[0].id}}</p>
    </li>
    
  </div>
</template>

<script>
import { database,auth } from "@/firebase/";
  export default {
    data() {
      return{
        pairList: [],
        pairMemberList:[],
        pairCommonModList: []

      };
    },
    beforeCreate: function() {
      document.body.className = 'about';
    },

    methods: {
      fetchItems: function () {
        var user = auth.currentUser;
        if (user){
        database
          .collection("user")
          .get()
          .then((querySnapShot) => {
            // let item = {};
            querySnapShot.forEach((doc) => {
              if (doc.id == 'UA2rWxwH2XPxOypfWGZP'){
                // item = doc.data();
                doc.data().pair.forEach((pair) => {
                  pair.get().then(snapshot => {
                    let members = []
                    snapshot.data().members.forEach((member) => {
                      member.get().then(snapshot2 => {
                        members.push(snapshot2.data().accountDetail.name)
                        
                      })
                    })
                    this.pairList.push([snapshot,members])
                });
              })
            }
          });
        
        })
      }
      }
    },

     created() {
      this.fetchItems()
        
    },
    mounted() {
      console.log('PAIRLIST')
      console.log(this.pairList)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
