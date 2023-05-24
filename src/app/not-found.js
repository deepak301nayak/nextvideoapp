import styles from '@/app/styles/coomon.module.css'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <p>Could not found requested resorce</p>
            <Link href="/">
                <button>Go Home Page</button>
            </Link>
        </div>
    </section>
  )
}

export default NotFound