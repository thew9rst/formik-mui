import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import SignUp from './pages/SingUp'
import './App.css'
import StoryBook from './pages/StoryBook'
import { theme } from './common/theme'
import TestPage from './pages/TestPage'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/story-book" exact>
              <StoryBook />
            </Route>

            <Route path="/sign-up" exact>
              <SignUp />
            </Route>
            <Route path="/test" exact>
              <TestPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </Suspense>
    </div>
  )
}

export default App
