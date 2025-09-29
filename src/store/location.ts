import {create} from 'zustand';

interface LocationState {
  moveLocation: string | null;
  setMoveLocation: (moveLocation: string | null) => void;
}

const useLocationStore = create<LocationState>(set => ({
  moveLocation: null,
  setMoveLocation: (moveLocation: string | null) => {
    set(state => ({...state, moveLocation}));
  },
}));

export default useLocationStore;
