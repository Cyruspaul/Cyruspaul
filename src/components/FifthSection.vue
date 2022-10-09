<template>
  <section id="Second" class="bg-light d-flex justify-content-center align-items-center px-3 py-5 p-lg-0  PageField">
  <div v-motion-slide-visible-once-bottom class="container-fluid py-5">
    <div class="container">
      <div class="text-center">
        <small class="text-uppercase headingHead font-weight-bold text-center px-1">Get In Touch</small>
        <h1 class="mt-2 mb-5">Contact For Any Queries</h1>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="d-flex align-items-center border mb-3 p-4">
            <div class="d-flex flex-column">
              <h5 class="font-weight-bold"><i class="bi bi-house"></i> &nbsp; Our Office</h5>
              <p class="m-0">123 Street, New York, USA</p>
            </div>
          </div>
          <div class="d-flex align-items-center border mb-3 p-4">
            <div class="d-flex flex-column">
              <h5 class="font-weight-bold"><i class="bi bi-mailbox"></i> &nbsp; Email Us</h5>
              <p class="m-0">info@example.com</p>
            </div>
          </div>
          <div class="d-flex align-items-center border mb-3 mb-md-0 p-4">
            <div class="d-flex flex-column">
              <h5 class="font-weight-bold"><i class="bi bi-telephone"></i> &nbsp; Call Us</h5>
              <p class="m-0">
                <ul class="list-unstyled text-decoration-non ps-4">
                  <li class="mb-1"> <i class="bi bi-arrow-right-short"></i> &nbsp; +012 345 6789</li>
                  <li class="mb-1">  <i class="bi bi-arrow-right-short"></i> &nbsp; +012 345 6789</li>
                  <li class="mb-1"> <i class="bi bi-arrow-right-short"></i> &nbsp; +012 345 6789</li>
                </ul>
              </p>
            </div>
          </div>
          
        </div>
        <div class="col-md-7">
          <div class="d-flex flex-column  align-items-center  p-4 text-center">
              <h5 class="font-weight-bold mb-4">Join Our Wechat Group for more informations</h5>
             <img src="@/assets/codeQR.jpg" alt="groupCodeQR"  width="260px" height="265px" >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "FifthSection"
}
</script>

