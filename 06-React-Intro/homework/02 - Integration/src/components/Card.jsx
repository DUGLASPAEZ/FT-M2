export default function Card({ id, name, status, species, gender, origen,image, onClose}) {
   return (
      <div>
          <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origen}</h2>
         <img src={image} alt={name} /> 
      </div>
   );
}
