import styles from '../styles/Home.module.css'
import {ApolloClient,InMemoryCache,gql} from '@apollo/client';
import useDateTime from "../components/spacex/useDateTime"
import {Title} from '../styles/style-spacex-page';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import Layout from '../components/NavBar/Layout';

export default function Home({launches}) {
  const {displaytodayasdate,CurrentTime}=useDateTime()
  return (
    <>
    <Layout/>
    <div className={styles.container}>
      <main className={styles.main} >
        <section >
          <h1 className={styles.title}>
            SpaceX Launches
          </h1>

          <Title>
            Latest launches from SpaceX
          </Title>
          </section>
          <div className={styles.grid}>
            {launches.map((launch: { id: Key; links: { video_link: string; }; mission_name: boolean | ReactChild | ReactFragment | ReactPortal; launch_date_local: string | number | Date; }) =>{
              return(
                <a key={launch.id} href={launch.links.video_link} className={styles.card} target='_blank' rel="noreferrer">
                  <h3>{launch.mission_name}</h3>
                  <p><strong>Launch Time:</strong>{new Date(launch.launch_date_local).toLocaleDateString("en-US")}</p>

                </a>
              )
            })}

          </div>
        </main>

        <footer className={styles.footer}>
          
            &copy; Oussama Horrigue  {displaytodayasdate} - {CurrentTime} 
          
        </footer>
      
    </div>
    </>
  )
}
export async function getStaticProps(){
  const client=new ApolloClient({
    uri:'https://api.spacex.land/graphql/',
    cache:new InMemoryCache()
  })
  const {data}= await client.query({
    query:gql`
    query GetLaunches{
      launchesPast(limit:10){
        id
        mission_name
        launch_date_local
        launch_site{
          site_name_long
        }
        links{
          article_link
          video_link
          mission_patch
        }
        rocket{
          rocket_name
        }
      }
    }
    `
  })
  return{
    props:{
      launches:data.launchesPast
    }
  }
}
