<script setup>
const { variant, link } = defineProps({
  variant: {
    type: String,
    default: 'bg-primary'
  },
  link: {
    type: String,
    default: "#"
  }
});
</script>

<template>
  <button class="btn" :class="variant" type="button">
    <a :href="link" class="btn-link">
      <slot></slot>
    </a>
  </button>   
</template>


<style scoped lang="scss">
.btn{
    padding: 9px 35px 11px;
    border: none;
    // width: 160px;
    margin-top: auto;
    cursor: pointer;
    transition: $duration ease;

    .btn-link{
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.3px;
      text-align: center;
      color: $white;

      @media(max-width: $width-sm){
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.7px;
      }
    }    

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    }

    @media(max-width: $width-sm){
      padding: 8px 28px;
    }
  }

  
.border-btn{
  background: $black;
  outline:1px solid $primary;
}
</style>