/* eslint-disable react/prop-types */

import { useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsLayout } from "./components/DetailsLayout";
import { ImageSection } from "./components/ImageSection";
import { ThumbnailSection } from "./components/ThumbnailSection";
import { MetaSection } from "./components/MetaSection";
import {useData} from "./useData";

export function Details() {
  const { id } = useParams();
  const {data} = useData({id});
  const [selectedImage, setSelectedImage] = useState("");

 
  if (!data) {
    return <span>Loading</span>;
  }

  return (
    <DetailsLayout>
      <ImageSection
        alt={data.name}
        src={
          selectedImage || data.sprites.other["official-artwork"].front_default
        }
      />
      <ThumbnailSection
        name={data.name}
        selectedImage={selectedImage}
        handleMouseEnter={(e) => setSelectedImage(e.target.src)}
        thumbnailOneSrc={data.sprites.other["official-artwork"].front_default}
        thumbnailTwoSrc={data.sprites.other.dream_world.front_default}
        thumbnailThreeSrc={data.sprites.front_default}
        thumbnailFourSrc={data.sprites.back_default}
      />

      <MetaSection
        id={data.id}
        type={data.types[0].type.name}
        image={
          data.sprites.other["official-artwork"].front_default
        }
        name={data.name}
        price={data.base_experience}
        stats={data.stats}
        abilities={data.abilities}
      />
    </DetailsLayout>
  );
}
