import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from 'nuxt/app'
import ru from "../locales/ru.json"
import uz from "../locales/uz.json"
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'ru',
    messages: {
        ru, 
        uz, 
    }
  })

  vueApp.use(i18n)
})