<template>
        <div>
            <a href="https://t.me/" onclick="location.href=this.href + this.friend.accountDetail.tele; return false;">link</a>
            <h2>{{friend.accountDetail.name}}</h2>
            <p>Similar Modules:</p>
            <li v-for="mod in friend.accountDetail.modules.filter(value => this.ownModules.includes(value))" v-bind:key="mod">
                {{mod}}
            </li>
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