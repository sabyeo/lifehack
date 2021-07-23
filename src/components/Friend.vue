<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="friend in otherUsers" v-bind:key="friend.accountDetail.email">
      <FriendProfileFull v-bind:friend="friend" v-bind:ownModules="userModules"></FriendProfileFull>
    </div>
  </div>
</template>

<script>
import { database, auth } from "@/firebase/";
import FriendProfileFull from './FriendProfileFull.vue';

export default {
  name: 'Friend',
  data(){
    return{
      msg: 'Find New Friends',
      userModules: [],
      otherUsers: [],
      }
  },
  components: {
    FriendProfileFull,
  },
  methods: {
    fetchItems: function () {
      var user = auth.currentUser;
      if (user) {
        database
        .collection("user")
        .doc(user.email) //TO REPLACE HARDCODE
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            // get modules
            this.userModules = documentSnapshot.data().accountDetail.modules
            console.log('User Modules')
            console.log(this.userModules)
          }
        });
      }
    },
    getOtherUsers: function() {
      var user = auth.currentUser;
      if (user) {
        database
        .collection("user")
        .get()
        .then(querySnapshot => {
          let item = {};
          querySnapshot.forEach((doc) => {
            item = doc.data();
            if (item.accountDetail.email != user.email) {
              this.otherUsers.push(item)
            }
          });
        })
      console.log(this.otherUsers)
      }
    },
    // getSimilarUsers: function() {
    //   let similarUserList = []
    //   for (const user in otherUsers) {
    //     console.log('iterating')
    //     const otherModules = user.accountDetail.modules
    //     const similarity = this.userModules.filter(value => otherModules.includes(value))
    //     similarUserList.push({
    //       email: user.accountDetail.email,
    //       commonModules: similarity
    //     })
    //   }
    //   similarUserList.sort((a, b) => (a.commonModules.length > b.commonModules.length) ? 1 : -1)
    //   console.log('Similar User')
    //   console.log(similarUserList)
    // },
  },
  mounted() {
      this.fetchItems();
      this.getOtherUsers()
  },
  created() {
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
