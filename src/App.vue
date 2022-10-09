<template>
  <main class="p-0" id="main"  style="background: url(https://template.hasthemes.com/moto/moto/img/bg/1.webp) left repeat-y; background-size: auto;">
    <TopHeader />
    <second-section />
    <one-section />
    <third-section />
    <fourth-section />
    <fifth-section />
  </main>
</template>
<script>

import TopHeader from "./components/TopHeader.vue";
import SecondSection from "./components/SecondSection.vue";
import OneSection from "./components/OneSection.vue";
import ThirdSection from "./components/ThirdSection.vue";
import FourthSection from "./components/FourthSection.vue";
import FifthSection from "./components/FifthSection.vue";

export default {
components: { FifthSection, ThirdSection, SecondSection, OneSection, TopHeader,FourthSection},

mounted() {
    scrollTo(0,0)
    this.refreshHome()

},

methods:{

  refreshHome(){
    if(document.getElementById("homeButton") !== null){
      document.getElementById("homeButton").click()
    }
  }

}
}
</script>
<style lang="scss">
@import "../src/components/style/style.css"
</style>
