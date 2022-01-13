import React, {useState} from 'react'
import Header from '../../components/Header'
import { flowers } from '../../helpers/HomeData'
import './styles.scss';
import { Icon } from '@iconify/react';
// import Login from './Login';
import Slide from 'react-reveal/Slide';
import {Link, animateScroll as scroll} from 'react-scroll';
import SignUp from './SignUp';



function ColumnHeroPictures({idx, src, alt}){

    return(
        <div className='grid grid-cols-6 gap-4 -z-10 w-[1500px] bg-white relative'>
            <Slide bottom>

            <div className='col1 mt-24'>
                {
                    
                    flowers[0].col1.map((src, idex) => {
                        return(
                            
                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                            )
                        })
                    }
            </div>
            </Slide>
            <Slide bottom> 
            <div className='col2 mt-72'>
                {
                    
                    flowers[0].col2.map((src, idex) => {
                        return(
                            
                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                            )
                        })
                    }
            </div>
            </Slide>
            <Slide bottom>

            <div className='col3 mt-96'>
                {
                    
                    flowers[0].col3.map((src, idex) => {
                        return(
                            
                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                            )
                        })
                    }
            </div>
            </Slide>
            <Slide bottom>

            <div className='col4 mt-96'>
                {
                    
                    flowers[0].col4.map((src, idex) => {
                        return(
                            
                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                            )
                        })
                    }
            </div>
            </Slide>
            <Slide bottom>

            <div className='col5 mt-72'>
                {
                    
                    flowers[0].col5.map((src, idex) => {
                        return(
                            
                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                            )
                        })
                    }
            </div>
                    </Slide>
             <Slide bottom>
            <div className='col6 mt-24'>
                {
                    
                    flowers[0].col6.map((src, idex) => {
                        return(
                            
                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                            )
                        })
                    }
            </div>
            </Slide>       
        </div>
    )
}


function Hero(){

    var [heroTheme, setHeroThem] = useState('darkYello');
 

    return(
        <div id='hero' className='hero mt-6 h-screen absolute top-0 ' >
            <div className='hero-text w-full  bg-transparent flex flex-col items-center  w-screen mt-36'>
            <h1 className='text-6xl'>Get Your Next</h1>
              
                {
                   heroTheme === 'green' 
                            ? <h1 className='green text-6xl text-green'><Slide bottom> Green thumb idea</Slide></h1> 
                            : heroTheme === 'blue'
                            ?  <h1 className='blue text-6xl text-bleu-100'><Slide bottom>New look outfit</Slide></h1> 
                            : heroTheme === 'darkYello'
                            ?  <h1 className='dinner text-6xl text-darkYello'><Slide bottom>Weeknight dinner</Slide></h1> 
                            : heroTheme === "darkGreen"
                            ?  <h1 className='home text-6xl text-darkGreen'><Slide bottom>Home decor idea</Slide></h1> 
                            :  <h1 className='green text-6xl text-green'><Slide bottom>Green thumb idea</Slide></h1> 
                }


                <div className='hero-nave flex w-[100px] justify-between mt-8'>

                <button onClick={() => setHeroThem("darkYello")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "darkYello" ? "bg-darkYello" : "gray"}`}></button>

                <button onClick={() => setHeroThem("blue")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "blue" ? "bg-bleu-100" : "gray"}`}></button>

                <button onClick={() => setHeroThem("darkGreen")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "darkGreen" ? "bg-darkGreen" : "gray"}`}></button>

                <button onClick={() => setHeroThem("green")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "green" ? "bg-green" : "gray"}`}></button>
                </div>
                <Link to='signup' smooth={true}>
                <button className={`see-more flex items-center justify-center rounded-full h-[54px] w-[54px] ${
                    heroTheme === 'darkYello'
                    ? 'bg-darkYello'
                    : heroTheme === "green"
                    ? 'bg-green'
                    : heroTheme === "darkGreen"
                    ? 'bg-darkGreen'
                    : heroTheme === "blue"
                    ? 'bg-bleu-100'
                    : 'bg-darkYello'
                } absolute bottom-20`} ><Icon icon="ep:arrow-down-bold" color="white" width="36"/></button>
                </Link>
            </div>
        </div>
    )
}

function Home() {


    return (
        <div className='home'>
            <Header />
            <div>
                <ColumnHeroPictures />
                <Hero />
                <SignUp position="top-[100%]" />
            </div>
        </div>
    )
}

export default Home
