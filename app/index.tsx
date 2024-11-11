import { Text, View } from "react-native";
import axios from "axios";  // Import axios
import { useEffect, useState } from "react";
export default function Index() {
 const esp_server = "http://localhost:3000"
 const [data, setData] = useState(null);
 useEffect(()=>{
const fetchData = async () => {
  const response = await axios.get(esp_server);
  console.log(response.data, "esp_server response");
  setData(response.data.value);
}
fetchData();
// Set up interval to fetch data every 3 seconds
const intervalId = setInterval(fetchData, 3000);

// Clear the interval when the component unmounts
return () => clearInterval(intervalId);
 },[])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{data} no. from esp test server </Text>
    </View>
  );
}
