import CardsList from "./../components/CardsList/CardsList";
import {getGamesByCategory} from "./../data/data-utils";

export default function Popular(){
    const popularGames = getGamesByCategory("popular");
    return(
        <><CardsList id="popular" title="Популярные" data={popularGames}/></>
    )
}