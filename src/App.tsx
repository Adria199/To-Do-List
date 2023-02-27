import { useState } from 'react'
import './App.module.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'

import styles from './App.module.css'

function App() {


  return (
    <div className={styles.mainContainer}>
      <Header />
       <section>
         <SearchBar />
       </section>
    </div>
  )
}

export default App
