import CharacterCard from "./CharacterCard"

const CharactersGrid = () => {

    const mockCharacters = [
    { id: 1, name: "Hero 1", img: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" },
    { id: 2, name: "Hero 2", img: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" },
    { id: 3, name: "Hero 3", img: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" },
    { id: 4, name: "Hero 4", img: "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" },
  ];

  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-5 
        sm:px-10
        md:px-20
        lg:px-0
        
        '>
            {mockCharacters.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    </>
  )
}

export default CharactersGrid;