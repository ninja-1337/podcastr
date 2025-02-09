import styles from './styles.module.scss'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/en-GB'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  })

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcastr"/>
      <p>The best Content for your ears</p>

      <span>{currentDate}</span>
    </header>
  )
}