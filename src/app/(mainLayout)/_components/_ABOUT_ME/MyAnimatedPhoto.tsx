"use client";

import Image from "next/image";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "../_Animations_Genaretor/AnimatedCards";

export function MyAnimatedPhoto() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="w-full mt-4" translateZ="100">
          <Image
            alt="thumbnail"
            className="h- w-full object-cover rounded-xl group-hover/card:shadow-xl"
            height="1000"
            src="https://res.cloudinary.com/dyalzfwd4/image/upload/v1729179383/Ali_Ashraf_Photo_ab35ru.jpg"
            width="1000"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
