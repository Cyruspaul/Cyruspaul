<template>
  <section  id="Two" class="d-flex flex-column justify-content-center align-items-center px-3 p-lg-0  PageField second">
    <div class="container pt-5 mt-5" v-motion-roll-bottom>
      <div class="d-flex flex-column">
        <div v-motion-slide-visible-once-bottom class=" mb-5 text-center border-bottom border-dark">
          <small class="text-uppercase font-weight-bold px-1 headingHead">What we do</small>
          <h1 class="mt-2 fw-bold mb-3">We Offer Multiple Services</h1>
          <h4 class="font-weight-normal fst-italic mb-4">Save your company's productive time with the help of our
            support</h4>
    </div>
    <div v-motion-slide-visible-once-bottom class="">
      <div class="row text-center justify-content-center justify-content-md-around">

        <div v-motion-roll-visible-once-left class="col-md-5 boxes mb-5 card">
          <div class="d-flex flex-column card-body justify-content-center align-items-center py-5">
            <img
              src="https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/64/000000/external-communication-business-teamwork-kosonicon-lineal-color-kosonicon.png"
              class="img-fluid mb-3 " width="50" />
            <div class="d-flex flex-column">
              <h4 class="font-weight-bold mb-2">Communication</h4>
              <p>It is essential in all management and we have trained personnel in language communication such as
                Spanish, French, English and Chinese to help our customers.</p>
            </div>
          </div>
        </div>
        <div v-motion-roll-visible-once-right class="col-md-5 mb-5 boxes card">
          <div class="d-flex flex-column card-body justify-content-center py-5 align-items-center  ">
            <img
              src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-logistic-logistics-and-supply-chain-management-parzival-1997-outline-color-parzival-1997.png"
              class="img-fluid mb-3" width="50" />
            <div class="d-flex flex-column">
              <h4 class="font-weight-bold mb-2">Logistics</h4>
              <p>One problem that many face when they want to export or import products, so for us logistics is a
                priority to satisfy our customers, we find better agencies and shipping companies.</p>
            </div>
          </div>
        </div>
        <div v-motion-roll-visible-once-bottom class="col-md-5 mb-5 card boxes">
          <div class="d-flex flex-column card-body py-5 justify-content-center align-items-center  ">
            <img
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-factory-factory-flaticons-flat-flat-icons-4.png"
              class="img-fluid mb-3" width="50" />
            <div class="d-flex flex-column">
              <h4 class="font-weight-bold mb-2">Find factories and supplies for custumers</h4>
              <p>Depending on the demands and need of our customers, we find supplies and factories that have the
                products or items that our customers need.</p>
            </div>
          </div>
        </div>
        <div v-motion-roll-visible-once-bottom class="col-md-5 mb-5 card boxes">
          <div class="d-flex flex-column card-body py-5 justify-content-center align-items-center  ">
            <img
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/FAB005/external-study-university-flaticons-flat-flat-icons.png"
              class="img-fluid  mb-3" width="50" />
                            <i class="fa fa-3x fa-chart-line text-primary mr-4"></i>
            <div class="d-flex flex-column">
              <h4 class="font-weight-bold mb-2">Admissions to study abroad</h4>
              <p>For the management of studies admissions abroad, we offer the solution for the search of affordable
                universities and according to the demand of the students,
                we give a previous guidence to students, we bring better offers of universities in China, Malaysia, as
                well other countries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>




</template>

<script>
export default {
  name: "SecondSection",
  components: {

  }
}
</script>

<style scoped>
section#Two {
  background-color: #f4e9da;
}

section#Six {
  background-color: #f4e9da;
}

p {
  font-size: 105%;
}

h4 {
  font-weight: normal;
}
</style>
