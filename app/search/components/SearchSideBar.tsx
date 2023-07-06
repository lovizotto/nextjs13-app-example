import Link from "next/link";

export default function SearchSideBar() {

    return (
        <div className="w-1/5">
            <div className="border-b pb-4 flex flex-col">
                <h1 className="mb-2">Region</h1>

                <Link
                    href={'/search'}
                    className="font-light text-reg capitalize"

                >
                    sdlkjasdk jaslkd
                </Link>

            </div>
            <div className="border-b pb-4 mt-3 flex flex-col">
                <h1 className="mb-2">Cuisine</h1>

                <Link
                    href={'/asdasd'}
                    className="font-light text-reg capitalize"

                >
                    asdasd
                </Link>

            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">

                    <Link
                        href={'/asdasd'}

                    >
                        asldkjasd
                    </Link>

                </div>
            </div>
        </div>
    );
}
