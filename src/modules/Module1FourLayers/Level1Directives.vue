<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import theoryData from './content/level-1-directivas.json'
import TheoryPanel from '@/components/learning/TheoryPanel.vue'
import Astronaut from '@/components/game/Astronaut.vue'
import Button from '@/components/ui/Button.vue'

const router = useRouter()
const userStore = useUserStore()
const userInput = ref('')
const isCorrect = ref(false)
const showFeedback = ref(false)

const validate = () => {
  showFeedback.value = true
  if (userInput.value.includes('Explorador Espacial')) {
    isCorrect.value = true
    userStore.addXP(150)
  } else {
    isCorrect.value = false
  }
}

const nextLevel = () => {
  router.push('/module-1/level-2')
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-4 md:p-8 space-y-12">
    <!-- Header Level -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 animate-slide-up">
      <div class="space-y-4 max-w-xl">
        <h1 class="text-4xl font-heading text-cyber-cyan">{{ theoryData.title }}</h1>
        <div class="p-4 bg-deep-space/50 border border-cyber-cyan/30 rounded-xl italic text-gray-mist">
          "{{ theoryData.intro_dialogue[0] }}"
        </div>
      </div>
      <Astronaut size="md" :emotion="isCorrect ? 'happy' : 'neutral'" />
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Left: Theory -->
      <div class="space-y-8">
        <TheoryPanel 
          v-for="(section, index) in theoryData.theory.sections" 
          :key="index"
          :title="section.title" 
          :content="section.content"
        />
      </div>

      <!-- Right: Exercise -->
      <div class="card-level space-y-6">
        <h3 class="text-2xl font-heading text-white">Misión del Nivel</h3>
        <p class="text-gray-mist">{{ theoryData.exercise.instruction }}</p>
        
        <div class="space-y-4">
          <div class="p-4 bg-dark-void rounded-lg border border-white/10 font-code text-sm text-gray-dim">
            {{ theoryData.exercise.template }}
          </div>
          <textarea 
            v-model="userInput"
            class="input-code w-full h-32"
            placeholder="Escribe tu directiva aquí..."
          ></textarea>
        </div>

        <div v-if="showFeedback" :class="[isCorrect ? 'text-success-green' : 'text-error-red', 'font-bold flex items-center gap-2 animate-fade-in']">
          <span v-if="isCorrect">✨ ¡Excelente trabajo, Recluta! +150 XP</span>
          <span v-else>❌ Algo no está bien. Asegúrate de incluir 'Explorador Espacial'.</span>
        </div>

        <div class="flex justify-end gap-4">
          <Button v-if="!isCorrect" variant="primary" @click="validate">VALIDAR</Button>
          <Button v-else variant="secondary" @click="nextLevel">SIGUIENTE NIVEL</Button>
        </div>
      </div>
    </div>
  </div>
</template>
