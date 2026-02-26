<script setup>
// Sección promocional del Pack Pro para Antigravity Academy
</script>

<template>
  <section class="relative py-24 px-6 overflow-hidden">
    <!-- Fondos Decorativos -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deep-purple/10 rounded-full blur-[120px] -z-10"></div>
    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[100px] -z-10"></div>
    
    <div class="max-w-6xl mx-auto space-y-16">
      <!-- Encabezado de la Sección -->
      <div class="text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-heading tracking-tight leading-tight text-slate-900 dark:text-white">
          Consigue el <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyber-cyan to-soft-purple">Pack Completo</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-mist max-w-2xl mx-auto font-light leading-relaxed">
          La plataforma definitiva para dominar el desarrollo de <span class="text-cyber-cyan">agentes de IA</span> con arquitectura de capas y despliegue real.
        </p>
      </div>

      <!-- Tarjeta Principal con Glassmorphism -->
      <div class="relative group">
        <!-- Astronautas Flotantes (Efecto Visual 3D) -->
        <img 
          src="/assets/img/un__astrnauta_personaje_antigravedad.png" 
          alt="Astronauta" 
          class="absolute -top-16 -right-16 w-32 h-32 animate-float pointer-events-none hidden lg:block z-20"
        />
        <img 
          src="/assets/img/un__astrnauta_personaje_antigravedad.png" 
          alt="Astronauta" 
          class="absolute -bottom-16 -left-16 w-24 h-24 animate-float [animation-delay:1.5s] pointer-events-none hidden lg:block scale-x-[-1] z-20"
        />

        <div class="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[40px] md:rounded-[56px] overflow-hidden flex flex-col md:flex-row shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)]">
          
          <!-- Contenido Izquierdo: Oferta y Beneficios -->
          <div class="flex-1 p-8 md:p-16 space-y-10 relative z-10">
            <div class="space-y-3">
              <h3 class="text-4xl font-heading text-white">EbookPack Pro</h3>
              <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[10px] font-heading font-bold uppercase tracking-[0.2em]">
                Acceso de por vida
              </div>
            </div>

            <!-- Lista de Beneficios -->
            <ul class="space-y-5">
              <li v-for="(item, i) in [
                'Plataforma Interactiva IA (Acceso)',
                'Clase Arquitectura Multicapa (7h+)',
                'Clase Arquitectura VS Video Play (1h+)',
                'Pack Base Tools by Agentes A'
              ]" :key="i" class="flex items-center gap-4 group/item">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-success-green/20 flex items-center justify-center text-success-green border border-success-green/30 group-hover/item:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span class="text-gray-mist text-base md:text-lg group-hover/item:text-white transition-colors duration-300">{{ item }}</span>
              </li>
            </ul>

            <!-- Precio y Acción -->
            <div class="space-y-8 pt-6">
              <div class="flex flex-wrap items-end gap-6">
                <div class="space-y-1">
                  <span class="text-white/30 text-sm line-through font-medium">Precio Normal $99</span>
                  <div class="flex items-baseline gap-3">
                    <span class="text-6xl font-heading text-white drop-shadow-glow">$9.99</span>
                    <span class="text-gray-dim font-heading text-sm uppercase tracking-widest">USD</span>
                  </div>
                </div>
                <div class="mb-2 bg-success-green/20 text-success-green border border-success-green/40 px-4 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-[0.15em] animate-pulse">
                  AHORRA 90%
                </div>
              </div>

              <div class="space-y-4">
                <button class="w-full md:w-auto px-16 py-6 rounded-2xl bg-gradient-to-r from-cyber-cyan to-soft-purple text-white font-heading font-bold text-xl shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                  Obtener Acceso Total
                </button>
                <p class="text-[10px] text-gray-dim font-medium uppercase tracking-[0.3em] px-2 italic">
                  Pago único, sin cuotas, para siempre. IVA incluido.
                </p>
              </div>
            </div>
          </div>

          <!-- Contenido Derecho: Visual del Producto -->
          <div class="md:w-[45%] bg-white/[0.03] p-12 lg:p-20 flex items-center justify-center relative overflow-hidden border-l border-white/5">
            <!-- Efecto de resplandor detrás del libro -->
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.15)_0%,transparent_70%)] animate-pulse"></div>
            
            <div class="relative z-10 transform-gpu hover:perspective-1000">
               <img 
                src="/assets/img/portada-3d-libro-removebg-preview.png" 
                alt="Libro Antigravity Pro" 
                class="w-full max-w-[360px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transform transition-all duration-700 ease-out group-hover:rotate-3 group-hover:scale-110"
              />
            </div>

            <!-- Adornos adicionales -->
            <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-soft-purple/10 rounded-full blur-[80px]"></div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Las clases personalizadas se manejan va Tailwind en su mayora, 
   pero usamos utilidades para sombras complejas si es necesario */
.drop-shadow-glow {
  filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.4));
}
</style>
