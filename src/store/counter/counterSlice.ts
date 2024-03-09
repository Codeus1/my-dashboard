import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}


const initialState: CounterState = {
  count: 5,
  isReady: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if ( state.isReady ) return;
      
      state.count = action.payload;
      state.isReady = true;
    },

    addOne(state) {
      state.count++;
    },

    substractOne(state) {
      if ( state.count === 0 ) return;

      state.count--;
    },

    resetCount( state, action: PayloadAction<number> ) {
      if ( action.payload < 0 ) action.payload = 0;

      state.count = action.payload;

    }


  }
});

export const { addOne, substractOne, resetCount, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;




/**
 *   NOTE:
 * YO: o sea que para el estado de cada "cosa" en este caso un contador, se debe tener 
 * un archivo en la carpeta store que represente el estado y las acciones del mismo para 
 * que puedan ser llamadas para realizar cambios en objetos que estan presentes en componentes
 *  de nuestra aplicacion, verdad?
 * 
 * 
 * --- ChatGPT ---
 * Exactamente. En Redux, el estado de la aplicación se maneja centralmente a través de
 *  un store, y cada "cosa" que deseas representar en el estado de la aplicación debe
 *  tener su propio slice o segmento de estado. Cada slice de estado puede tener sus
 *  propios reductores, acciones y selectores asociados.

 * En un proyecto de Redux típico, se suele organizar el código relacionado con el estado
 * de la aplicación en una carpeta específica, como store, donde se pueden tener
 *  subcarpetas para los diferentes slices de estado. Dentro de cada slice de estado, 
 * puedes tener archivos para definir los reductores, acciones y selectores asociados.

 * Por ejemplo, para un contador simple en Redux, podrías tener una estructura de carpetas
 * como esta:

store/
  - counter/
    - actions.js    // Definición de acciones
    - reducers.js   // Reductores
    - selectors.js  // Selectores
    - types.js      // Tipos de acciones
 
 * En actions.js, defines las funciones creadoras de acciones que se utilizan para enviar
 * acciones al store. En reducers.js, defines los reductores que actualizan el estado del
 *  contador en respuesta a las acciones. En selectors.js, defines funciones de selección
 *  que te permiten extraer partes específicas del estado global del contador. Y en 
 * types.js, defines los tipos de acciones que se utilizan para identificar las acciones 
 * en los reductores y las funciones creadoras de acciones.

 * Esta estructura organizativa facilita la gestión y el mantenimiento del estado de la
 * aplicación en un proyecto de Redux. 
 * */