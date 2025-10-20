<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import Card from '@/components/Card.vue';
import { useFilteredData } from '@/composables/useFilteredData.js'

const { width, filteredData } = useFilteredData()

</script>

<template>
  <div class="list-wrap">
    <ul class="card-list content">
      <li v-for="card in filteredData">
        <Card :item="card"/>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.list-wrap{
  display: flex;
  justify-content: center;
  margin: 100px 0;

  @media(max-width: $width-md){
    margin: 80px 0;
  }

  @media(max-width: $width-sm){
    margin: 60px 0;
  }

  @media(max-width: $width-ssm){
    margin: 50px 0;
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 30px;                              
    list-style: none;                        
    padding: 0;
    margin: 0;

    @media(max-width: 1200px){
      grid-template-columns: repeat(2, 1fr); 
    }

    @media(max-width: $width-md){
      max-width: 100%;
      padding: 0 18px;
    }

    @media(max-width: $width-sm){
      padding: 0 15px;
    }

    @media(max-width: $width-ssm){
      padding: 0 7px;
    }

    @media(max-width: 500px){      
      grid-template-columns: repeat(1, 1fr); 
    }

    @media(max-width: $width-xs){
    }
  }
}

</style>