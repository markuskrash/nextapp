'use client';
import { useGetDataByCategory } from "./../api/api-hooks";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function Shooters() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
        shooterGames ?(
            <CardsListSection id="shooter" title="Шутеры" data={shooterGames}/>
        ): (
            <Preloader />
        )
    )
}