export default function Card({ name, species, gender, origin, status, image, id, onClose }) {
   return (
      <div class="tarjeta">
         <button onClick={onClose}>X</button>
         <h2> {name}</h2>
         <h2> {species}</h2>
         <h2> {gender}</h2>
         <h2> {origin}</h2>
         <h2> {status}</h2>
         <img src={image} alt='' />
      </div>
   );
}
