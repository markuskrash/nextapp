import "./globals.css"
import Banner from "./components/Banner/Banner";
import Promo from "./components/Promo/Promo";
import CardsList from "@/app/components/CardsListSection/CardsList";
import {endpoints} from "@/app/api/config";
import {getNormalizedGamesDataByCategory} from "@/app/api/api-utils";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";


export default async function Home() {
    const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, "popular");
    const newGames = await getNormalizedGamesDataByCategory(endpoints.games, "new");

    return (
        <main className="main">
            <Banner/>
            <CardsListSection type="slider" id="popular" title="Популярные" data={popularGames}/>
            <CardsListSection type="slider" id="new" title="Новинки" data={newGames}/>
            <Promo/>
        </main>
    );
}
