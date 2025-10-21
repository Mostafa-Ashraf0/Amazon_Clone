import './Home.css';
import Product from './Prodect';
import { useState , useEffect } from 'react';
import image1 from '../assets/images/home.jpg';
import image2 from '../assets/images/home2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';

export default function Home(){
    const list = [image1,image2,image3,image4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % list.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return(
        <div className="home">
            <div className="home-container">
                <img src={list[currentIndex]} alt="home-img" className="home-img"/>
                <div className="home-row">
                    <Product/>
                </div>
            </div>
        </div>
    )
}