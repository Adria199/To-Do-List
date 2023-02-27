import { useState } from 'react'
import './App.module.css'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'

import styles from './App.module.css'
import { Tasks } from './components/Tasks'

function App() {


  return (
    <div className={styles.mainContainer}>
      <Header />
       <section>
         <SearchBar />
       </section>
       <main>
          <Tasks />
       </main>
    </div>
  )
}

export default App
