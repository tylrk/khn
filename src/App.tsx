import React from 'react';
import './App.css';
import { initialData } from './components/charts';
import Navbar from './components/Navbar';
import  ChartComponent  from './components/charts';

const App: React.FC = (props) => {
  return (
    <>
    <Navbar />
    <ChartComponent {...props} data={initialData} />
    </>
  );
}

export default App;
