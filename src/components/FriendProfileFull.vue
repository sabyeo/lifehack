<template>
  <div>
    <div id='left'>
      <h2>{{friend.name}}</h2>
      <h4>Common Modules:</h4>
      <li v-for="mod in friend.modules.filter(value => this.ownModules.includes(value))" v-bind:key="mod">
          {{mod}}
      </li>
    </div>
    <div id='right'>
      <a v-bind:href="'https://t.me/'+ friend.tele">
        <!-- HARDCODE USER TO CHANGE-->
        <button class="ui button" v-on:click='partnerMade(friend)'>CONNECT</button> 
      </a>
    </div>
  </div>
</template>

<script>
import { database, auth } from "@/firebase/";
import firebase from "firebase";

export default {
  props: {
    friend: {
      type: Object,
    },
    ownModules: {
        type: Array,
    }
  },
  methods: {
    partnerMade: function(u2) {
      var user = auth.currentUser;
      if (user) {
        const u1_ref = 'user/' + user.email // HARDCODE TO CHANGE U1
        const u2_ref = 'user/' + u2.email
        
        database.collection('pair').add({
          common_modules: u2.modules.filter(value => this.ownModules.includes(value)),
          members: [database.doc(u1_ref), database.doc(u2_ref)], 
        }).then(function(docRef) {
          const pairId = docRef.id;
          database.doc(u1_ref).update({
            pair: firebase.firestore.FieldValue.arrayUnion(database.doc('pair/' + pairId))
          })
          database.doc(u2_ref).update({
            pair: firebase.firestore.FieldValue.arrayUnion(database.doc('pair/' + pairId))
          })
        })
      }

      
    }
  },
}
</script>

<style scoped>
div {
    background-color: #A8DADC;
    margin: 20px 40px;
    border-radius: 20px;
    padding: 10px 20px;
    text-align:left;
    overflow: hidden;
}

h2 {
    margin: 5px
}

h4 {
  margin: 10px 5px 5px 5px;
}

p {
    margin: 5px;
}

li {
  float: left;
  list-style-type: none;
  padding: 5px 20px 5px 5px;
}
#left {
  float: left;
  margin: 5px;
}
#right {
  float: right;
  margin: 5px;
  margin-top: 40px;
}
</style>