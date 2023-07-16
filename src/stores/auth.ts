import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from '@/stores/user'

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore()

  const formLoginPosition: Ref<boolean> = ref(false)
  const formRegisterPosition: Ref<boolean> = ref(false)

  const setFormLoginPosition = (value: boolean): void => {
    formLoginPosition.value = value
  }
  const setFormRegisterPosition = (value: boolean): void => {
    formRegisterPosition.value = value
  }

  const isAuthenticated = computed(() => !!userStore.user)

  return {
    formLoginPosition,
    setFormLoginPosition,
    formRegisterPosition,
    setFormRegisterPosition,
    isAuthenticated
  }
})
