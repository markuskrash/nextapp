'use client';
import {useGetDataByCategory} from "./../api/api-hooks";
import {endpoints} from "@/app/api/config";
import {Preloader} from "@/app/components/Preloader/Preloader";
import {CardsListSection} from "@/app/components/CardsListSection/CardsListSection";

export default function Pixel() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
        pixelGames ? (
            <CardsListSection id="pixel" title="Пиксельные" data={pixelGames}/>
        ) : (
            <Preloader/>
        )
    )
}