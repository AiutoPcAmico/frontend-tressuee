import towerMapFake from '../img/maps_placeholder.png'

function TowersMap() {
    return (
        <div>
            <h3>Mappa delle postazioni di ricarica</h3>
            <img alt="refiller map" src={towerMapFake}></img>
        </div>
    )
}

export { TowersMap }