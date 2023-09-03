import prisma from "@/db";
import { route1 } from "@/helpers/routes";
prisma.user.create({
  data: {
    username: "test",
  },
});

export default async function Task2() {
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

  const rides = await prisma.ride.findMany({
    include: {
      locations: true,
    },
  });
  console.log("rides");
  console.log(rides[0].locations);
  return <div>eh</div>;
}
