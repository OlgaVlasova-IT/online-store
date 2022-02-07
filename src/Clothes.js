function Clothes({propClothes} ) {

    return(
        <div className="products">

    {propClothes.map(item => {
       const {id, name, searchTerm, price, image} = item;
     return(
    <div key={id} className="productCard">
     <img src={image} width="250px" height="350px"  alt={searchTerm} />
     <div className="productInfo">
     <p>{name}</p>
     <p>{price}</p>
     <p className="hide">{searchTerm}</p>
     </div>
    </div>
     
     )
    })}
    </div>

    )

}

export default Clothes