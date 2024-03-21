'use client';
import { useGetDataByCategory } from "./../api/api-hooks";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        newGames ? (
                <CardsListSection  id="new" title="Новые" data={newGames} />
            ) : (
                <Preloader />
            )
    )
}