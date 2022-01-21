import React, {useReducer, createContext, useState} from 'react'
import Header from '../../components/Header'
import { flowers, decor, outfit, dinner} from '../../helpers/HomeData'
import './styles.scss';
import { Icon } from '@iconify/react';
// import Login from './Login';
import Slide from 'react-reveal/Slide';
import {Link} from 'react-scroll';
import SignUp from './SignUp';
import Login from './Login';
// import { createClient } from 'pexels';


const initialState = {
    Color: "darkYello",
    text: "Weeknight dinner",
    theme: dinner,
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'darkGreen':
          return {
            Color: "darkGreen",
            text: "Home decor idea",
            theme: decor,
            
           }
           case 'blue':
          return {
              Color: "blue",
              text: "Outfit look idea",
              theme: outfit,
            }
            case 'darkYello':
                return {
                    Color: "darkYello",
                    text: "Weeknight dinner",
                    theme: dinner,
                }
                case 'green':
                    return {
                        Color: "green",
                        text: "Green thumb idea",
                        theme: flowers,
                    }
                    default:
                        return state
                    }
                }
                
                

                function Hero({pictures}){
                    const UserContext = createContext()
                    // var [heroTheme, setHeroThem] = useState('darkYello');
                    const [{text, theme, Color}, dispatch] = useReducer(reducer, initialState)
                    console.log(theme[0].col1)
                    
                    
                    return(
                        <>
                        <UserContext.Provider value={Color}>
                            <div className='grid grid-cols-6 2xl:grid-cols-7 gap-4 -z-10 w-screen bg-white relative'>
                        <Slide bottom>

                    <div className='col1 mt-24'>
                {
                    
                    theme[0].col1.map((src, idex) => {
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
                    
                    theme[0].col2.map((src, idex) => {
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
                    
                    theme[0].col3.map((src, idex) => {
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
                    
                    theme[0].col4.map((src, idex) => {
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
                    
                    theme[0].col5.map((src, idex) => {
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
                    
                    theme[0].col6.map((src, idex) => {
                        return(
                            
                            <img id={idex} src={src.src} alt={src.alt} className='w-[236px] h-[350px] rounded-xl my-2' /> 
                            )
                        })
                    }
            </div>
            </Slide>  

        </div>
        <div id='hero' className='hero mt-16 h-[90%] w-screen absolute top-0' >
            <div className='hero-text bg-transparent flex flex-col items-center  w-screen mt-12'>
           
            <h1 className='text-6xl '>Get Your Next</h1>
           
           
            <h1 style={{ color: `$`}} className={`text-6xl`}><Slide bottom>{text ?? "Weeknight dinner"}</Slide></h1> 


                <div className='hero-nave flex w-[100px] justify-between mt-8'>

                <button onClick={() => dispatch({type: "darkYello"})} className={`h-3 w-3 bg-gray rounded-full ${Color === "darkYello" ? 'bg-darkYello' : 'gray' }`}></button>

                <button onClick={() => dispatch({type: "blue"})} className={`h-3 w-3 bg-gray rounded-full ${Color === "blue" ? 'bg-blue' : 'gray' }`}></button>

                <button onClick={() => dispatch({type: "darkGreen"})} className={`h-3 w-3 bg-gray rounded-full ${Color === "darkGreen" ? 'bg-darkGreen' : 'gray' }`}></button>

                <button onClick={() => dispatch({type: "green"})} className={`h-3 w-3 bg-gray rounded-full ${Color === "green" ? 'bg-green' : 'gray' }`}></button>
                </div>
                <Link to='signup' smooth={true}>
                <button className={`see-more flex items-center justify-center rounded-full h-[54px] w-[54px] bg-${Color} absolute bottom-20`} ><Icon icon="ep:arrow-down-bold" color="white" width="36"/></button>
                </Link>
            </div>
        </div>
        </UserContext.Provider>
        </>

    )
}

export const isLoginContext = createContext(null);
function Home() {
    const [isloginPage, setLoginPage] = useState(false)

    return (
        <div className='home'>
                <isLoginContext.Provider value={[isloginPage, setLoginPage]}>
            <Header />
            <div>
                <div className={isloginPage ? 'visible' : 'invisible'}>
                <Login position="top-0"/>
                </div>
                    <Hero />
                <SignUp position="top-[100%]" />
            </div>
                </isLoginContext.Provider>
        </div>
    )
}

export default Home
