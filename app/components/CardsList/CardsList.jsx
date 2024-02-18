import Styles from "./CardsList.module.css"
import Card from "./../Card/Card";


const CardsList = ({id, title, data}) => {
    return (
        <section className={Styles["list-section"]}>
            <h2 className={Styles["list-section__title"]} id={id}>
                {title}
            </h2>
            <ul className={Styles["cards-list"]}>
                {data.map((item) => {
                    return (
                        <li className={Styles["item"]} key={item.id}>
                            <a href={item.link} target="_blank" className={Styles["link"]}>
                                <Card id={item.id} image={item.image} title={item.title} description={item.description} developer={item.developer} users={item.users}/>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

export default CardsList