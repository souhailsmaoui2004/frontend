import React from 'react'

const Affichearticle = ({articles,handleDelete}) => {
  return (
    <div>
      <table className='table table-striped'>
<thead>
<tr>
    <th>image</th>
    <th>Référence</th>
    <th>Désignation</th>
    <th>Marque</th>
    <th>Quantité</th>
    <th>Prix</th>
    <th>Update</th>
    <th>Delete</th>
</tr>

</thead>
<tbody>
{
 articles.map((art,index)=>
<tr key={index}>
    <td><img src={art.imageart} height={80} width={80}/></td>
    <td>{art.reference}</td>
    <td>{art.designation}</td>
    <td>{art.marque}</td>
    <td>{art.qtestock}</td>
    <td>{art.prix}</td>
    <td><button className='btn btn-warning'><i class="fa-solid fa-pen-to-square"></i> Update</button></td>
    <td><button className='btn btn-danger' onClick={()=>handleDelete(art._id)}> Delete</button></td>

 </tr>
)

}

</tbody>
      </table>
    </div>
  )
}

export default Affichearticle
