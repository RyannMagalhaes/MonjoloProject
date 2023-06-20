import { Fragment } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Tools from './components/tools/Tools'

export default function App() {

  return (
    <Fragment>
      <Tools />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}
