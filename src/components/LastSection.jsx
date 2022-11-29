import "../components.css"

export function LastSection() {
    return (
        <div className="bg-black w-screen flex justify-center text-white">
            <div className="flex box-border gap-40 py-1 cursor-pointer">
                <figure>
                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg" alt=""></img>
                </figure>
                <div className="flex flex-col justify-center text-center items-center gap-2 pr-5">
                    <h1 className="font-bold text-red-600 text-2xl mb-4">MARVEL INSIDER</h1>
                    <h1 className="font-bold text-2xl">Watch, Earn, Redeem!</h1>
                    <p className="mb-4">Get Rewarded for doing what you already do as a fan.</p>
                    <button className="boton bg-red-600 w-28 h-10">JOIN NOW</button>
                </div>
            </div>
        </div>
    )
}