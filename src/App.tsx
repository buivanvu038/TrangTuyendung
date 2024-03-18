// App.tsx

import React, { useEffect } from "react";
import "./App.css";
import Defaulayout from "./container/Defaulayout";
import { ref, get, child } from "firebase/database";
import { database } from "./../src/services/firebase";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database, "users");
        const snapshot = await get(child(dbRef, "users"));
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Defaulayout />
    </div>
  );
}

export default App;
