import MainAppBar from '../components/MainAppBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MainAppBar/>
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
