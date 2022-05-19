
export default List = () => {
    // define state variable to store favorite items
    const [favoriteList, setFavoriteList] = React.useState([]);
    // function to add an item to favorite list
    const onFavorite = restaurant => {
        setFavoriteList([...favoriteList, restaurant]);
    };
    // function to remove an item from favorite list
    const onRemoveFavorite = restaurant => {
        const filteredList = favoriteList.filter(
            item => item.id !== restaurant.id
        );
        setFavoriteList(filteredList);
    };

    // function to check if an item exists in the favorite list or not
    const ifExists = restaurant => {
        if (favoriteList.filter(item => item.id === restaurant.id).length > 0) {
            return true;
        }
        return false;
    };

}