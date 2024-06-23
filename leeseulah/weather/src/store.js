import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  weather: null,
  city: "",
  loading: false,
  error: null,
  setCity: (city) => set({ city }),
  fetchWeather: async (city) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c849397811eba4c7dc39f3e9f6d5171&units=metric`
      );
      set({ weather: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useStore;
