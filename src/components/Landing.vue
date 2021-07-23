

<template>
  <div class="main">
    <h1 id="title">Dashboard</h1> 
      <p>This page is only visible to users that are currently logged in</p>
  </div>
</template>

<script>
  export default {
       beforeCreate: function() {
          document.body.className = 'about';
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    position: relative;
    text-align: left;
    margin-left: 10%;
    
}
#desc{
    font-size: 30px;
    
}

h1{
    position:relative;
    margin-left: 10%;
    margin-top:10%;
    text-align: left;
    font-size:60px;
    font-weight: lighter;
}

</style>
