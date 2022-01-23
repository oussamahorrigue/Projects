import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import useDateTime from "../components/spacex/useDateTime";
import { Title, Section } from "../styles/style-spacex-page";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import Layout from "../components/NavBar/SpacexLayout";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home({ launches }) {
  const { displaytodayasdate, CurrentTime } = useDateTime();
  return (
    <div className="container-fluid">
      <Head>
        <title>SpaceX</title>
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>
      <Layout />
      <div className={styles.container}>
        <main className={styles.main}>
          <div style={{ margin: "20px", padding: "5px" }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                  },
                },
              }}
            >
              <h2 style={{ color: "#2E5E57" }}>SpaceX Launches</h2>

              <h3
                className="card-text"
                style={{ color: "#5A7CB6", marginTop: "20px" }}
              >
                Latest launches from SpaceX
              </h3>
            </motion.div>
          </div>
          <div className={styles.grid}>
            {launches.map(
              (launch: {
                id: Key;
                links: { video_link: string };
                mission_name:
                  | boolean
                  | ReactChild
                  | ReactFragment
                  | ReactPortal;
                launch_date_local: string | number | Date;
              }) => {
                return (
                  <motion.a
                    whileHover={{
                      position: "relative",
                      zIndex: 1,

                      scale: 1.2,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    key={launch.id}
                    href={launch.links.video_link}
                    className={styles.card}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>{launch.mission_name}</h3>
                    <p>
                      <strong>Launch Time:</strong>
                      {new Date(launch.launch_date_local).toLocaleDateString(
                        "en-US"
                      )}
                    </p>
                  </motion.a>
                );
              }
            )}
          </div>
        </main>

        <footer className={styles.footer}>
          &copy; Oussama Horrigue {displaytodayasdate} - {CurrentTime}
        </footer>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 150) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `,
  });
  return {
    props: {
      launches: data.launchesPast,
    },
  };
}
