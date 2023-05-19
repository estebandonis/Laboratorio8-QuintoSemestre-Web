
const datos = store => {
  store.on('@init', () => ({ datos: { alto: null, ancho: null, selected: false, tiempo: null, theme: 1 } }))
  store.on('update', (_, nuevos) => ({ datos: { alto: nuevos.alto, ancho: nuevos.ancho, selected: nuevos.selected, tiempo: nuevos.tiempo, theme: nuevos.theme } }))
  store.on('borrar', (_) => ({ datos: { alto: null, ancho: null, selected: false, tiempo: null, theme: 1 } }))
}

export default datos
