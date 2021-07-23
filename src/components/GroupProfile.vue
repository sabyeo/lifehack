<template>
  <div>
    <div class='outer' v-for="member in group" v-bind:key="member.accountDetail.email">
      <div class='outer' v-if="member.accountDetail.email != ownEmail">
        <h2>{{member.accountDetail.name}}</h2>
        <a v-bind:href="'https://t.me/'+ member.accountDetail.tele">Contact via Telegram!</a>
      </div>
    </div>
    <p>Common Modules:</p>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Array,
    },
    ownModules: {
      type: Array,
    },
    ownEmail: {
      type: String,
    }
  },
  data(){
    return{
        groupList: [],
        groupCommonModules: [],
      }
  },
  methods:{
  },
  created() {
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

.outer {
  padding: 0;
  margin: 0;
}
</style>