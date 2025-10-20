<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '@/components/Card.vue';
import { useFilteredData } from '@/composables/useFilteredData.js';

const { width, filteredData } = useFilteredData()

const prevEl = ref(null)
const nextEl = ref(null)
</script>

<template>
  <div class="slider-section"> 
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="3"
      :space-between="30"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :breakpoints="{
        0: { slidesPerView: 1},
        480: { slidesPerView: 2},
        993: { slidesPerView: 3}
      }"
      class="card-swiper"
    >
      <SwiperSlide v-for="card in filteredData" :key="card.id">
        <Card :item="card" />
      </SwiperSlide>
    </Swiper>
    <div class="slider-footer">
      <div class="slider-controls">
        <button ref="prevEl" class="nav-btn prev">
          <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.31478L2.55461 13L13 24.6852L11.6207 26L0 13L11.6207 0L13 1.31478Z" fill="#00B6DD"/>
          </svg>          
        </button>
        <button ref="nextEl" class="nav-btn next">
          <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.6852L10.4454 13L0 1.31478L1.37932 0L13 13L1.37932 26L0 24.6852Z" fill="#00B6DD"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider-section {
  width: 100%;
  max-width: 1180px;
  margin: 100px auto;
  box-sizing: border-box;
  padding: 0 20px;

  @media(max-width: $width-md){
    max-width: 980px;
    margin: 80px auto;
  }

  @media(max-width: $width-sm){
    max-width: 740px;
    margin: 60px auto; 
    padding: 0 10px;
  }

  @media(max-width: $width-ssm){
    max-width: 576px;
    margin: 50px auto;
    padding: 0 7px;
  }

  @media(max-width: $width-xs){
    max-width: 290px;   
  }
}

.swiper{  
  margin-bottom: 39px;

  @media(max-width: $width-sm){
    margin-bottom: 29px;
  }
}

.slider-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }  

  @media(max-width: 480px){
    justify-content: center;
  }
}

.slider-controls {
  display: flex;
  gap: 12px;
  margin-left: -5px;

  @media(max-width: $width-sm){
    margin-left: -6px;
  }

  @media(max-width: $width-sm){
    margin-left: -0px;
    gap: 6px;
  }
}

.nav-btn {
  cursor: pointer;
  border: none;
  background: transparent;
  transition: all 0.3s ease;

  path {
    transition: all 0.3s ease;
  }

  &:hover {
    path {
      fill: $secondary;
    }
  }

  &.swiper-button-disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;

    path {
      fill: #ccc;
    }
  }
}

.swiper-slide{  
  height: auto;
}

.swiper-slide-active{
  width: 100%;
}

</style>