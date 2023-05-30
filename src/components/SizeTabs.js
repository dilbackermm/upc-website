import React from 'react'

const SizeTabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-0.5 last:mr-0 flex-auto text-center">
                <a
                  className={
                    " text-lg lg:text-base sm:text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                    (openTab === 1
                      ? "  bg-primaryDark rounded-t-2xl text-light shadow-inner"
                      : "text-primaryDark/80 border border-b-primaryDark/25 rounded-t-2xl")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  UTILITY
                </a>
              </li>
              <li className="-mb-px mr-0.5 last:mr-0 flex-auto text-center ">
                <a
                  className={
                    " text-lg lg:text-base sm:text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                    (openTab === 2
                        ? "  bg-primaryDark rounded-t-2xl text-light shadow-inner "
                        : "text-primaryDark/80 border border-b-primaryDark/25 rounded-t-2xl")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                   STANDARD
                </a>
              </li>
              <li className="-mb-px mr-0.5 last:mr-0 flex-auto text-center ">
                <a
                  className={
                    " text-lg lg:text-base sm:text-xs font-bold uppercase px-5 py-3  block leading-normal " +
                    (openTab === 3
                        ? "  bg-primaryDark rounded-t-2xl text-light shadow-inner"
                      : "text-primaryDark/80 border border-b-primaryDark/25 rounded-t-2xl")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  HEAVY
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words w-full   rounded">
              <div className="-mb-px mr-2 last:mr-0 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <table class="w-full p-3 table-auto text-center  bg-light/50 border border-dark/75 shadow-lg pt-12 sm:text-sm ">
<tbody className='text-dark/90 text-left  '>
     <tr className='border-b border-b-dark/25 '>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Item</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Polypropelene Woven Air Bag</td>
       
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Grammage of fabric</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Differs based on application</td>
      
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Product description</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Woven fabric with Polyethelene 
        film inside sewn top and bottom with a virgin universal valve onthe side</td>
  
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Level</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Meets upto LEVEL 1 grade of AAR</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Fits for</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>All type of general Cargo</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Usage Pressure</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>2.5 - 3.0 PSI</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Modes of Transportation</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Road / Rail</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Void Size Gap</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '> Upto 12" Max </td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Width</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>30" 36" 48" &amp; 60"</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Length</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Can be cut to various length & customised </td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Load Capacity</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Upto 45,000 lbs</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Pallet weight</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Approx : 700 lbs</td>
 
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Packed in</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Gaylord boxes</td>
       
    </tr>
    <tr className=''>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Gaylord / Pallet size</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>100cm x 120cm</td>
        
    </tr>
</tbody>
</table>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <table class="w-full p-3 table-auto text-center  bg-light/50 border border-dark/75 shadow-lg pt-12 sm:text-sm ">
<tbody className='text-dark/90 text-left  '>
     <tr className='border-b border-b-dark/25 '>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Item</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Polypropelene Woven Air Bag</td>
       
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Grammage of fabric</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Differs based on application</td>
      
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Product description</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Woven fabric with Polyethelene 
        film inside sewn top and bottom with a virgin universal valve onthe side</td>
  
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Level</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Meets upto LEVEL 3 grade of AAR</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Fits for</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Medium to heavy cargo</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Usage Pressure</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>4.0 - 8.0 PSI</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Modes of Transportation</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Rail / Sea</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Void Size Gap</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Upto 15" Max</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Width</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>30" 36" 48" &amp; 60"</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Length</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Can be cut to various length & customised </td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Load Capacity</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Upto 75,000 lbs</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Pallet weight</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Approx : 700 lbs</td>
 
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Packed in</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Gaylord boxes</td>
       
    </tr>
    <tr className=''>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Gaylord / Pallet size</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>100cm x 120cm</td>
        
    </tr>
</tbody>
</table>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <table class="w-full p-3 table-auto text-center  bg-light/50 border border-dark/75 shadow-lg pt-12 sm:text-sm ">
<tbody className='text-dark/90 text-left  '>
     <tr className='border-b border-b-dark/25 '>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Item</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Polypropelene Woven Air Bag</td>
       
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Grammage of fabric</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Differs based on application</td>
      
    </tr>
     <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Product description</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Woven fabric with Polyethelene 
        film inside sewn top and bottom with a virgin universal valve onthe side</td>
  
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Level</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Meets upto LEVEL 5 grade of AAR</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Fits for</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Heavy cargo</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Usage Pressure</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>4.0 - 1.0 PSI</td>
    
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Modes of Transportation</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Rail / Sea</td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Void Size Gap</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Upto 20" Max</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Width</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>30" 36" 48" &amp; 60"</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Length</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Can be cut to various length & customised </td>
     
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Load Capacity</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Upto 200,000 lbs</td>
       
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Pallet weight</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Approx : 700 lbs</td>
 
    </tr>
    <tr className='border-b border-b-dark/25'>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Packed in</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>Gaylord boxes</td>
       
    </tr>
    <tr className=''>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 font-semibold'>Gaylord / Pallet size</td>
        <td className=' px-4 xs:pl-2 py-2 xs:py-1 border-l border-l-dark/25 '>100cm x 120cm</td>
        
    </tr>
</tbody>
</table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SizeTabs