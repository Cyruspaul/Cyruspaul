<template>
  <section id="Third"
           class=" d-flex justify-content-center align-items-center px-3 py-5 p-lg-0  PageField" >
    <div v-motion-slide-visible-once-bottom class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 mb-5">
          <small class="headingHead text-uppercase font-weight-bold p-2 ">Why Choose Us </small>
          <h1 class="mt-2 fw-bold mb-3">We Have Leadership Strong Experience In Business</h1>
          <h4 class="font-weight-normal text-muted mb-4">We help by providing an efficient and safe service for all kinds of procedures.</h4>
          <div class="list-inline mb-4">
            <p class="font-weight-semi-bold mb-4"><i class="bi bi-arrow-right-circle me-2 text-primary "></i>Knowledge of the Chinese market, interact with suppliers so that our customers can be satisfied with a good service.</p>
            <p class="font-weight-semi-bold mb-4"><i class="bi bi-arrow-right-circle me-2  text-primary"></i>Reliability and responsibility to gain our customers.</p>
            <p class="font-weight-semi-bold mb-4"><i class="bi bi-arrow-right-circle me-2  text-primary"></i>Transparency in all our services</p>
            <p class="font-weight-semi-bold mb-4"><i class="bi bi-arrow-right-circle me-2  text-primary"></i>Good management of products or articles</p>
          </div>
<!--          <a class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold" href="">Learn More</a>-->
        </div>
        <div class="d-none d-lg-flex  col-lg-6" style="min-height: 90vh">
          <img src="https://templates.hibootstrap.com/everb/default/assets/img/theory-img.png" class="img-fluid imageHomme"  width="500px" >
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ThirdSection"
}
</script>

<style lang="css" scoped>




@media (max-width: 1005px) {
  .imageHomme{
    display: none;
  }
}
@media (min-width: 1006px) {
  .imageHomme{
    display: flex;
    position: absolute;
    //top: -130px;
    right: 30px;
    bottom: 0px;
  }
}
</style>
