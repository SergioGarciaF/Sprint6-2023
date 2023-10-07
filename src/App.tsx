import StyledContainer from './components/styled-components/Styles'
import { useState } from 'react'
import './App.css'
import { MyContext } from './components/MyContext/MyContext'
import Products from './components/Products/Products'

function App() {

  const [value, setValue] = useState(0);

  return (
    <>
      
        <StyledContainer>
          <MyContext.Provider value={value}>
            <Products />
          </MyContext.Provider>
        </StyledContainer>
      
    </>
  )
}

export default App
