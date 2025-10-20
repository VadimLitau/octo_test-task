import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import data from '@/assets/data/data.js'

export function useFilteredData() {
  const width = ref(window.innerWidth)

  const handleResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => window.addEventListener('resize', handleResize))
  onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

  const filteredData = computed(() => {
    if (width.value < 993) {
      return data.filter(item => !item.image)
    }
    return data
  })

  return {
    width,
    filteredData
  }
}
