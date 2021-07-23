<template>
  <div>
      <h2>{{friend.accountDetail.name}}</h2>
      <p>Common Modules:</p>
      <li v-for="mod in friend.accountDetail.modules.filter(value => this.ownModules.includes(value))" v-bind:key="mod">
          {{mod}}
      </li>
      <a v-bind:href="'https://t.me/'+ friend.accountDetail.tele">Contact via Telegram!</a>
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

h2 {
    margin: 5px
}

p {
    margin: 5px;
}
</style>