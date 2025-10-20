<script setup>
 
</script>

<template>
  <section class="hero">
    <h1>Solutions for people like you</h1>
  </section>
</template>

<style scoped lang="scss">
.hero{
   width: 100%;
   background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
    url('/images/hero_bg.png') left center/cover no-repeat;
  display: flex;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 140px;

  h1{
    font-weight: 700;
    font-size: 62px;
    line-height: 68px;
    letter-spacing: 1.4px;
    text-align: center;
    color: $white;
    max-width: 750px;    
    padding-left: 15px;
    padding-right: 15px;
  }

  @media(max-width: $width-md){
      padding-top: 100px;
      padding-bottom: 120px;

    h1{
      font-size: 54px;
      line-height: 60px;
      letter-spacing: 1.2px;
      max-width: 617px;
    }
  }

  @media(max-width: $width-sm){
      padding-top: 80px;
      padding-bottom: 100px;

    h1{
      font-size: 46px;
      line-height: 48px;
      letter-spacing: 1px;
      max-width: 470px;
    }
  }

  @media(max-width: $width-ssm){
      padding-top: 60px;
      padding-bottom: 80px;

    h1{
      max-width: 450px;
    }
  }

  @media(max-width: $width-ssm){
      padding-top: 60px;
      padding-bottom: 80px;

    h1{
      max-width: 450px;
    }
  }

  @media(max-width: $width-xs){
      padding-top: 60px;
      padding-bottom: 70px;

    h1{
      max-width: 290px;  
    }
  }  
}


</style>