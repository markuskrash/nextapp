import Link from "next/link";
import Card  from "../Card/Card";
import Styles from "./CardsListSection.module.css";

export const CardsList = (props) => {
    return (
        <ul className={Styles["cards-list"]}>
            {props.data.map((item) => {
                return (
                    <li className={Styles["item"]} key={item.id}>
                        <Link href={`/games/${item.id}`} className={Styles["link"]}>
                            <Card
                                id={item.id} image={item.image} title={item.title} description={item.description} developer={item.developer} users={item.users}
                            />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};