import hero from '@/app/styles/herosection.module.css'
import style from '@/app/styles/coomon.module.css'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = ({title, imageUrl}) => {
  return (
    <main className={hero.main_section}>
        <div className={style.container}>
            <div className={style.grid_two_section}>
                <div className={hero.hero_content}>
                    <h1>{title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis dolorum amet voluptatibus voluptates laborum possimus dolore, enim vitae sint!
                    </p>
                    <Link href='/movie'>
                        <button>
                            Explore Movies
                        </button>
                    </Link>
                </div>
                <div className={hero.hero_image}>
                    <Image src={imageUrl} alt='watchmovie' height={500} width={500} />
                </div>
            </div>
        </div>
        {/* <div className={hero['custom-shape-divider-bottom-1684033529']}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style['shape-fill']}></path>
            </svg>
        </div> */}
    </main>
  )
}

export default HeroSection