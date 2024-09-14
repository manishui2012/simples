import './App.css';
import Slickexmple from './components/slicksliders/Slickexmple'
import {data} from './components/accordians/Data'
import Accordian from './components/accordians/Accordian'
import Tabs from './components/tabbing/Tabs'


function App() {
  return (
    <div className="container">

      <Slickexmple />

      <div className='accordian'>
          {
            data.map((item, ind) => {
              return (
                <Accordian question = {item.question} answer = {item.answer}/>
              )
            })
          }
      </div>
      
      <div className='tabbing_wrpr'>
          <Tabs />
      </div>
      
    </div>
  );
}

export default App;
