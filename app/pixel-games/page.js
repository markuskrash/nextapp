import CardsList from "./../components/CardsList/CardsList";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {endpoints} from "@/app/api/config";

export default async function Pixel() {
    const pixelGames = await getNormalizedGamesDataByCategory(endpoints.games, "pixel");
    return (
        <><CardsList id="pixel" title="Пиксельные" data={pixelGames}/></>
    )
}