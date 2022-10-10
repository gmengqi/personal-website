import { Box, list, useEditable } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import navBar from "../components/navBar";

export default function Menu() {
  const [loading, setLoading] = useState(false);
  const [listOfMains, setListOfMains] = useState([]);

  useEffect(() => {
    getMains();
  }, []);

  const getMains = async () => {
    const { data: itemList } = await supabase
      .from("mains")
      .select("name, price")
      .order("item", true);

    setListOfMains(itemList);
  };

  return (
   <text> 
   hi </text>
  );
}
