import React from 'react'

const Third_page = () => {
    const bg_style={
        backgroundImage:`url(${`https://cdn.shopify.com/s/files/1/2081/8163/files/illus-02_41fc1245-ae3a-468d-858a-bf08e2403edd.jpg?v=1606543731`})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        BackgroundPosition:"center",
        
        width:"100%"
      }
  return (
    <div className='h-full'>
    <main className='h-full w-full bg-secondary page-shadow'>
<div style={bg_style} className='h-full'>
 <div>
     {/* <h1>D R A C U L A</h1> */}
 </div>
</div>
    </main>
     </div>
  )
}

export default Third_page