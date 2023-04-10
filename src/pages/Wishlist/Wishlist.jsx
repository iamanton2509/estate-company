import {useGetWishlistQuery} from './../../store/wishlistApi';
import WishListItem from "./../../components/WishListItem/WishListItem";
import Loader from './../../components/UI/loader/Loader';

import "./main.css";

const Wishlist = () => {
    const {data = [], isLoading} = useGetWishlistQuery();

    if (isLoading){
        <Loader />
    } else {
        console.log(data);
    }

    const headerStyle = {
        fontSize: 45,
        fontWeight: 600,
        textAlign: 'center',
        color: 'var(--different-blue)'
    }

    return (
        <section className="section">
            <div className="section__container">
                <section className="section__content">
                    {data.length !== 0 
                        ? <h1 className="section__title">Wishlist</h1>
                        : <h1 style={headerStyle}>Your wishlist is empty</h1>
                    }
                    <div className="wishlist">
                        {data.map((item) =>     
                            <WishListItem 
                                key={item.id}
                                img={item.img} 
                                title={item.title} 
                                description={item.description} 
                                year={item.year}
                                id={item.id}
                            />    
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Wishlist;