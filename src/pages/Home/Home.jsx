import React, {useState} from 'react'
import Header from '../../components/Header'
import { flowers } from '../../helpers/HomeData'
import './styles.scss';
import { Icon } from '@iconify/react';
import Login from './Login';



function ColumnHeroPictures({idx, src, alt}){

    return(
        <div className='grid grid-cols-6'>
            <div className='col1 mt-24'>
                {
                    
                    flowers[0].col1.map((src, idex) => {
                        return(

                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                        )
                    })
                }
            </div>
            <div className='col2 mt-72'>
                {
                    
                    flowers[0].col2.map((src, idex) => {
                        return(

                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                        )
                    })
                }
            </div>
            <div className='col3 mt-96'>
                {
                    
                    flowers[0].col3.map((src, idex) => {
                        return(

                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                        )
                    })
                }
            </div>
            <div className='col4 mt-96'>
                {
                    
                    flowers[0].col4.map((src, idex) => {
                        return(

                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                        )
                    })
                }
            </div>
            <div className='col5 mt-72'>
                {
                    
                    flowers[0].col5.map((src, idex) => {
                        return(

                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                        )
                    })
                }
            </div>
            <div className='col6 mt-24'>
                {
                    
                    flowers[0].col6.map((src, idex) => {
                        return(

                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                        )
                    })
                }
            </div>
        </div>
    )
}

function Hero(){

    var [heroTheme, setHeroThem] = useState('darkYello');

    return(
        <div className='mt-6 h-full w-[1500px] relative' >
            <ColumnHeroPictures />
            <div className='hero-text w-full h-[500px] absolute top-0 bg-transparent flex flex-col items-center'>
            <h1 className='text-6xl'>Get Your Next</h1>
              
                {
                   heroTheme === 'green' 
                            ? <h1 className='green text-6xl text-green'>Green thumb idea</h1>
                            : heroTheme === 'blue'
                            ? <h1 className='blue text-6xl text-bleu-100'>New look outfit</h1>
                            : heroTheme === 'darkYello'
                            ? <h1 className='dinner text-6xl text-darkYello'>Weeknight dinner</h1>
                            : heroTheme === "darkGreen"
                            ? <h1 className='home text-6xl text-darkGreen'>Home decor idea</h1>
                            : <h1 className='green text-6xl text-green'> Green thumb idea </h1>
                }


                <div className='hero-nave flex w-[100px] justify-between mt-8'>

                <button onClick={() => setHeroThem("darkYello")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "darkYello" ? "bg-darkYello" : "gray"}`}></button>

                <button onClick={() => setHeroThem("blue")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "blue" ? "bg-bleu-100" : "gray"}`}></button>

                <button onClick={() => setHeroThem("darkGreen")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "darkGreen" ? "bg-darkGreen" : "gray"}`}></button>

                <button onClick={() => setHeroThem("green")} className={`h-3 w-3 bg-gray rounded-full ${heroTheme === "green" ? "bg-green" : "gray"}`}></button>

                </div>
                <button className='see-more flex items-center justify-center rounded-full h-[54px] w-[54px] bg-darkYello absolute bottom-20'><Icon icon="ep:arrow-down-bold" color="white" width="36"/></button>
            </div>
        </div>
    )
}

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Login />
        </div>
    )
}

export default Home
