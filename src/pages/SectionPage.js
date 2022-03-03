import SectionCard from "../SectionCard";
import sections from "../SectionData";
import Text from "../Text";
import { scrollIntoWindow } from "../helperFunctions";

const SectionPage = (props) => {

    let sectionId = props.match.params.sectionId;
  
    let textToBeRendered = "";

    let externalDataSection = sections.filter(section => {
        return section.id === sectionId;
    })

    if (externalDataSection[0]) {
        textToBeRendered = externalDataSection[0].description.map(paragraph => {
            return <Text description={paragraph} />
        })
    }

    //scroll to top of page at loading
    scrollIntoWindow(0,0);

    return (
        <SectionCard section={externalDataSection[0]}>
            {textToBeRendered}
        </SectionCard>
    );
}

export default SectionPage;