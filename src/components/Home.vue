<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="fill"><router-link to="/sign_up">Sign Up</router-link></button>

    <button class="fill"><router-link to="/sign_in">Log In</router-link></button> 

  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      msg: 'Connecting You with Study Buddies'
      }
  } 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top:25vh;
  font-size: 80px;
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
  color: #1d3557;
}
button {
  margin: 50px;
  font-family: inherit;
}
.fill {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.fill::after {
  content: "";
  background-color: #a8dadc;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.fill:hover::after {
  top: 0px;
  left: 0px;
}
</style>
