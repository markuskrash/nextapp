'use client';
import { useGetDataByCategory } from "./../api/api-hooks";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function Popular() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    return (
        popularGames? (
            <CardsListSection id="popular" title="Популярные" data={popularGames}/>
        ): (
            <Preloader />
        )
    )
}