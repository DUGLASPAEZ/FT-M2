import Card from './Card';

export default function Cards({characters}) {
   return(
       <div className='cards_container'>
         <div className='card'>
            {
               characters && characters.map((element, index)=> {
            return(
               <Card key = {index}
               
               id={element.id}
               name={element.name}
               status={element.status}
               species={element.species}
               gender={element.gender}
               origin={element.origin.name}
               image={element.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               >

               </Card>
            )
               })
            }

         </div>

       </div>

   )   
}
