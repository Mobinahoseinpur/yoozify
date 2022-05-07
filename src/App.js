import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './component/MainLayout';
import BlogContextProvider from './context/BlogContextProvider'
// 
function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <BlogContextProvider>
              <MainLayout/>
            </BlogContextProvider>
            
          </BrowserRouter>
      
    </div>

  );
}

export default App;


