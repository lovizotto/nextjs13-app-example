import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/asdasdasd`}>
        <img src='' alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">laksdjaskdj</h3>
          <div className="flex items-start">
           alksjdalksjdlasd
            <p className="ml-2">
             reviews
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">asdasdas</p>
            <p>asdlkjasdlkjaslkdj alskd jlkasjd</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
