const SwapDetails = () => {
  return (
    <div className="contain justify-start items-center  flex-col gap-0">
      <img
        src="/logo.png"
        className="w-[90%] max-w-[550px] object-contain"
        alt=""
      />
      <div className="flex sm:-translate-y-3 px-8 justify-between items-center w-full max-w-[730px] min-h-[50px] overflow-hidden rounded-md sm:rounded-full relative isolate sm:flex-row flex-col sm:py-0 py-3 sm:gap-0 gap-4">
        <div className="bg-mainGr absolute opacity-40 left-0 top-0 w-full h-full -z-10"></div>
        <p className="text-white font-bold text-base sm:text-sm md:text-base">
          TVL(24HR): $47,560,500
        </p>
        <p className="text-white font-bold text-base sm:text-sm md:text-base">
          FEES(24HR): $75,605
        </p>
        <p className="text-white font-bold text-base sm:text-sm md:text-base">
          VOLUME (24HR): $759,605
        </p>
      </div>
    </div>
  );
};

export default SwapDetails;
