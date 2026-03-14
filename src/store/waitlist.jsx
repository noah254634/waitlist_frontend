import { create } from "zustand";
const port = "http://localhost:3000";
export const useStore = create((set) => ({
    systemStats:async()=>{
        try{
            const response=await fetch(`${port}/api/v1/system_stats`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data=await response.json()
            console.log(data)
            return data
        }catch(err){
            console.log(err)
        }
    },
  postWaitlist: async (email, role) => {
    try {
      const response = await fetch(`${port}/api/v1/email_endpoint`, {
        method: "POST",
        body: JSON.stringify({ email, role }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
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
