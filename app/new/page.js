import CardsList from "./../components/CardsList/CardsList";
import {endpoints} from "@/app/api/config";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";

export default async function New() {
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");
    return (
        <><CardsList id="new" title="Новинки" data={newGames}/></>
    )
}