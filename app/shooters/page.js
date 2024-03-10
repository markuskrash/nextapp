import CardsList from "./../components/CardsList/CardsList";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function Shooters() {
    const shooterGames = await getNormalizedGamesDataByCategory(endpoints.games, "shooter");
    return (
        <><CardsList id="shooter" title="Шутеры" data={shooterGames}/></>
    )
}