import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userInfoStore = defineStore('user_info', () => {
  const name = ref('')
  const email = ref('')
  const loggedIn = ref(false)
  const avatar = ref('')
  const accessToken = ref('')

  function update(data) {
    name.value = data.name
    email.value = data.email
    loggedIn.value = data.loggedIn
    avatar.value = data.avatar
    accessToken.value = data.access_token
  }

  return { name, email, loggedIn, avatar, accessToken, update }
},{
  persist: true,
})