import './Home.css';
import Product from './Prodect';
import { useState , useEffect } from 'react';
export default function Home(){
    const list = ["/src/assets/images/home.jpg" ,"/src/assets/images/home2.jpg",
        "/src/assets/images/image3.jpg","/src/assets/images/image4.jpg"]
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