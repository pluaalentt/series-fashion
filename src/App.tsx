import { useState } from 'react'
import './App.css'
import { seriesData, Character, Outfit } from './data/seriesData'

function App() {
  const [selectedSeriesId, setSelectedSeriesId] = useState<string>('')
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>('')
  const [selectedClothingType, setSelectedClothingType] = useState<string>('')
  const [selectedClothingSeason, setSelectedClothingSeason] = useState<string>('')
  const [displayedOutfits, setDisplayedOutfits] = useState<Outfit[]>([])
  const [characterName, setCharacterName] = useState<string>('')

  const selectedSeries = seriesData.find(s => s.id === selectedSeriesId)
  const availableCharacters = selectedSeries?.characters || []
  
  // Get unique clothing types from selected character's outfits
  const selectedCharacter = selectedSeries?.characters.find(c => c.id === selectedCharacterId)
  const availableClothingTypes = selectedCharacter 
    ? Array.from(new Set(selectedCharacter.outfits.map(o => o.type)))
    : []
  
  // Get unique seasons from selected character's outfits
  const availableClothingSeasons = selectedCharacter
    ? Array.from(new Set(selectedCharacter.outfits.map(o => o.clothingSeason).filter(s => s !== undefined))) as string[]
    : []

  const handleSeriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeriesId(e.target.value)
    setSelectedCharacterId('')
    setSelectedClothingType('')
    setSelectedClothingSeason('')
    setDisplayedOutfits([])
    setCharacterName('')
  }

  const handleCharacterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCharacterId(e.target.value)
    setSelectedClothingType('')
    setSelectedClothingSeason('')
    setDisplayedOutfits([])
    setCharacterName('')
  }

  const handleClothingTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClothingType(e.target.value)
  }

  const handleClothingSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClothingSeason(e.target.value)
  }

  const handleSearch = () => {
    if (selectedCharacterId && selectedSeries) {
      const character = selectedSeries.characters.find(
        (c: Character) => c.id === selectedCharacterId
      )
      if (character) {
        let outfits = character.outfits
        
        // Filter by clothing type if selected
        if (selectedClothingType) {
          outfits = outfits.filter(outfit => outfit.type === selectedClothingType)
        }
        
        // Filter by clothing season if selected
        if (selectedClothingSeason) {
          outfits = outfits.filter(outfit => outfit.clothingSeason === selectedClothingSeason)
        }
        
        setDisplayedOutfits(outfits)
        setCharacterName(character.name)
      }
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Series Fashion</h1>
        <p>Explore iconic looks from your favorite shows</p>
      </header>

      <div className="main-container">
        <section className="selector-section">
          <div className="selector-grid">
            <div className="selector-item">
              <label htmlFor="series-select">Serie</label>
              <select
                id="series-select"
                value={selectedSeriesId}
                onChange={handleSeriesChange}
              >
                <option value="">Selecciona una serie...</option>
                {seriesData.map(series => (
                  <option key={series.id} value={series.id}>
                    {series.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="selector-item">
              <label htmlFor="character-select">Personaje</label>
              <select
                id="character-select"
                value={selectedCharacterId}
                onChange={handleCharacterChange}
                disabled={!selectedSeriesId}
              >
                <option value="">Selecciona un personaje...</option>
                {availableCharacters.map(character => (
                  <option key={character.id} value={character.id}>
                    {character.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="selector-item">
              <label htmlFor="clothing-type-select">Tipo de Ropa</label>
              <select
                id="clothing-type-select"
                value={selectedClothingType}
                onChange={handleClothingTypeChange}
                disabled={!selectedCharacterId}
              >
                <option value="">Todos los tipos</option>
                {availableClothingTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="selector-item">
              <label htmlFor="clothing-season-select">Estación del Año</label>
              <select
                id="clothing-season-select"
                value={selectedClothingSeason}
                onChange={handleClothingSeasonChange}
                disabled={!selectedCharacterId}
              >
                <option value="">Todas las estaciones</option>
                {availableClothingSeasons.map(season => (
                  <option key={season} value={season}>
                    {season.charAt(0).toUpperCase() + season.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="search-button"
            onClick={handleSearch}
            disabled={!selectedCharacterId}
          >
            Search
          </button>
        </section>

        {displayedOutfits.length > 0 && (
          <section className="gallery-section">
            <h2 className="character-title">
              {characterName}
            </h2>
            <div className="outfits-grid">
              {displayedOutfits.map(outfit => (
                <article key={outfit.id} className="outfit-card">
                  <div className="outfit-image-container">
                    <img
                      src={outfit.image}
                      alt={outfit.title}
                      className="outfit-image"
                    />
                  </div>
                  <div className="outfit-info">
                    <h3 className="outfit-title">{outfit.title}</h3>
                    <p className="outfit-description">{outfit.description}</p>
                    <div className="outfit-meta">
                      {outfit.season && <span>Temporada {outfit.season}</span>}
                      {outfit.episode && <span>Episodio {outfit.episode}</span>}
                      {outfit.clothingSeason && (
                        <span className="outfit-season">
                          {outfit.clothingSeason.charAt(0).toUpperCase() + outfit.clothingSeason.slice(1)}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default App
