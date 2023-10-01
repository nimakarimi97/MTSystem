import { useI18n } from 'vue-i18n'

export function routes() {
  const { t } = useI18n()

  return [
    { to: 'home', title: t('button.home') },
    { to: 'who', title: t('nav.who') },
    { to: 'fx', title: t('nav.fx') },
    { to: 'profit', title: t('nav.profit') },
    { to: 'estimate', title: t('nav.estimates') },
    { to: 'reviews', title: t('nav.reviews') },
    { to: 'price', title: t('nav.price') },
    { to: 'vps', title: t('nav.vps') },
    { to: 'faq', title: t('nav.faq') },
    { to: 'work', title: t('nav.work') },
    { to: 'contact', title: t('nav.contact') },
  ]
}
