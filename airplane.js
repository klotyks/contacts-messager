const airplane = {
  id: 42,
  brand: 'Lockheed Martin',
  model: 'SR-71',
  codename: 'Blackbird',
  year: 1971,
  maxSpeedMach: 5,
  fuelTotal: 10000,
  fuelCurrent: 5000,
  engineType: 'super-puper',
  enginesCount: 2,
  hp: 42000,
  wingsCount: 2,
  country: 'USA',
  color: 'black',
  maxHeightMeters: 30000,
  pilotCount: 2,
}

function editAirplane(airplane, updatingData) {
  Object.assign(airplane, updatingData)
}

airplane
editAirplane(airplane, { color: 'white' })
airplane
