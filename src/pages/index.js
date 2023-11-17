import Busca from "@/components/Busca";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { api } from "@/service/apiClient";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [series, setSeries] = useState([]);
  const getSeries = async () => {
    try {
      const res = await api.get("/series");
      setSeries(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getSeries();
  }, []);
  return (
    <>
      <Header />
      <Busca />
      <div>
        {series?.map((serie) => (
          <div key={serie.id}>
            <p>{serie.attributes.titulo}</p>
            <Image 
            src={``}
            width={209}
            height={300}
            alt={serie.attributes.titulo}
            />
            
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
