import './App.css'
import React, { useState } from 'react'
import HerokuWait from './components/HerokuWait'
import RegisterForm from './components/RegisterForm'
import Sections from './components/Sections'
import Sidebar from './components/Sidebar'
import Threads from './components/Threads'

function App() {
  const PageEnum = Object.freeze({
    "heroku_wait": 0,
    "home": 1,
    "register": 2,
    "section": 3,
    "thread": 4,
    "add_thread": 5
  })

  const [page, setPage] = useState(PageEnum.heroku_wait)
  const [itemId, setItemId] = useState(0)
  const [itemName, setItemName] = useState("Wczytywanie...")

  return (
    <div id="app">
      <Sidebar page={page} setPage={setPage} PageEnum={PageEnum} />
      <div className="container">
        {        
          (() => {
            switch (page) {
              case PageEnum.heroku_wait:
                return <HerokuWait setPage={setPage} PageEnum={PageEnum} />
              case PageEnum.home:
                return <Sections setPage={setPage} PageEnum={PageEnum} setItemId={setItemId} setItemName={setItemName} />
              case PageEnum.register:
                return <RegisterForm />
              case PageEnum.section:
                return <Threads setPage={setPage} PageEnum={PageEnum} id={itemId} setItemId={setItemId} itemName={itemName} setItemName={setItemName} />
              case PageEnum.thread:
                return
              case PageEnum.add_thread:
                return
            }
          })()
        }
      </div>
    </div>
  )
}

export default App
