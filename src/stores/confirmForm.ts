import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

export const useConfirmForm = defineStore('confirmForm', () => {

  const position: Ref<boolean> = ref(false)
  const confirm: Ref<() => any> = ref(() => {})

  const setPosition = (value: boolean, onConfirm?: () => any): void => {
    position.value = value

    if (onConfirm) {
      confirm.value = onConfirm
    }
  }

  return {
    position,
    setPosition,
    confirm
  }
})
