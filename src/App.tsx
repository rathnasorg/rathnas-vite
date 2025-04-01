import { useEffect } from 'react'
import { Link, Route, Switch } from 'wouter'
import './App.css'
import Loading from './components/loading'
import About from './pages/about'
import Home from './pages/home'
import NotFound from './pages/notFound'
import { useAppDispatch } from './redux/hooks'
import { setLoading } from './redux/slices/appSlice'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => { // Simulate loading for 3 seconds
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 3000)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-dark-100 dark:text-dark-900">
      <Loading />
      <nav className="p-4 bg-primary-light">
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <main className="p-4">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </div>
  )
}

export default App
