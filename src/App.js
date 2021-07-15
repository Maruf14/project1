import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from "./Card";

import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row d-flex  justify-content-center">

          <div className="col-md-4">
            <Card icon={faQuoteRight} title="JOHN DOE" img={'https://www.cashgamefestival.com/wp-content/uploads/2014/10/speaker-2-v2.jpg'} />
          </div>


          <div className="col-md-4">
            <Card icon={faQuoteRight} title="ELON MUSK" img={'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg'} />
          </div>




          <div className="col-md-4">
            <Card icon={faQuoteRight} title="ADAM SMITH" img={'http://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png'} />
          </div>




        </div>
      </div>



    </div>
  );
}

export default App;
