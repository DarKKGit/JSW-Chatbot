import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';
import './index.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<ChatPage />} />
    </Routes>
    </BrowserRouter>
    </>
    );
}

