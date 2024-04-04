import React from 'react'

const Cover = ({coverImg,title}) => {
    const bg_style={
        backgroundImage:`url(${`https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hide-%26-seek-design-template-7a1c2854e59a825c75b52c6e66047668_screen.jpg?ts=1637009991`})`,
        backgroundRepeat:"no-repeat",
        // backgroundSize:"cover",
        // BackgroundPosition:"center",
        
        // width:"100%"
      }
  return (
    <div  style={bg_style} className='h-full'>
    
        <div className='h-full flex justify-center items-center'>
            {/* <img src={`https://www.thehideandseek.co/wp-content/uploads/2021/10/HideSeek-2.png`} className='w-[200px]' alt="" /> */}
        {/* <h1 className='text-primary text-5xl font-bold font-outline-2'>{title}</h1> */}
    </div>
    </div>
  )
}

export default Cover