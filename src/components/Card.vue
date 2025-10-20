<script setup>
import { computed } from 'vue'
import UiButton from '@/components/Ui/UiButton.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const bgStyle = computed(() => {
  return props.item.bg_color ? 
  { backgroundColor: props.item.bg_color } : 
  { backgroundColor: 'transparent' };
})
</script>

<template>
  <div class="card">
    <div class="category" :class="item.category_type">
      <span>{{ item.category }}</span>
    </div>
    <div class="image-wrap" :style="bgStyle">
      <img 
        v-if="item.image && !item.bg_color" 
        :src="`/images/${item.image}`" 
        :alt="item.title"
      />
    </div>
    <a :href="item.author_link" class="author-link">{{item.author_name}}</a>
    <h2 class="title">{{ item.title }}</h2>
    <p class="text">{{ item.text }}</p>
    <UiButton :link="item.btn_link" :variant="item.btn_type">{{ item.btn_text }}</UiButton> 
  </div>
</template>

<style scoped lang="scss">
  .card{
    box-sizing: border-box;
    border: 1px solid $gray;
    padding: 29px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 360px;
    height: 100%;
    position: relative;

    @media(max-width: $width-md){
      width: 100%;
      max-width: 455px;
    }

    @media(max-width: $width-sm){
      padding: 28px;
    }

    @media(max-width: $width-ssm){
      padding: 17px 16px;
    }
  }

  .category{
    position: absolute;
    padding: 6px 15px 8px 16px;
    top: 11px;
    left: -2px;

    @media(max-width: $width-sm){
      padding: 6px 9px 4px 14px;
    }

    @media(max-width: $width-ssm){
     top: -1px;
    }

    span{
      font-weight: 400;
      font-size: 13px;
      line-height: 22px;
      letter-spacing: 1.2px;
      text-align: center;
      text-transform: uppercase;
      color: $white;

      @media(max-width: $width-sm){
        font-size: 12px;
      }
    }
  }

  .image-wrap{
    width: 100%;
    height: 170px;
    max-height: 170px;
    margin-bottom: 20px;

    @media(max-width: $width-sm){
      max-height: 150px;
      margin-bottom: 17px;
    }

    @media(max-width: $width-ssm){
      max-height: 140px;
      margin-bottom: 13px;
    }

    img{        
      width: 100%;
      height: 170px;
      max-height: 170px;
      
      @media(max-width: $width-sm){
        max-height: 150px;
      }
      @media(max-width: $width-ssm){
        max-height: 140px;
      }
    }
  }

  .author-link{
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.8px;
    color: $primary;
    margin-bottom: 6px;

    @media(max-width: $width-md){
      margin-bottom: 5px;
    }

    @media(max-width: $width-sm){
      font-size: 12px;
      line-height: 18px;
    }
  }

  .title{
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 1.2px;
    color: $black;
    margin-bottom: 16px;

    @media(max-width: $width-md){
      margin-bottom: 13px;
    }

    @media(max-width: $width-sm){
      font-size: 18px;
      line-height: 26px;
    }
    @media(max-width: $width-ssm){
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
  }

  .text{
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.8px;
    margin-bottom: 30px;

    @media(max-width: $width-md){
      max-height: 52px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media(max-width: $width-sm){
      font-size: 14px;
      line-height: 22px;
      max-height: 66px;
      margin-bottom: 26px;
    }
    @media(max-width: $width-ssm){
      letter-spacing: 1px;
      margin-bottom: 19px;
    }
  }  
</style>