import CardsList from "./../components/CardsList/CardsList";
import {getGamesByCategory} from "./../data/data-utils";

export default function Runners(){
    const runnerGames = getGamesByCategory("runner");
    return(
        <><CardsList id="runner" title="Ранеры" data={runnerGames}/></>
    )
}