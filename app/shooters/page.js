import CardsList from "./../components/CardsList/CardsList";
import {getGamesByCategory} from "./../data/data-utils";

export default function Shooters(){
    const shooterGames = getGamesByCategory("shooter");
    return(
        <><CardsList id="shooter" title="Шутеры" data={shooterGames}/></>
    )
}