import CardsList from "./../components/CardsList/CardsList";
import {getGamesByCategory} from "./../data/data-utils";

export default function New(){
    const newGames = getGamesByCategory("new");
    return(
        <><CardsList id="new" title="Новинки" data={newGames}/></>
    )
}