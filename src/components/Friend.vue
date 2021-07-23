<template>
  <div>
    <h1 id='title'>{{ msg }}</h1>
    <div v-for="friend in otherUsers.filter(value => !this.friendsEmail.includes(value.email))" v-bind:key="friend.email">
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
      msg: 'Find a Friend',
      userModules: [],
      otherUsers: [],
      friends: [],
      friendsEmail:[]
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
            item = doc.data(); // each user in database (all users) 4
            if (item.accountDetail.email != user.email) {
              this.otherUsers.push(item.accountDetail)
            }
            })
            // var pairings = userRef.pair;
            // console.log(pairings);
          });
        }
      },
      getFriends: function() {
        var user = auth.currentUser;
        if (user) {
          var userRef = database.collection("user").doc(user.email); // current user
            userRef.get().then((doc) => {
              if (doc.exists) {
                let pairRefList = doc.data().pair
                pairRefList.forEach((ref) => { // each pair of the current user 1
                  ref.get().then(snapshot => {
                    var memberRefList = snapshot.data().members
                    memberRefList.forEach((memberRef) => { // each member of the pair of the current user 2
                      memberRef.get().then(snapshot => {
                        if (snapshot.exists) {
                          this.friends.push(snapshot.data().accountDetail);
                          this.friendsEmail.push(snapshot.data().accountDetail.email);
                          console.log(this.friends)
                        }
                      })
                    })
                  })
                })
              }
            })
        }
    },
    // if ((item.accountDetail.email != snapshot.data().accountDetail.email) && (!(item.accountDetail.email in this.otherUsers))) {//HARDCODE TO CHANGE
    //                         this.otherUsers.push(item.accountDetail.email)
    //                         console.log(this.otherUsers)
    //                       }
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
      this.getOtherUsers();
      this.getFriends();
  },
  created() {
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title{
  margin-right:15%;
}
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