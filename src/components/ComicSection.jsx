export function ComicSection() {
  return (
    <div className="bg-black w-full flex justify-center text-white">
      <div className="flex flex-col box-border gap-2 md:flex-row-reverse 2xl:gap-10">
        <figure className="flex justify-center w-full box-border p-0 object-cover">
          <img
            src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/newtomu_base_set_dsk_relaunch.jpg"
            alt=""
            className="w-screen h-full md:w-full"
          ></img>
        </figure>
        <div className="flex flex-col justify-center items-center h-96 gap-2 w-full">
            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mulogo_lob_log_eye_01.png" alt="" className="w-16"/>
          <h1 className="font-bold text-xl mb-4">
            AVAILABLE NOW
          </h1>
          <h1 className="font-bold text-4xl">NEW ON MARVEL UNLIMITED</h1>
          <p className="">
            Read these plus 30,000+ digital comics for $9.99 a month!
          </p>
          <button className="boton bg-transparent py-2 px-6 w-fit hover:border-gray-400 border-white border-2">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
}
