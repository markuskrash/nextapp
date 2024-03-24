"use client"
import "./globals.css"
import Banner from "./components/Banner/Banner";
import Promo from "./components/Promo/Promo";
import {endpoints} from "@/app/api/config";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {useGetDataByCategory} from "@/app/api/api-hooks";


export default function Home() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    const newGames = useGetDataByCategory(endpoints.games, "new");

    return (
        <main className="main">
            <Banner/>
            {popularGames?(
                <CardsListSection type="slider" id="popular" title="Популярные" data={popularGames}/>
                ) : (
                    <Preloader />
                )}
            {newGames?(
                <CardsListSection type="slider" id="new" title="Новинки" data={newGames}/>
            ) : (
                <Preloader />
            )}
            <Promo/>
        </main>
    );
}
