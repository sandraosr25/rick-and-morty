export default function Characters(props) {
    const { characters, setCharacters, location, episodio } = props;
    const resetCharacters = () => {
        setCharacters(null);
    }
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>
                Volver a home
            </span>
            <div className="container-characters">
                {characters.map((characters, index) => (
                    location.map((location, index1) => (
                        episodio.map((episodio, index) => (
                            <div className="character-container" key={index}>
                                <div>
                                    <img src={characters.image} alt={characters.name} />
                                </div>
                                <div>
                                    <h3>{characters.name}</h3>
                                    <h6>
                                        {characters.status === "Alive" ? (
                                            <>
                                                <span className="alive" />
                                                Alive
                                            </>
                                        ) : (
                                            <>
                                                <span className="dead" />
                                                Dead
                                            </>
                                        )}
                                    </h6>
                                    <p>
                                        <span className="text-grey">Episodios:</span>
                                        <span>{characters.episode.length}</span>
                                    </p>
                                    <p>
                                        <span className="text-grey">Especie:</span>
                                        <span>{characters.species}</span>
                                    </p>
                                    <p>
                                        <span className="text-grey">Ubicacion:</span>
                                        <span>{location.name}</span>
                                    </p>
                                    <p>
                                        <span className="text-grey">Episodios:</span>
                                        <span>{episodio.episode}</span>
                                    </p>
                                </div>
                            </div>
                        ))))))}
            </div>
            <span className="back-home" onClick={resetCharacters}>
                Volver a home
            </span>
        </div>
    );
}