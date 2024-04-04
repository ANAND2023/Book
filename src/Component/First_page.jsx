import React from 'react'

const First_page = () => {
    const bg_style={
        backgroundImage:`url(${`https://cdn.shopify.com/s/files/1/2081/8163/files/Hide-and-Seek.jpg?v=1613041069`})`,
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

export default First_page