<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import theoryData from './content/level-4-output.json'
import TheoryPanel from '@/components/learning/TheoryPanel.vue'
import Astronaut from '@/components/game/Astronaut.vue'
import Button from '@/components/ui/Button.vue'

const router = useRouter()
const userStore = useUserStore()
const selectedIndex = ref(null)
const isCorrect = ref(false)
const showFeedback = ref(false)

const validate = () => {
  showFeedback.value = true
  if (selectedIndex.value === theoryData.exercise.correct_index) {
    isCorrect.value = true
    userStore.addXP(150)
  } else {
    isCorrect.value = false
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8 space-y-12">
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 animate-slide-up">
      <div class="space-y-4 max-w-xl">
        <h1 class="text-4xl font-heading text-indigo-glow">{{ theoryData.title }}</h1>
        <div class="p-4 bg-deep-space/50 border border-indigo-glow/30 rounded-xl italic text-gray-mist">
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
        <h3 class="text-2xl font-heading text-white">Misión Final del Módulo</h3>
        <p class="text-gray-mist">{{ theoryData.exercise.instruction }}</p>
        
        <div class="space-y-4">
          <button 
            v-for="(option, index) in theoryData.exercise.options" 
            :key="index"
            @click="selectedIndex = index"
            :class="[
              selectedIndex === index ? 'border-indigo-glow bg-indigo-glow/10' : 'border-white/10 bg-dark-void',
              'w-full p-4 text-left rounded-xl border-2 transition-all hover:border-indigo-glow/50'
            ]"
          >
            <span class="text-lg text-white">{{ option }}</span>
          </button>
        </div>

        <div v-if="showFeedback" :class="[isCorrect ? 'text-success-green' : 'text-error-red', 'font-bold animate-fade-in']">
          <span v-if="isCorrect">✨ ¡Perfecto! El usuario estará encantado con el reporte. +150 XP</span>
          <span v-else>❌ Ese formato no es el más legible para datos estructurados.</span>
        </div>

        <div class="flex justify-end gap-4">
          <Button v-if="!isCorrect" variant="primary" @click="validate">VALIDAR</Button>
          <Button v-else variant="secondary" @click="router.push('/module-1/completion')">COMPLETAR MISIÓN</Button>
        </div>
      </div>
    </div>
  </div>
</template>
