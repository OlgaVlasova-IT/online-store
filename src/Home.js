import { useState} from 'react';
import { data }  from './data'
import Clothes from './Clothes';
import Buttons from './Buttons';
import "./App.css"

function Home() {
    const [clothes, setClothes] = useState(data);
  const chosenClothes = (category) => {

    const temp = data.filter( element => element.searchTerm === category);
    setClothes(temp);
  }
return(

    <div className="App">
      <div className="cont">
      <p className="back">FREE stardart shipping</p>
    </div>
      <Buttons propFilter = {chosenClothes}/>
    <Clothes propClothes = {clothes} />
    
    </div>
)

}

export default Home;