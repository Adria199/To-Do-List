import { useState } from 'react'

import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { EmptyTasks } from './components/EmptyTasks'

import styles from './App.module.css'
import './App.module.css'

const createdCounter = 1
let mainDisplay:any =  ''

const createdTask = {
   id: 1,
   tasks: {
     createdTaskTitle: 'Created tasks',
     concluded: 'Concluded',
     createdCount: {createdCounter},
     concludedCount: 0,
   },    
}

const EmptyTask = [{
     id: 1,
     tasks: {
        createdTaskTitle: 'Created tasks',
        concluded: 'Concluded',
        createdCount: {createdCounter},
        concludedCount: 0,
        clipboardSvg: './assets/clipboard.svg',
        defaultMessage1: 'You still dont have any registered tasks',
        defaultMessage2:  'Create tasks and organize your day'
     },
    },
  ]
  
const searchBar = [{
   type: 'text',
   placeHolder: 'Add a new task',
   btnDescription: 'Create'
}]

const mainDisplayDefiner = function() {
   if (createdCounter > 0) {
    return mainDisplay =  createdTask
 } else {
   return mainDisplay = EmptyTask
 }
}

function App(): JSX.Element {


  return (
    <div className={styles.mainContainer}>
      <Header />
       <section>
         {searchBar.map(search =>{
           return (
             <SearchBar
               type={search.type}
               placeHolder={search.placeHolder}
               btnDescription={search.btnDescription}
             />
           )
         })}
       </section>
       <main>
          {}
       </main>
    </div>
  )
}

export default App
