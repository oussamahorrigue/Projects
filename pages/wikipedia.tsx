import Head from 'next/head'
import Image from 'next/image'
import App from '../components/wikipedia/App'
import styles from '../styles/Home.module.css'
import {Container} from '../components/wikipedia/Style.wikipedia'

export default function Home() {
  return (
    <Container>
      <App/>
    </Container>
  )
}
