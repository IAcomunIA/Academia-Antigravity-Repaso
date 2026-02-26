import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('game', () => {
    const badges = ref(JSON.parse(localStorage.getItem('antigravity_badges') || '[]'))
    const streak = ref(parseInt(localStorage.getItem('antigravity_streak') || '0'))
    const lastPlayDate = ref(localStorage.getItem('antigravity_lastplay') || null)

    function unlockBadge(badgeId) {
        if (!badges.value.includes(badgeId)) {
            badges.value.push(badgeId)
            saveToLocalStorage()
        }
    }

    function updateStreak() {
        const today = new Date().toDateString()
        if (lastPlayDate.value === today) return

        const last = lastPlayDate.value ? new Date(lastPlayDate.value) : null
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)

        if (last && last.toDateString() === yesterday.toDateString()) {
            streak.value++
        } else {
            streak.value = 1
        }

        lastPlayDate.value = today
        saveToLocalStorage()
    }

    function saveToLocalStorage() {
        localStorage.setItem('antigravity_badges', JSON.stringify(badges.value))
        localStorage.setItem('antigravity_streak', streak.value.toString())
        localStorage.setItem('antigravity_lastplay', lastPlayDate.value)
    }

    return { badges, streak, lastPlayDate, unlockBadge, updateStreak }
})
