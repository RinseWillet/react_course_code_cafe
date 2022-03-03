import { Link, Redirect } from "react-router-dom";
import Header from "./Header";
import MediaSection from "./MediaSection";
import "./SectionCard.css";

const SectionCard = ({ section, children }) => {

    if (!section) {
        return <Redirect to="/" />
    }

    return (
        <main className="sectionCard">
            <Link className="sectionCard__link" to="/">Home</Link>
            <Header text={section.headerText} />
            {children}
            <MediaSection
                headerText="Foto's en videos"
                extraClass={"mediaSection__list--longGrid mediaSection__list--bigGrid"}
                pictures={section.pictures || undefined}
                videos={section.videos || undefined}
                type={section.type || "pictures"}
                key={section.id}
                favorite={section.favorite || false}
                customSizes={"(max-width: 75rem) 100vw, 50vw" || undefined}
            />
        </main>
    );
}

export default SectionCard;