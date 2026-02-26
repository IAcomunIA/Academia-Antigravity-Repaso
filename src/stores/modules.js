import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModulesStore = defineStore('modules', () => {
    const modulesProgress = ref(JSON.parse(localStorage.getItem('antigravity_modules_progress') || '{}'))
    const currentLevel = ref(null)

    const modulesData = [
        {
            id: 'module-1',
            title: 'Las 4 Capas',
            levels: [
                { id: '1-1', title: 'Directivas', completed: false, stars: 0 },
                { id: '1-2', title: 'Orquestador', completed: false, stars: 0 },
                { id: '1-3', title: 'Agentes', completed: false, stars: 0 },
                { id: '1-4', title: 'Output', completed: false, stars: 0 }
            ]
        }
    ]

    function completeLevel(levelId, stars) {
        modulesProgress.value[levelId] = {
            completed: true,
            stars: Math.max(stars, modulesProgress.value[levelId]?.stars || 0)
        }
        saveToLocalStorage()
    }

    function saveToLocalStorage() {
        localStorage.setItem('antigravity_modules_progress', JSON.stringify(modulesProgress.value))
    }

    return { modulesProgress, modulesData, currentLevel, completeLevel }
})
