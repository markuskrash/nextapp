import "./globals.css"
import Banner from "./components/Banner/Banner";
import Promo from "./components/Promo/Promo";
import CardsList from "./components/CardsList/CardsList";
import {endpoints} from "@/app/api/config";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";


export default async function Home() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");

    return (
        <main className="main">
            <Banner/>
            <CardsList id="popular" title="Популярные" data={popularGames}/>
            <CardsList id="new" title="Новинки" data={newGames}/>
            <Promo/>
        </main>
    );
}
