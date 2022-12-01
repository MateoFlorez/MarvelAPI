import "../components.css"

export function LastSection() {
    return (
        <div className="bg-black w-full flex justify-center text-white">
            <div className="flex flex-col box-border gap-2 pt-2 md:pt-0 cursor-pointer items-center md:flex-row 2xl:gap-40">
                <figure className="flex justify-center">
                    <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg" alt="" className="w-screen md:w-full"></img>
                </figure>
                <div className="flex flex-col md:justify-center text-center items-center h-96 gap-2 pr-5">
                    <h1 className="font-bold text-red-600 text-2xl mb-4">MARVEL INSIDER</h1>
                    <h1 className="font-bold text-2xl">Watch, Earn, Redeem!</h1>
                    <p className="mb-4">Get Rewarded for doing what you already do as a fan.</p>
                    <button className="boton bg-red-600 w-28 h-10">JOIN NOW</button>
                    <div className="text-xs absolute mt-80">Terms and Conditions Apply.</div>
                </div>
            </div>
        </div>
    )
}