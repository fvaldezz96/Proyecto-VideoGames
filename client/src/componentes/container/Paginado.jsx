import '../style.css/Paginado.css'

export default function Paginado({ videogamesPerPage, allVideogames, paginado }) {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) {
      pageNumbers.push(i)
   }

   return (
      <nav className="numberContainer">
         <div>
            {
               pageNumbers && pageNumbers.map((np) => (//numero de pagina
                  <a
                     className="number"
                     key={np}
                     onClick={() => paginado(np)}>{np}
                  </a>
               ))
            }
         </div>
      </nav>
   )
}
