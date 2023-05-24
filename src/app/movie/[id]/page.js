import style from '@/app/styles/coomon.module.css'
import Image from 'next/image';

const page = async({params}) => {
  const id = params.id
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
      'X-RapidAPI-Host': process.env.XRAPIDAPIHOST
    }
  };

  const response = await fetch(url, options);
  const result = await response.json()
  const main_data = result[0].details

  return (
    <div className={style.container}>
      <h2 className={style.movie_title}> Netflix \ <span>{main_data.type}</span></h2>
      <div className={style.card_section}>
        <div>
          <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300}/>
        </div>
        <div>
          <h2>{main_data.title}</h2> 
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default page