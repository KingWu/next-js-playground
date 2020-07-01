import { useStore, themeStoreId } from 'store'
import { themeDarkMode } from 'store/theme'
import styles from './home.module.css'

export default () => {
  const { state, actions } = useStore(themeStoreId)
  const buttonContent = state.mode === themeDarkMode ? 'Light Mode' : 'Dark Mode'
  return (
    <div className={`container page ${styles.home}`}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Hello World</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
      <button className={styles['btn-toogle']}
              onClick={actions.onToggleTheme}>
        {buttonContent}
        </button>
    </div>
  )
}
