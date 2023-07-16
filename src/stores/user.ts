import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types'

export const useUserStore = defineStore('user', () => {
    const user: Ref<null | User> = ref(null)

    function setUser(value: User | null): void {
      user.value = value
    }

    return {
      setUser,
      user
    }
  },
  {
    persist: true
  },
)
