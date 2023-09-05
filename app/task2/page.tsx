"use client";

import prisma from "@/db";
import { route1 } from "@/helpers/routes";
import { GoogleMap } from "@react-google-maps/api";
import { useMap } from "@/hooks/useMap";
import { useRidesAPI } from "@/hooks/useRidesAPI";
import Link from "next/link";
export default function Task2() {
  const { isLoaded, calculateAndDisplayRoute } = useMap();
  const { data, error, isLoading } = useRidesAPI();
  if (isLoading) {
    return;
  }
  // UNCOMMENT TO ADD MOCK DATA TO DB

  //   const user = await prisma.user.create({
  //     data: {
  //       username: "test",
  //     },
  //   });
  //   const ridecreate = await prisma.ride.create({
  //     data: {
  //       userId: user.id,

  //       locations: {
  //         create: [...route1],
  //       },
  //     },
  //     include: {
  //       locations: true,
  //     },
  //   });

  //

  const containerStyle = {
    width: "800px",
    height: "400px",
  };

  if (!isLoaded) {
    return <>Loading..</>;
  }
  if (error) {
    console.dir(error.message);
    return <>Something went wrong</>;
  }
  return (
    <div>
      {" "}
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        onLoad={calculateAndDisplayRoute.bind(null, data)}
      >
        <></>
      </GoogleMap>
    </div>
  );
}
