<template>
<div class="container">
  <div class="hello">
    <img class="mainImg" src="../assets/main-page.png">
    <div class="text">
      <p class="main_title">Каслинское художественное литье из чугуна</p><br>
      <p class="sub_title_main">Из собрания Челябинского государственного музея<br>изобразительных искусств</p>
      <button @click="goExhibition" class="btnStart">Коллекция</button>
    </div>

  </div>

</div>
</template>

<script>
import router from "@/router";

export default {
  name: 'HeadPage',

  methods:{
    goExhibition(){
      router.push({name: 'ListItems'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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

.container{
  width: 1400px;
  margin: 0 auto;
}

.main_title{
  font-family: Montserrat, sans-serif;
  font-size: 70px;
  font-weight: bold;
  color: #d0a103;
}

.sub_title_main{
  font-family: Montserrat, sans-serif;
  font-size: 35px;
  color: #d0a103;
}

.hello{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 956px;
  background-color: lightgray;
}

.text{
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subTitle{
  margin-right:183px;
}

.mainImg{
float: left;
}
.main_title{

}

.btnStart{
  color: white;
  width: 180px;
  height: 45px;
  background-color: #d0a103;
  border-radius: 5px;
  border: none;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
}
</style>
