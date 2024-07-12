import React from 'react'
import { Link } from 'react-router-dom'

const Affichearticle = ({articles,handleDelete}) => {
  return (
    <div>
       <div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">

<Link className="btn btn-outline-light" to="/articles/add">
Ajouter article
</Link>
</div>
</nav>
</div>

      <table className='table table-striped'>
<thead>
<tr>
    <th>image</th>
    <th>Référence</th>
    <th>Désignation</th>
    <th>Marque</th>
    <th>Quantité</th>
    <th>Prix</th>
    <th>View</th>
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
    <td>
<Link className="btn btn-primary btn-sm mx-2" to={`/article/view/${art._id}`}><i class="fa-solid fa-pen-to-square"></i>
Consulter
</Link>
</td>

     <td><button className='btn btn-warning btn-sm mx-1' style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}>
    <i class="fa-solid fa-pen-to-square"></i> Update
</button>
</td>
    {/* <td><button className='btn btn-warning btn-sm mx-1'><i class="fa-solid fa-pen-to-square"></i> Update</button></td> */}
    <td><button className='btn btn-danger btn-sm mx-2' onClick={()=>handleDelete(art._id)}><i class="fa-solid fa-pen-to-square"></i> Delete</button></td>

 </tr>
)

}

</tbody>
      </table>
    </div>
  )
}

export default Affichearticle
