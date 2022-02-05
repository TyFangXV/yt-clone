import type { NextPage } from 'next'
import Card from '../components/card/card'
import Nav from '../components/nav/nav'
import styles from '../styles/Home.module.css'

/*movies*/
const movies = [
    {
        title: 'Avengers: Endgame',
        description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        image: 'https://cdn.wallpapersafari.com/39/2/4SVm8Q.jpg'
    },
    {
        title: 'The Godfather',
        description: 'The aging patriarch',
        image : 'https://thoughtcatalog.com/wp-content/uploads/2014/01/godfather.jpg'
    },
    {
        title: 'Uncharted',
        description: 'The early life and career of',
        image : 'https://www.egames.news/__export/1640465096074/sites/debate/img/2021/12/25/uncharted.jpg_474438749.jpg'
    },
    {
        title: 'The Dark Knight',
        description: 'When the menace known as the Joker',
        image : 'https://m.media-amazon.com/images/M/MV5BMTc2Nzg0MTk1MV5BMl5BanBnXkFtZTgwNjg3MTkxMTI@._V1_.jpg'
    },
    {
      title: 'Avengers: Endgame',
      description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
      image: 'https://cdn.wallpapersafari.com/39/2/4SVm8Q.jpg'
  },
  {
      title: 'The Godfather',
      description: 'The aging patriarch',
      image : 'https://thoughtcatalog.com/wp-content/uploads/2014/01/godfather.jpg'
  },
  {
      title: 'Uncharted',
      description: 'The early life and career of',
      image : 'https://www.egames.news/__export/1640465096074/sites/debate/img/2021/12/25/uncharted.jpg_474438749.jpg'
  },
  {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker',
      image : 'https://m.media-amazon.com/images/M/MV5BMTc2Nzg0MTk1MV5BMl5BanBnXkFtZTgwNjg3MTkxMTI@._V1_.jpg'
  },
  {
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    image: 'https://cdn.wallpapersafari.com/39/2/4SVm8Q.jpg'
},
{
    title: 'The Godfather',
    description: 'The aging patriarch',
    image : 'https://thoughtcatalog.com/wp-content/uploads/2014/01/godfather.jpg'
},
{
    title: 'Uncharated',
    description: 'The early life and career of ',
    image : 'https://www.egames.news/__export/1640465096074/sites/debate/img/2021/12/25/uncharted.jpg_474438749.jpg'
},
{
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker',
    image : 'https://m.media-amazon.com/images/M/MV5BMTc2Nzg0MTk1MV5BMl5BanBnXkFtZTgwNjg3MTkxMTI@._V1_.jpg'
},
{
  title: 'Avengers: Endgame',
  description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
  image: 'https://cdn.wallpapersafari.com/39/2/4SVm8Q.jpg'
},
{
  title: 'The Godfather',
  description: 'The aging patriarch',
  image : 'https://thoughtcatalog.com/wp-content/uploads/2014/01/godfather.jpg'
},
{
  title: 'Uncharted',
  description: 'The early life and career of',
  image : 'https://www.egames.news/__export/1640465096074/sites/debate/img/2021/12/25/uncharted.jpg_474438749.jpg'
},
{
  title: 'The Dark Knight',
  description: 'When the menace known as the Joker',
  image : 'https://m.media-amazon.com/images/M/MV5BMTc2Nzg0MTk1MV5BMl5BanBnXkFtZTgwNjg3MTkxMTI@._V1_.jpg'
},

  ]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        <Nav/>
      </div>
      <div style={{marginLeft : "16vw", paddingTop : "5vh"}}>
          <div className={styles.overView}>
              {
                movies.map(({title, description, image}, index) => (
                  <Card 
                    key={index}
                    title={title}
                    description={description}
                    image={image}
                  />
                ))

              }        
          </div>        
      </div>


    </div>
  )
}

export default Home
