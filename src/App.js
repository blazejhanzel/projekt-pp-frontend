import './App.css'
import React, { useState } from 'react'
import AddThreadForm from './components/AddThreadForm'
import AddSectionForm from './components/AddSectionForm'
import HerokuWait from './components/HerokuWait'
import Posts from './components/Posts'
import RegisterForm from './components/RegisterForm'
import Sections from './components/Sections'
import Sidebar from './components/Sidebar'
import Threads from './components/Threads'
import OpenedThreadPage from './components/OpenedThreadPage'


function App() {
  const PageEnum = Object.freeze({
    "heroku_wait": 0,
    "home": 1,
    "register": 2,
    "section": 3,
    "thread": 4,
    "add_thread": 5,
    "add_section": 6,
    "opened_thread": 7
  })

  const [page, setPage] = useState(PageEnum.heroku_wait)
  const [sectionId, setSectionId] = useState(0)
  const [sectionName, setSectionName] = useState("Wczytywanie...")
  const [threadName, setThreadName] = useState("Wczytywanie...")
  const [threadDescription, setThreadDescription] = useState("Wczytywanie...")
  const [threadAuthor, setThreadAuthor] = useState("Wczytywanie...")
  const [threadId, setThreadId] = useState(0)
  const [userLogged, setUserLogged] = useState('unknown')
  const [popularPosts, setPopularPosts] = useState([])

  return (
    <div id="app">
      <Sidebar page={page} setPage={setPage} PageEnum={PageEnum} setUserLogged={setUserLogged} setThreadName={setThreadName} setThreadDescription={setThreadDescription}
                  setThreadAuthor={setThreadAuthor} setThreadId={setThreadId} setPopularPosts={setPopularPosts}/>
      <div className="container">
        {        
          (() => {
            switch (page) {
              case PageEnum.heroku_wait:
                return <HerokuWait setPage={setPage} PageEnum={PageEnum} />
              case PageEnum.home:
                return <Sections setPage={setPage} PageEnum={PageEnum} setSectionId={setSectionId} setSectionName={setSectionName} />
              case PageEnum.register:
                return <RegisterForm />
              case PageEnum.section:
                return <Threads setPage={setPage} PageEnum={PageEnum} sectionName={sectionName} sectionId={sectionId}
                  setSectionName={setSectionName} setThreadName={setThreadName} setThreadDescription={setThreadDescription}
                  setThreadAuthor={setThreadAuthor} setThreadId={setThreadId} />
              case PageEnum.thread:
                return <Posts setPage={setPage} PageEnum={PageEnum} sectionName={sectionName}
                  setSectionName={setSectionName} threadName={threadName} threadDescription={threadDescription}
                  threadAuthor={threadAuthor} threadId={threadId} userLogged={userLogged} />
              case PageEnum.add_thread:
                return <AddThreadForm />
              case PageEnum.add_section:
                return <AddSectionForm />
              case PageEnum.opened_thread:
                  return <OpenedThreadPage setPage={setPage} PageEnum={PageEnum} setThreadName={setThreadName} setThreadDescription={setThreadDescription}
                  setThreadAuthor={setThreadAuthor} setThreadId={setThreadId} threadName={threadName} threadDescription={threadDescription}
                  threadAuthor={threadAuthor} threadId={threadId} userLogged={userLogged} popularPosts={popularPosts} setPopularPosts={setPopularPosts}/>
              

            }
          })()
        }
      </div>
    </div>
  )
}

export default App
