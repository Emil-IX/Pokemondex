import { usePokemon } from "./hooks/usePokemon"



export const Pokemondex = () => {
 
     const { pokemon , pokemonReady } = usePokemon();

     if (!pokemonReady) {
          return (

            <div className="alert alert-danger">Loading...</div>
          )
     }
      


  return (

    <>

     <div className="container">
        <h1 >Pokemon list</h1>
          <hr />

          <table className="table">

            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>

            <tbody>
               {
                 pokemon.map( ({ id, name, picture  }) => ( 
                      <tr key={id} className="align-middle">
                          <td> {id} </td>
                          <td> { name} </td>
                          <td> <img src={picture} alt={name} style={{ height: 80 }}  /> </td>
                      </tr>
                ))

               }
            </tbody>

          </table>
     </div>
    
    </>
  )
  
}
