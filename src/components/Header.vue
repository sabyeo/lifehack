<template>
   <div id="main">
    <header>
        <nav>
        <h1><router-link to="/" exact id="index">{{ msg }}</router-link></h1>
        <div class="links">
          <a>
            <router-link to="/about" exact>About Us</router-link>
          </a>
          <a>
            <router-link to="/groups" exact>Find a Group</router-link>
          </a>
          <a>
            <router-link to="/friend" exact>Find a Friend</router-link>
          </a>
          <a>
            <router-link to="/main" exact>Home</router-link>
          </a>
        </div>
        </nav>
    </header>
   </div>
  
</template>

<script>
import $ from "jquery";
export default {
  data(){
    return{
        msg: 'LifeHack 2021'
    }
  },
  mounted() {
    $(document).ready(function() {
      $(".ui  .item").on("click", function() {
        console.log("removed");
        $(".ui .item").removeClass("active");
        $(this).addClass("active");
      });
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{
    background-color: #1D3557;
    border-bottom-style: solid;
    border-bottom-color: white;
    border-bottom-width: 1px;
    height:100px;
    width: 100%;
    top: 0;
    padding-bottom: 5px;
}

h1 {
    float: left;
    margin-left: 2vw;
    text-align: center;
    font-weight:bolder;
    font-size:40px;
    text-decoration: none;
}

a{
  color:#F1FAEE;
  text-decoration: none;
  float: right;
  margin-right: 10px;
}

.links{
  padding-right: 10px;
  float: right;
  margin-top: 70px;
}

#index{
  margin-top: 15px;
}
</style>
