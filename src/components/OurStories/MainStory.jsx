
import partners from "../../assets/images/partner-relation.png";
export const MainStory = () => {
  return (
    <section className="max-w-7xl mx-auto py-2">
        

 
  <div className="grid gap-6 grid-cols-2 justify-items-center sm:gap-12 lg:grid-cols-3 lg:gap-8 mb-16 px-6 ">
   
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Accuracy rate</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-cyan-400">99.95%</p>
      <p className="mt-1 text-gray-500">in fulfilling orders</p>
    </div>
    

   
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Startup businesses</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-cyan-400">2,000+</p>
      <p className="mt-1 text-gray-500">partner with Preline</p>
    </div>
    

   
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Happy customer</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-cyan-400">85%</p>
      <p className="mt-1 text-gray-500">this year alone</p>
    </div>
    
  </div>


        <div className="grid md:grid-cols-3 grid-col-1  gap-16 py-4 px-4">
            <div className=" col-span-1">
                <img src={partners} className="w-full"  />
            </div>
            <div className="md:col-span-2"> 
                <h1 className="  xl:text-6xl  md:text-4xl sm:text-lg text-2xl font-semibold font-heebo text-cyan-400">About Oskar Team</h1>
                <h1 className=" lg:text-3xl md:text-sm text-xl font-semibold">History</h1>
                <p className=" whitespace-pre-line pt-4">
                Since 1999, Oskar Group has grown from a small family business in Dubai to a proud pioneer of the tech accessories business with multiple offices, warehouses, and retail stores across the Middle East and North Africa. Over the past two decades, with advanced technology, professionalism, and customer relationship management, we have been recommending the most suitable products and services for all types of gadgets and tech accessories requirements in the region.

Our value-driven business approach has made us one of the most trusted companies in the region, offering innovative, cost-effective, and customized solutions. Moreover, our competitive and experienced staff enables us to source, stock, and promptly distribute quality products worldwide. Our core values are customer satisfaction, product innovation, service excellence, and teamwork. Keeping the legacy alive, we continue to grow by expanding our product line and reaching new markets.
We constantly strive to bring new and innovative products to the market at competitive price tags. Our product range includes a wide selection of mobile accessories such as cases, covers, screen protectors, chargers, power banks, smart gadgets like smartwatches, compact home appliances, travel-friendly electronics, and much more. Our exclusive distribution agreements with global brands and worldwide distribution networks always keep us ahead of the curve. With our on-time delivery system, customers can track their order from the moment its placed until it arrives at their doorstep, no matter where you are.
                </p>
            </div>
        </div>
    </section>
  )
}
