import './App.css';
import Church from "./church"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route index path='/*'
              element={<Church/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </QueryClientProvider>
    );
}

export default App;
