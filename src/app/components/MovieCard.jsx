import style from '@/app/styles/coomon.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MovieCard = (item) => {
  const {id, type, title, synopsis} = item.jawSummary
  return (
    <div className={style.card}>
      <div className={style.card_image}>
        <Image src={item.jawSummary.backgroundImage.url} alt='backgroundimage' height={250} width={816} /> 
      </div>
      <div className={style.card_data}>
        <h2>{title.substring(0,10)}..</h2> 
        <p>{synopsis.substring(0,50)}...</p> 
        <Link href={`/movie/${id}`}><button>Read more</button></Link>
      </div>
    </div>
  )
}

export default MovieCard