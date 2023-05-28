
const datos = store => {
  store.on('@init', () => ({ datos: { alto: null, ancho: null, selected: false, tiempo: null } }))
  store.on('update', (_, nuevos) => ({ datos: { alto: nuevos.alto, ancho: nuevos.ancho, selected: nuevos.selected, tiempo: nuevos.tiempo } }))
  store.on('borrar', (_) => ({ datos: { alto: null, ancho: null, selected: false, tiempo: null } }))
}

export default datos
