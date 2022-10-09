<template>
  <div id="Top"  class="container-fluid nav-bar p-0" style="font-size:110%;">
      <nav class="navbar navbar-expand-md px-4 fixed-top  shadow-sm navbar-custom">

        <a class="navbar-brand ms-md-3 ms-lg-4" href="/">
          <!-- <h4 class="m-0 text-secondary"><span class="text-warning">H</span>ope<span class="text-primary">C</span>op.
          </h4> -->
          <img class="img-fluid" width="50" src="../assets/logo.png" />
        </a>
        <button aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler btn btn-outline-light border-0" data-bs-target="#navbarCollapse" data-bs-toggle="collapse"
                type="button">
          -
        </button>

        <div id="navbarCollapse" class="collapse ps-2 px-lg-5 justify-content-end navbar-collapse ">
          <div class="navbar-nav ml-auto py-0">
            <a href="#" id="homeButton" v-scroll-to="'#Top'" v-on:click="this.getActive(0)" class="nav-item nav-link">Home</a>
            <a href="#"  v-scroll-to="'#Two'" v-on:click="this.getActive(1)"  class="nav-item nav-link">Services</a>
            <a href="#" v-scroll-to="'#One'" v-on:click="this.getActive(2)" class="nav-item nav-link">About Us</a>
            <a href="#" v-scroll-to="'#Third'"  v-on:click="this.getActive(3)" class="nav-item nav-link">Choose Us</a>
            <a href="#" v-scroll-to="'#Four'"  v-on:click="this.getActive(4)"  class="nav-item nav-link">Team</a>
            <a href="#" v-scroll-to="'#Second'"  v-on:click="this.getActive(5)"  class="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
const links = document.getElementsByClassName("nav-link")
const navbarCollapse = document.getElementsByClassName("navbar-collapse")
 export default {
  name:"HeaderSection",
   methods:{
    getActive(option){
      for (let optionKey=0; optionKey < links.length; optionKey++) {
        if (option === optionKey){
          links[optionKey].classList.add("active")
        }else{
          links[optionKey].classList.remove("active")
        }
      }

      navbarCollapse[0].classList.remove("show")
    }
  }

 }

</script>

<style lang="css">
@import "../components/style/header.css"
</style>
