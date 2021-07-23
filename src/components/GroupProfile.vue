<template>
  <div>
    <h2>{{group.groupName}}</h2>
    <p>Common Modules:</p>
    <li v-for="mod in group.common_modules" v-bind:key="mod">
        {{mod}}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: Array,
    },
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