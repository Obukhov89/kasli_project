<template>
<div class="containerList">
  <input class="search" v-model="input_word" type="text" placeholder="Поиск">
  <ul class="ul_list">
    <li class="item" v-for="item in searchItem" :key="item.id">
      <div class="containerItem">
        <img class="img_item" :src= item.img>
        <div class="description">
          <p>{{item.name_item}}</p>
          <p>Автор: {{item.name_author}}</p>
          <p>Отливка: {{item.date_create}}</p>
          <p>{{item.description_item}}</p>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import data from "@/assets/data.js";
export default {
  name: "ListItems",

  data(){
    return{
      input_word:'',
      data : [],
      arrItems: data
    }
  },
  created() {
    this.data = this.arrItems
  },

  computed:{
    searchItem(){
      return this.data.filter(elem => {
        return elem.name_item.toLowerCase().includes(this.input_word)
      })
    }
  },

  methods:{

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  .containerList{
    height: 100%;
  }

  .search{
    padding-left: 10px ;
    margin: 1rem;
    width: 400px;
    height: 25px;
    border: 3px solid #d0a103;
    border-radius: 10px;
  }

  .ul_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .item{
    margin-top: 2rem;
    list-style-type: none;
  }

  .img_item{
    border-radius: 10px 0 0 10px;
  }

  .containerItem{
    border: 2px solid #d0a103;
    width: 800px;
    height: 600px;
    background: white;
    border-radius: 10px;
    display: flex;

  }

  .containerItem p{
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    color: #d0a103;
  }
</style>