import BoroughCard from './components/BoroughCard'
import './App.css'

const borough = {
  'Manhattan': 'Manhattan',
  'Brooklyn': 'Brooklyn',
  'Queens': 'Queens',
  'The Bronx': 'The Bronx'
}

function App() {
  const color = "blue";

  return (
    <>
      <BoroughCard borough={borough['Manhattan']} bgColor={color}/>
      <BoroughCard borough={borough['Brooklyn']} bgColor={color}/>
      <BoroughCard borough={borough['Queens']} bgColor={color}/>
      <BoroughCard borough={borough['The Bronx']} bgColor={color}/>
    </>
  )
}

export default App
