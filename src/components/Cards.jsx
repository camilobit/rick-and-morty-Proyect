import Card from './Card';

export default function Cards({ characters }) {
// export default function Cards(props) {
//    const { characters } = props
   
//    let personaje =  characters.map(characters => (
//       <Card
//          {...characters}
//          key={props.id}
//          onClose={() => window.alert('Emulamos que se cierra la card')}
//       />))
   return (
      // <div>
      //    {personaje}
      // </div>
      <div class="contenedor-cards">
         {
            characters.map(({ id, name, status, species, gender, origin, image }) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     image={image}
                     origin={origin.name}
                     onClose={() => window.alert('Emulamos que se cierra la card')}
                  />
               )
            })
         }
      </div>
   )
}
