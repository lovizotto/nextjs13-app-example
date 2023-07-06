import {Cuisine, Location, PRICE} from "@prisma/client";
import Link from "next/link";


export default function RestaurantCard() {

  return (
    <div className="border-b flex pb-5 ml-4">
      <img src='asdasd' alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">asdasd</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
           *****
          </div>
          <p className="ml-2 text-sm">asdasds</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
           asdasdasdasd
            <p className="mr-4 capitalize">asdasda</p>
            <p className="mr-4 capitalize">asdasdsd</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/asdasd`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
