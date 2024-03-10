import CardsList from "./../components/CardsList/CardsList";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function Popular() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
    return (
        <><CardsList id="popular" title="Популярные" data={popularGames}/></>
    )
}