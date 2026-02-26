<script setup>
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

const router = useRouter()
const startMision = () => router.push('/module-1/level-1')
</script>

<template>
  <div class="min-h-[80px] flex flex-col items-center justify-center p-8 space-y-12">
    <div class="text-center space-y-4 animate-fade-in">
      <h1 class="text-5xl md:text-7xl font-heading text-white glow-text-cyan">MOP-1: Las 4 Capas</h1>
      <p class="text-xl text-gray-mist max-w-2xl mx-auto">
        Domina los cimientos fundamentales de la arquitectura Antigravity. 
        Aprenderás a orquestar agentes como un verdadero ingeniero espacial.
      </p>
    </div>

    <Card type="level" class="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-cyber-cyan/20 flex items-center justify-center text-cyber-cyan border border-cyber-cyan/50">1</div>
          <h2 class="text-2xl font-heading text-white">Directivas</h2>
        </div>
        <div class="flex items-center gap-4 opacity-50">
          <div class="w-12 h-12 rounded-full bg-soft-purple/20 flex items-center justify-center text-soft-purple border border-soft-purple/50">2</div>
          <h2 class="text-2xl font-heading text-white">Orquestador</h2>
        </div>
        <div class="flex items-center gap-4 opacity-50">
          <div class="w-12 h-12 rounded-full bg-soft-purple/20 flex items-center justify-center text-soft-purple border border-soft-purple/50">3</div>
          <h2 class="text-2xl font-heading text-white">Agentes</h2>
        </div>
        <div class="flex items-center gap-4 opacity-50">
          <div class="w-12 h-12 rounded-full bg-soft-purple/20 flex items-center justify-center text-soft-purple border border-soft-purple/50">4</div>
          <h2 class="text-2xl font-heading text-white">Output</h2>
        </div>
      </div>
      
      <div class="flex flex-col items-center text-center space-y-6">
        <div class="p-4 bg-cyber-cyan/10 rounded-2xl border border-cyber-cyan/20">
          <p class="text-sm text-cyber-cyan font-bold uppercase tracking-widest">Recompensa Estimada</p>
          <p class="text-3xl font-heading text-white mt-1">600 XP</p>
        </div>
        <Button variant="primary" size="lg" @click="startMision">
          INICIAR MISIÓN
        </Button>
      </div>
    </Card>
  </div>
</template>
