import { create } from "zustand";
const API_URL = import.meta.env.DEV
  ? "http://localhost:3000"
  : import.meta.env.VITE_API_URL;
export const useStore = create((set) => ({
  systemStats: async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/system_stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  postWaitlist: async (email, role) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/email_endpoint`, {
        method: "POST",
        body: JSON.stringify({ email, role }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) {
        console.error(data.error);
        throw new Error(data.error);
      }
      set({ email, role });
      return data;
    } catch (err) {
      console.error(err);
    }
  },
}));
