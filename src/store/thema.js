
const thema = store => {
  console.log('entro Store')
  store.on('@init', () => ({ thema: { tema: 1 } }))
  store.on('update/tema', (_, nuevos) => ({ thema: { tema: nuevos.tema } }))
  console.log('thema', thema.tema)
  store.on('borrar', (_) => ({ thema: { tema: 1 } }))
}

export default thema
