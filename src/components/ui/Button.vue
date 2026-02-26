<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<template>
  <button 
    :class="[
      variant === 'primary' ? 'btn-primary' : '',
      variant === 'secondary' ? 'btn-secondary' : '',
      variant === 'ghost' ? 'btn-ghost' : '',
      'relative flex items-center justify-center gap-2 overflow-hidden transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'
    ]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <span v-if="loading" class="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
    <slot />
    
    <!-- Hover Effect Layer -->
    <div class="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
  </button>
</template>
