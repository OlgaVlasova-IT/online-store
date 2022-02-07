function Buttons({propFilter}) {
 
    return(
    <div>
      <button className="change" onClick={()=> {propFilter("dress")}}>Dress</button>
      <button className="change" onClick={()=> {propFilter("skirt")}}>Skirt</button>
      <button className="change"onClick={()=> {propFilter("pants")}}>Pants</button>
      <button className="change" onClick={()=> {propFilter("shoes")}}>Shoes</button>
      <button className="change" onClick={()=> {propFilter("shirt")}}>Shirts</button>
    </div>
    )
}

export default Buttons;