import React from "react";
import Image from "next/image";
import { PictureDay } from "@utils/interfaces";

export default function Picture({ picture }: PictureDay) {
  return (
    <Wrapper>
      <h2>{picture?.title}</h2>
      <p>{picture?.explanation}</p>
      <Image src={picture?.url} height="390px" width="685px" />
    </Wrapper>
  );
}
