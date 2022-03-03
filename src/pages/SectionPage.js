import SectionCard from "../SectionCard";
import { useParams } from "react-router-dom";
import sections from "../SectionData";
import Text from "../Text";

const SectionPage = () => {

    let { sectionId } = useParams();
    let textToBeRendered = "";

    let externalDataSection = sections.filter(section => {
        return section.id === sectionId;
    })

    if (externalDataSection[0]) {
        textToBeRendered = externalDataSection[0].description.map(paragraph => {
            return <Text description={paragraph} />
        })
    }

    return (
        <SectionCard section={externalDataSection[0]}>
            {textToBeRendered}
        </SectionCard>
    );
}

export default SectionPage;