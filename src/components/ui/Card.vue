<script setup>
defineProps({
  type: {
    type: String,
    default: 'space',
    validator: (value) => ['space', 'level', 'character'].includes(value)
  },
  glow: {
    type: Boolean,
    default: false
  },
  glowColor: {
    type: String,
    default: 'cyan',
    validator: (value) => ['cyan', 'purple', 'magenta'].includes(value)
  }
})
</script>

<template>
  <div 
    :class="[
      type === 'space' ? 'card-space' : '',
      type === 'level' ? 'card-level' : '',
      type === 'character' ? 'card-character' : '',
      glow && glowColor === 'cyan' ? 'shadow-glow-cyan' : '',
      glow && glowColor === 'purple' ? 'shadow-glow-purple' : '',
      glow && glowColor === 'magenta' ? 'shadow-[0_0_20px_rgba(255,0,255,0.5)]' : '',
      'transition-all duration-300'
    ]"
  >
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>
