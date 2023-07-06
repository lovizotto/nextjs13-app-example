import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";
import {PRICE, PrismaClient} from "@prisma/client";
interface Restaurant {
    name: string,
    images: string[],
    description: string,
    slug: string,
    price: PRICE
}
const prisma = new PrismaClient();
const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            name: true,
            images: true,
            description: true,
            slug: true,
            price: true
        }
    })

    if (!restaurant) {
        throw new Error(`No restaurant found with slug: ${slug}`)
    }

    return restaurant
}
export default async function RestaurantDetails({ params }: {params: {slug: string}}) {
    const restaurant = await fetchRestaurantBySlug(params.slug)
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug}/>
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
}
