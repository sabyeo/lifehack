<template>
  <div>
    <h2>{{friend.accountDetail.name}}</h2>
    <h4>Common Modules:</h4>
    <li v-for="mod in friend.accountDetail.modules.filter(value => this.ownModules.includes(value))" v-bind:key="mod">
        {{mod}}
    </li>
    <div id='buttonDiv'>
      <a v-bind:href="'https://t.me/'+ friend.accountDetail.tele" target="_blank">
        <!-- HARDCODE USER TO CHANGE-->
        <button class="ui button">CONTACT</button> 
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
    },
    ownModules: {
        type: Array,
    }
  },
}
</script>

<style scoped>
div {
    background-color: #A8DADC;
    margin: 20px 40px;
    border-radius: 20px;
    padding: 10px
}

h2, h4 {
    margin: 5px
}

p {
    margin: 5px;
}

#buttonDiv {
  padding: 0;
  margin: 5px;
  margin-top: 15px;
}
</style>