import React from 'react'

function Card(props) {
return (
    
    <div>
      <table style={{width:"800px",margin
    :"5px auto",  border:"3px solid green"}}>
        <thead>
        <tr>
            <th>category</th>
            <th>description</th>
            <th>id</th>
            <th>image</th>
            <th>price</th>
            <th>rating</th>
            <th>rate</th>
            <th>count</th>
            <th>title</th>
        </tr>
        </thead>
        <tbody>
      {
       props. Data ?
        (props.Data).map((apiDetails, index) =>{

return(


    <tr key={index}>
        <td>{apiDetails.category }</td>
        <td>{apiDetails.description}</td>
        <td>{apiDetails.id}</td>
        <td>
        <img src={apiDetails.image} alt={apiDetails.title} className="photo w-75" />
        </td>
        <td>{apiDetails.price}</td>
       
        <td>{apiDetails.title}</td>
        <td>{apiDetails.rating.rate}</td>
        <td>{apiDetails.rating.count}</td>
    </tr>
)

        }) :
        <tr><td>No Record Found</td></tr>


      }
      </tbody>
      </table>
    </div>
  )
}

export default Card