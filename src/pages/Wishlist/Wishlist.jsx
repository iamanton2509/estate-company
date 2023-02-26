import WishListItem from "./../../components/WishListItem/WishListItem";
import "./main.css";

const Wishlist = ({wishlist, deleteFromWishlist}) => {
    return (
        <section className="section">
            <div className="section__container">
                <section className="section__content">
                    <h1 className="section__title">Wishlist</h1>
                    <div className="wishlist">
                        {wishlist.map((item) => 
                            <WishListItem 
                                key={item.id}
                                img={item.img} 
                                title={item.title} 
                                description={item.details} 
                                year={item.year}
                                id={item.id}

                                deleteFromWishlist={deleteFromWishlist}
                            />
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Wishlist;