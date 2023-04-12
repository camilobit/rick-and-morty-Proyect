import { connect } from 'react-redux'

const Favorite = ({ myFavorites }, Card, onClose) => {

    return (
            <div class="contenedor-cards">
                {myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
                    return(
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            image={image}
                            origin={origin.name}
                            onClose={onClose}
                        />
                    )
                })
                }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,//me permite acceder al estado global
    null//me permite despachar acciones
)(Favorite);