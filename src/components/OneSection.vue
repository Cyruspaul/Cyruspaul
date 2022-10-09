<template>
  <section id="One"  class="mt-5 pt-5 PageField">
    <div  v-motion-slide-visible-once-bottom class="py-5 " >
      <div class="container pt-5  d-flex flex-column align-items-stretch">
        <div class="row mb-3 align-items-center justify-content-between pb-1">
          <div class="col-lg-5">
            <img alt=""
                 class="img-thumbnail p-3"
                 src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80">
          </div>
          <div v-motion-pop-visible-once class="col-lg-7 mt-5 mt-lg-0">
            <small class="headingHead text-uppercase font-weight-bold p-2 ">Who We Are</small>
            <h1 v-motion-slide-visible-once-left  class="mt-2 mb-4">Most Effective Creative Service Provider For Companies</h1>
            <p v-motion-slide-visible-once-right class="mb-4">
              The company arises as a result of the idea of providing a better service to custumers regarding the issue of imports and exports,
              as well as better processing for students abroad.
              We have been established to provide an excellent services for the best custumers satisfaction.
              We believe in keeping the custumers happy and providing them with products at a very competent price,
              we an excellent staffs who will guide you with their best ideas and knowledge of  the market.</p>
            <!--          <a href="/about" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Read More</a>-->
            <span class="float-end text-muted small text-decoration-underline">HopeCorp Signature</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-4">
      <div class="row gap-3">
        <!--Start single box-->
        <div class="col-sm-12 col-md boxes border p-5">
          <div class="">
            <div class="top">
              <h3>Innovative Works</h3>
            </div>
            <div class="text-holder">
              <p>How all this mistaken idea of denouncing pleasures and praising pain was born and we will give you a complete account of the system.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md boxes border p-5">
          <div class="">
            <div class="top">
              <h3>Certified Company</h3>
            </div>
            <div class="text-holder">
              <p>How all this mistaken idea of denouncing pleasures and praising pain was born and we will give you a complete account of the system.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md boxes border p-5">
          <div class="">
            <div class="top">
              <h3>Very Experienced</h3>
            </div>
            <div class="text-holder">
              <p>How all this mistaken idea of denouncing pleasures and praising pain was born and we will give you a complete account of the system.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  v-motion-slide-visible-once-bottom class="container" style="height: fit-content; min-height: 20vh; width: 100%">
      <hr class="my-sm-3 my-md-5 ">
      <div class="row mt-0">
        <aside class="counterAsideBlock text-center ">
          <div class="row g-3">
            <div v-motion-roll-visible-once-bottom class="col-6 col-md-3">
              <!-- cabColumn -->
              <div class="cabColumn">
                <h3 class="dataCount mb-1">
                  <VueCountUp
                      :delay="4000"
                      :duration="1000"
                      :endVal="5"
                      :options="{enableScrollSpy:true, useEasing: true, useGrouping:true,scrollSpyDelay:3000,scrollSpyOnce:true}"
                  />
                </h3>
                <h4 class="mb-0">Coffee Cups</h4>
              </div>
            </div>
            <div v-motion-roll-visible-once-left class="col-6 col-md-3">
              <!-- cabColumn -->
              <div class="cabColumn">
                <h3 class="dataCount mb-1">
                  <VueCountUp
                      :delay="4000"
                      :duration="1000"
                      :endVal="18"
                      :options="{enableScrollSpy:true, useEasing: true, useGrouping:true,scrollSpyDelay:3000,scrollSpyOnce:true}"
                  />
                </h3>
                <h4 class="mb-0">Satisfied Clients</h4>
              </div>
            </div>
            <div v-motion-roll-visible-once-bottom class="col-6 col-md-3">
              <!-- cabColumn -->
              <div class="cabColumn">
                <h3 class="dataCount mb-1">
                  <VueCountUp
                      :delay="4000"
                      :duration="1000"
                      :endVal="75"
                      :options="{enableScrollSpy:true, useEasing: true, useGrouping:true,scrollSpyDelay:3000,scrollSpyOnce:true}"
                  />
                </h3>
                <h4 class="mb-0">Finished Projects</h4>
              </div>
            </div>
            <div v-motion-roll-visible-once-right class="col-6 col-md-3">
              <!-- cabColumn -->
              <div class="cabColumn">
                <h3 class="dataCount mb-1">
                  <VueCountUp
                      :delay="6000"
                      :duration="1000"
                      :endVal="125"
                      :options="{enableScrollSpy:true, useEasing: true, useGrouping:true,scrollSpyDelay:3000,scrollSpyOnce:true}"
                  />
                </h3>
                <h4 class="mb-0">Working Hours</h4>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import VueCountUp from 'vue-countup-v2/src/countup.vue'

export default {
  name: "OneSection",
  components: {
    VueCountUp
  },

}
</script>

<style>
@import "@/components/style/onesection.css"
</style>
