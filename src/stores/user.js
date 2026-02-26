import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useUserStore = defineStore('user', () => {
    const username = ref(localStorage.getItem('antigravity_username') || 'Cadete Espacial')
    const xp = ref(parseInt(localStorage.getItem('antigravity_xp') || '0'))
    const level = ref(parseInt(localStorage.getItem('antigravity_level') || '1'))

    const ranks = [
        { name: 'Recluta', minXP: 0 },
        { name: 'Cadete', minXP: 500 },
        { name: 'Piloto', minXP: 1500 },
        { name: 'Capitán', minXP: 3000 },
        { name: 'Comandante', minXP: 6000 },
        { name: 'Maestro', minXP: 10000 }
    ]

    const currentRank = computed(() => {
        return [...ranks].reverse().find(r => xp.value >= r.minXP)?.name || 'Recluta'
    })

    function addXP(amount) {
        xp.value += amount
        // Lógica simple de subida de nivel (cada 1000 XP)
        const newLevel = Math.floor(xp.value / 1000) + 1
        if (newLevel > level.value) {
            level.value = newLevel
        }
        saveToLocalStorage()
    }

    function saveToLocalStorage() {
        localStorage.setItem('antigravity_username', username.value)
        localStorage.setItem('antigravity_xp', xp.value.toString())
        localStorage.setItem('antigravity_level', level.value.toString())
    }

    return { username, xp, level, currentRank, addXP, saveToLocalStorage }
})
