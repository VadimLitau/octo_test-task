<script setup>
import UiButton from '@/components/Ui/UiButton.vue'
</script>

<template>
  <div class="prefences">
    <div class="wrap content">
      <div class="text">
        <h3>Solutions for people like you</h3>
        <p>How can we help your technology and services business develop a revenue engine based on Hubspot?</p>
        <div class="btns-wrap">
          <UiButton>Call to action</UiButton>
          <UiButton variant="border-btn">Call to action</UiButton>
        </div>
      </div>
      <picture>
        <source srcset="../../assets/images/preferencs-1-mob.png" media="(max-width: 420px)">
        <source srcset="../../assets/images/preferencs-1-tab.png" media="(max-width: 768px)">
        <img src="../../assets/images/preferencs-1.png" alt="">
      </picture>
    </div>
  </div>
</template>



<style scoped lang="scss">
.prefences{
  width: 100%;
  background: $black;
  display: flex;
  justify-content: center
}
.wrap{
  display: flex;
  gap: 127px;
  padding: 100px 0 97px;

  @media(max-width: $width-lg){
    gap: 33px;
    padding: 80px 20px 77px; 
  }

  @media(max-width: 1200px){
    flex-direction: column;
  }

  @media(max-width: $width-sm){
    align-items: center;
    padding: 70px 0px 65px 0; 
    gap: 40px;
  }

  @media(max-width: $width-ssm){
    padding: 60px 56px 57px; 
  }

  @media(max-width: $width-xs){
    padding: 50px 6px 67px; 
     gap: 30px;
  }

  .text{
    margin-top: 25px;
    max-width: 555px;
     
    @media(max-width: $width-lg){
      max-width: 450px;
      margin-top: 20px;
    }

     @media(max-width: $width-sm){
      max-width: 595px;
      margin-top: 0;
    }

    @media(max-width: $width-ssm){
      max-width: 450px;
    }

    h3{
      color: $primary;
      font-weight: 700;
      font-size: 62px;
      line-height: 68px;
      letter-spacing: 1.4px;
      margin-bottom: 25px;
      max-width: 500px;     

      @media(max-width: $width-lg){
        font-size: 54px;
        line-height: 62px;
        letter-spacing: 1.1px;
        margin-bottom: 20px;
      }

       @media(max-width: $width-sm){
        font-size: 46px;
        line-height: 48px;
        letter-spacing: 0.9px;
        margin-bottom: 14px;
        text-align: center;
        max-width: 100%;
      }
    }

    p{
      color: $white;
      font-weight: 400;
      font-size: 22px;
      line-height: 30px;
      letter-spacing: 1.2px;
      margin-bottom: 36px;

      @media(max-width: $width-lg){
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 29px;
      }

      @media(max-width: $width-sm){
        font-size: 18px;
        line-height: 26px;
        letter-spacing: 1px;
        margin-bottom: 30px;
        text-align: center;
        max-width: 100%;
      }
    }   
  }

  .btns-wrap{
    display: flex;
    align-items: center;
    gap: 16px;

    @media(max-width: $width-sm){
      justify-content: center;
    }

    @media(max-width: $width-xs){
      flex-direction: column;
      align-items: stretch;
    }
  }

  img{
    width: 455px;
    height: 380px;
    object-fit: cover;
    object-position: top left;

    @media(max-width: $width-lg){
      height: 332px;
    }

    @media(max-width: $width-sm){
      width: 100%;
      height: 364px;
    }

    @media(max-width: $width-ssm){
      height: 275px;
    }

    @media(max-width: $width-xs){
      height: 146px;
      max-width: 290px;
    }
  }
}

:deep(.btn){
  @media(max-width: $width-md){
    padding: 9px 30px 11px;
  }

  @media(max-width: $width-sm){
    padding: 8px 28px 8px;
  }
}

:deep(.border-btn){
   @media(max-width: $width-md){
    margin-top: -1px;
    padding: 9px 29px;
  }

  @media(max-width: $width-sm){
    padding: 7px 27px;
  }
}
</style>