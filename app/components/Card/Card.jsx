import Styles from './Card.module.css'


const Card = ({id, image, title, description, developer, users}) =>{
    return(
        <article className={Styles["card"]}>
            <img src={image} alt=""
                 className={Styles["image"]}/>
            <div className={Styles["content-block"]}>
                <h3 className={Styles["title"]}>{title}</h3>
                <p className={Styles["description"]}>
                    {description}
                </p>
                <div className={Styles["info-container"]}>
                    <p className={Styles["author"]}>
                        Автор: <span className={Styles["accent"]}>{developer}</span>
                    </p>
                    <p className={Styles["votes"]}>
                        Голосов на сайте: <span className={Styles["accent"]}>{users.length}</span>
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Card;