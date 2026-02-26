<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import theoryData from './content/level-2-orquestador.json'
import TheoryPanel from '@/components/learning/TheoryPanel.vue'
import Astronaut from '@/components/game/Astronaut.vue'
import Button from '@/components/ui/Button.vue'

const router = useRouter()
const userStore = useUserStore()
const items = ref(['Formatear', 'Buscar info', 'Resumir'])
const isCorrect = ref(false)
const showFeedback = ref(false)

const validate = () => {
  showFeedback.value = true
  const correct = JSON.stringify(items.value) === JSON.stringify(theoryData.exercise.correct_order)
  if (correct) {
    isCorrect.value = true
    userStore.addXP(150)
  } else {
    isCorrect.value = false
  }
}

const moveUp = (index) => {
  if (index > 0) {
    const temp = items.value[index]
    items.value[index] = items.value[index - 1]
    items.value[index - 1] = temp
  }
}

const moveDown = (index) => {
  if (index < items.value.length - 1) {
    const temp = items.value[index]
    items.value[index] = items.value[index + 1]
    items.value[index + 1] = temp
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8 space-y-12">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 animate-slide-up">
      <div class="space-y-4 max-w-xl">
        <h1 class="text-4xl font-heading text-soft-purple">{{ theoryData.title }}</h1>
        <div class="p-4 bg-deep-space/50 border border-soft-purple/30 rounded-xl italic text-gray-mist">
          "{{ theoryData.intro_dialogue[0] }}"
        </div>
      </div>
      <Astronaut size="md" :emotion="isCorrect ? 'happy' : 'thinking'" />
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <div class="space-y-8">
        <TheoryPanel 
          v-for="(section, index) in theoryData.theory.sections" 
          :key="index"
          :title="section.title" 
          :content="section.content"
        />
      </div>

      <div class="card-level space-y-6">
        <h3 class="text-2xl font-heading text-white">Misión: Ordenar el Flujo</h3>
        <p class="text-gray-mist">{{ theoryData.exercise.instruction }}</p>
        
        <div class="space-y-3">
          <div v-for="(item, index) in items" :key="index" class="p-4 bg-dark-void border border-white/10 rounded-lg flex justify-between items-center group">
            <span class="text-white font-medium">{{ index + 1 }}. {{ item }}</span>
            <div class="flex gap-2">
              <button @click="moveUp(index)" class="p-1 hover:text-cyber-cyan disabled:opacity-30" :disabled="index === 0">▲</button>
              <button @click="moveDown(index)" class="p-1 hover:text-cyber-cyan disabled:opacity-30" :disabled="index === items.length - 1">▼</button>
            </div>
          </div>
        </div>

        <div v-if="showFeedback" :class="[isCorrect ? 'text-success-green' : 'text-error-red', 'font-bold animate-fade-in']">
          <span v-if="isCorrect">✨ ¡Perfecto! Flujo optimizado. +150 XP</span>
          <span v-else>❌ El orden no es lógico. Piensa en la secuencia de investigación.</span>
        </div>

        <div class="flex justify-end gap-4">
          <Button v-if="!isCorrect" variant="primary" @click="validate">VALIDAR</Button>
          <Button v-else variant="secondary" @click="router.push('/module-1/level-3')">SIGUIENTE NIVEL</Button>
        </div>
      </div>
    </div>
  </div>
</template>
