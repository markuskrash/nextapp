'use client';
import { useGetDataByCategory } from "./../api/api-hooks";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function Runners() {
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return (
        runnerGames? (
            <CardsListSection id="runner" title="Ранеры" data={runnerGames}/>
        ): (
            <Preloader />
        )
    )
}