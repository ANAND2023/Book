import HTMLFlipBook from 'react-pageflip';
import cover from '../assets/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg'
import Page from './Page';
import Cover from './Cover';
import First_page from './First_page';
import Second_page from './Second_page';
import Third_page from './Third_page';
import Fourth_page from './Fourth_page';
import Fifth_page from './Fifth_page';
import Sixth_page from './Sixth_page';
import Last_page from './Last_page';
const Book=(props)=> {
    const bg_style={
        backgroundImage:`url(${cover})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        BackgroundPosition:"center",
        minHeight:"100vh",
        width:"100%"
      }
    return (
        <HTMLFlipBook width={400} height={580} className='text-center  pt-2 w-[80%] mx-auto'
        showCover="true"
        >
            <Page number={1}>
           <Cover coverImg={cover} title="My Portfolio"/>
            </Page>
            <Page number={2}>
           <First_page/>
            </Page>
            <Page number={3}>
            <Second_page/>
            </Page>
            <Page number={4}>
            <Third_page/>
            </Page>
            <Page number={5}>
            <Fourth_page/>
            </Page>
            <Page number={6}>
            <Fifth_page/>
            </Page>
            <Page number={7}>
            <Sixth_page/>
            </Page>
            <Page number={8}>
            <Last_page/>
            </Page>
         
            {/* <div className="demoPage">Page 2</div>
            <div className="demoPage">Page 3</div>
            <div className="demoPage">Page 4</div>
            <div className="demoPage">Page 5</div>
            <div className="demoPage">Page 6</div>
            <div className="demoPage">Page 7</div>
            <div className="demoPage">Page 8</div> */}
        </HTMLFlipBook>
    );
}
export default Book