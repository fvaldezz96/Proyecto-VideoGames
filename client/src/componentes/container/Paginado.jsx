

export default function Paginado({ videogamesPerPage, allVideogames, paginado }) {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) {
      pageNumbers.push(i)
   }

   return (
      <nav className="">
         <ul className="">
            {
               pageNumbers && pageNumbers.map((np) => (//np == numero de pagina
                  <li key={np}>
                     <a className="" onClick={() => paginado(np)}>{np}</a>
                  </li>
               ))
            }
         </ul>
      </nav>
   )
}
