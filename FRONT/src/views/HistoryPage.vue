<template>
  <div class="home">
    <div>
      <button @click.prevent="getUsers">
        Узнать количество зарегистрированных пользователей
      </button>
      <button @click.prevent="deleteUsers">
        Cкрыть количество зарегистрированных пользователей
      </button>
      <ul v-for="user of users" :key="user">
        <li>Эмаил: {{ user.email }} ,Имя пользователя:{{ user.username }}</li>
      </ul>
    </div>
    <form>
      <input v-model="findText" placeholder="Поиск по титлу "/>
      <button @click.prevent="search">Go</button>
    </form>
    <form id="uploadForm " class=""></form>
<div class="">
    <ul class="row row-cols-1 row-cols-md-5 g-4">
      <li lass="list-group-item " v-for="image in test3" :key="image.url">
        <div
          class="сard col order-last"
          style="width: 18rem"
          @click="sel = image"
          :class="sel == image ? ' border border-danger' : ''"
        >
          <img
            :src="
              'http://localhost:1337' +
              image.attributes.image.data.attributes.url
            "
            class="card-img-top"
            alt=""
          />
          <div class="card-body">
            <ul class="card-title">
              <li>Титул : {{ image.attributes.message }}</li>
            </ul>
            <p class="card-text" @click="sel = null"></p>
            <MyComp :coments1="coments1" :movie="coments1.id" />
          </div>
        </div>
      </li>
    </ul>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import MyComp from "@/components/MyComp.vue";
export default {
  name: "HomeView",
  props: ["id"],
  components: {
    MyComp,
  },
  data() {
    return {
      obj: [
        {
          url: "",
          mes: "",
        },
      ],
      findText: "",
      users: "",
      test3: "",
      sel: null,
      coments: "",
      coments1: "",
      count: 0,
    };
  },

  methods: {
    historyPhoto() {
      this.getImages().then((response) => {
        this.test3 = response.data.data;
        console.log(this.test3);
        // this.obj[0].mes = respImg.map((el) => el.attributes.message);
        // this.test2 = respImg.map((el) => el.attributes.message)
        //console.log(this.test2);
        //respImg.map((el) => el.attributes.image.data);
        // respImg.map((el) => {
        //  console.log(el.attributes.image.data.attributes);
        //  return el.attributes.image.data
        //   ? this.images.push(el.attributes.image.data.attributes)
        //    : "test";
      });

      
    },

    
    getImages() {
      return axios.get("http://localhost:1337/api/posts?populate=image");
    },
    async addMessage() {
      return await axios
        .post("http://localhost:1337/api/comments?populate=*", this.coments)
        .then((response) => {
          console.log(response);
        });
    },
    getComents() {
      return axios
        .get("http://localhost:1337/api/comments?populate=*")
        .then((response) => {
          this.coments = response.data.data;
          console.log(response.data.data);
          this.coments1 = this.coments.map((el) => el.attributes);
          console.log(this.coments1);
        });
    },

    getUsers() {
      return axios.get("http://localhost:1337/api/users").then((res) => {
        this.users = res.data;
        console.log(this.users);
      });
    },
    deleteUsers() {
      this.users = "";
    },
    search() {
     this.test3 =  this.test3.filter(
        (el) => el.attributes.message == this.findText
      );
      
    },
  },

  beforeMount() {
    this.historyPhoto();
    this.getComents();
  },
};
</script>
<style>
.cardForm {
  
    

}
</style>