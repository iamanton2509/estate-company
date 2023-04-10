import { useDeleteFromWishlistMutation } from "../../store/wishlistApi";
import remove from "./../../images/delete.svg";

const WishListItem = ({img, title, description, year, id}) => {
    const [deleteItem] = useDeleteFromWishlistMutation();

    const deleteFromWishlist = async(id) => {
        await deleteItem(id);
    }

    return (
        <li className="wishlist__item">
            <img src={img} alt="project" />
            <div className="wishlist__content">
                <div className="wishlist__details">
                    <h2 className="wishlist__title">{title}</h2>
                    <p className="wishlist__description">{description}</p>
                    <p className="wishlist__date">{year}</p>
                </div>
                <button onClick={() => deleteFromWishlist(id)} className="wishlist__delete">
                    <img src={remove} alt="remove" />
                </button>
            </div> 
        </li>
    );
}

export default WishListItem;