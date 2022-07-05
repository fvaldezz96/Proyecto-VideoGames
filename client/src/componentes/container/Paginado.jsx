import '../style.css/Paginado.css'

export default function Paginado({ videogamesPerPage, allVideogames, paginado }) {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) {
      pageNumbers.push(i)
   }
  
   return (
      <nav className="">
         <ul className="paginado">
            {
               pageNumbers && pageNumbers.map((np) => (//numero de pagina
                  <li key={np}>
                     <a className="" onClick={() => paginado(np)}>{np}</a>
                  </li>
               ))
            }
         </ul>
      </nav>
   )
}
