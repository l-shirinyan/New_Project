<template>
  <div class="locations"> 
    <div class="locations__our absolute mb-23">
        <span>Our Locations</span>
    </div>
      <div class="locations__map absolute">
          <img src="@/assets/images/locations.svg" class="" style="width: 100%" alt="map">
      </div>
    <div class="locations__section">
      <div>
        <div class="d-flex flex-column align-i-center"> 
          <img src="@/assets/images/map-pin.svg" height="38px" width="32px" style="z-index: 99999" alt="">  
          <span class="locations__title text-align-center">LEXINGTON</span>
        </div>
        <div class="locations__boxes d-flex justify-center mt-9">
          <div class="locations__box">
            <span class="locations__box-text">710 East Main Street Lexington, KY</span> 
          </div>  
          <div class="locations__box">
            <span class="locations__box-text">Paragon Center 2333 Alexandria Drive Lexington, KY</span> 
          </div>  
        </div>
      </div>  
      <div>
        <div class="d-flex flex-column align-i-center mt-12"> 
          <img src="@/assets/images/map-pin.svg" height="38px" width="32px" alt="">  
          <span class="locations__title text-align-center">LOUISVILLE</span>
        </div>
        <div class="locations__boxes d-flex justify-center mt-9">
          <div class="locations__box">
            <span class="locations__box-text">Ormsby III Forest Green 10200 Forest Green Boulevard, Lyndon, Suite 112 Louisville, KY</span> 
          </div>   
          <div class="locations__box">
            <span class="locations__box-text">MET Building 312 South Fourth Street, Downtown, Suite 700 Louisville, KY</span> 
          </div>   
          <div class="locations__box">
            <span class="locations__box-text">Brownsboro Business Center 4965 US Hwy 42 Suite 1000 Louisville, Kentucky</span> 
          </div> 
          <div class="locations__box">
            <span class="locations__box-text">Brownsboro Crossing 9850 Von Allmen Court Suite 201 Louisville, KY</span> 
          </div>   
        </div>
      </div>  
      <div>
        <div class="d-flex flex-column align-i-center mt-12"> 
          <img src="@/assets/images/map-pin.svg" height="38px" width="32px" alt="">  
          <span class="locations__title text-align-center">NORTHERN KENTUCKY</span>
        </div>
        <div class="locations__boxes d-flex justify-center mt-9">
          <div class="locations__box">
            <span class="locations__box-text">Paragon Center 2333 Alexandria Drive Lexington, KY</span> 
          </div>   
          <div class="locations__box">
            <span class="locations__box-text">Paragon Center 2333 Alexandria Drive Lexington, KY</span> 
          </div>   
        </div>
      </div>  
    </div>  
  </div>   
</template>

<script>
export default {
    mounted() {
        setTimeout (() => {
            window.scrollTo(0,0);
        }, 0)        
    }
}
</script>

<style scoped lang="scss">
.locations {
  background-color: rgba(211, 211, 211, 0.3);
  padding: 60px 20px 100px 20px;
  &__our {
    top: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 199999; 

    span {
        font-size: 35px;
        font-weight: bold;
        line-height: 1.34;
        letter-spacing: 1.58px;
        padding-bottom: 5px;
        color: #012951;
        border-bottom: 1px solid #f5c119;
        white-space: nowrap;
    }
  }
  &__map {
    top: 30%;
    left: 10%;
    z-index: 199999;
    
  }
  &__section {
    max-width: 1200px;
    margin: -250px auto 0;
  } 
  &__title {
    font-size: 25px;
    font-weight: bold;
    line-height: 1.36;
    letter-spacing: 1.13px;
    color: #193d7c;
    z-index: 99999;
  }
  &__boxes {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
  }
  &__box {
    height: 125px;
    width: 288px;
    display: flex;
    text-align: center;
    align-items: center; 
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #f5c119;
    background-color: #fff;
    z-index: 99999;
    &-text {
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: 0.81px;
      color: #193d7c;
    }
  }
}
</style>