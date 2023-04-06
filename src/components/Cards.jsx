import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   

   const listItems = characters.map(personajes => (<Card{...personajes} onClose = {() => window.alert("Emulamos que se cierra la card")}/>))
   
   return <div class="contenedor-cards">
      {listItems}
   </div>
}
