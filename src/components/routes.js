import { useI18n } from 'vue-i18n'

export const routes = [
  { to: 'home', title: useI18n().t('button.home') },
  { to: 'who', title: useI18n().t('nav.who') },
  { to: 'fx', title: useI18n().t('nav.fx') },
  { to: 'profit', title: useI18n().t('nav.profit') },
  { to: 'estimate', title: useI18n().t('nav.estimates') },
  { to: 'reviews', title: useI18n().t('nav.reviews') },
  { to: 'price', title: useI18n().t('nav.price') },
  { to: 'vps', title: useI18n().t('nav.vps') },
  { to: 'faq', title: useI18n().t('nav.faq') },
  { to: 'work', title: useI18n().t('nav.work') },
  { to: 'contact', title: useI18n().t('nav.contact') },
]
