

export default function Paginado({ videogamesPerPage, allVideogames }) {
   const pageNumbers = []

   for (let i = 1; i <= Meth.ceil(allVideogames / videogamesPerPage); i++) {
      pageNumbers.push(i)
   }

   return (
      <nav className="">
         <ul className="">
            {
               pageNumbers && pageNumbers.map((np) => (//np == numero de pagina
                  <li key={np}>
                     <a className="" onClick={() => Paginado(np)}>{np}</a>
                  </li>
               ))
            }
         </ul>
      </nav>
   )
}
