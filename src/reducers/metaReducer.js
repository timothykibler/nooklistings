export default (state = {}, { type, meta }) => {

  switch (type) {

   case 'UPDATE_META':

    console.log(meta)

    return {
      ...state,
      meta
    }

   default:
    return {
      ...state,
      meta: {}
    }
  }
 }