import styles from '@/app/styles/coomon.module.css'
import React from 'react'
import MovieCard from '../components/MovieCard';

const page = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  const url = process.env.RAPID_KEY
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
      'X-RapidAPI-Host': process.env.XRAPIDAPIHOST
    }
  };

  const response = await fetch(url, options);
  const result = await response.json()
  const main_data = result.titles

  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Movie Page</h1>
        <div className={styles.card_section}>
          {
            main_data.map((item)=>{
              return <MovieCard key={item.id} {...item}/>
            })
          } 
        </div>
      </div>
    </section>
  )
}

export default page