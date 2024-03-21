'use client';
import { useGetDataByCategory } from "./../api/api-hooks";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function TDS() {
    const TDSGames = useGetDataByCategory(endpoints.games, "TDS");
    return (
        TDSGames?(
            <CardsListSection id="TDS" title="TDS" data={TDSGames}/>
        ): (
            <Preloader />
        )
    )
}