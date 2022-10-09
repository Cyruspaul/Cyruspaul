<template>
  <!--  Header Importation-->
  <HeaderSection/>
  <div class="w-100">

    <!--  Home Link-->
    <div class="container-fluid p-0  page-header " style="height: 100vh; min-height: 400px">
      <div class="h-100 d-flex align-items-center text-sm-center justify-content-center">
        <div class="p-5" style="width: 100%; max-width: 900px;">
          <h5 v-motion :initial="{opacity:0}" :enter="{opacity: 1, transition:{duration:1500,easeIn:'easein',delay:500}}" class="text-white text-uppercase mb-md-3">Agency</h5>
          <h1 v-motion :initial="{opacity:0, scale:0.5}" :enter="{opacity: 1,scale:1, transition:{duration:300,ease:'easeIn', delay:800}}" class="display-3 text-white mb-md-4">Hope Consulting  & Trading Company S.L</h1>
<!--          Highly Professional Team Members-->
        </div>
      </div>
      <div class="position-absolute bottom-0 end-0 start-0 text-center">
        <a v-motion :initial="{opacity:0.5,y:-50}" :enter="{opacity:1, y:-30, transition:{repeat: Infinity,repeatType: 'mirror',duration:1000,easeIn:'easein',delay:1300}}" class="btn  px-1 py-1 border-top border-bottom text-white rounded-pill " style="bottom: 0; left: 45%" v-scroll-to="'#Two'">
          <i class="bi bi-arrow-down" />
        </a>
      </div>

    </div>

  </div>
</template>

<script>
import HeaderSection from "./HeaderSection.vue";

export default {
  components: {HeaderSection},
  name: "TopHeader",

}
</script>

<style scoped>
@import "@/components/style/topheader.css"
</style>
