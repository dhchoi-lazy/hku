import Gyeyu from "./Gyeyu";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import PsiConcept from "./PsiConcept";
import ct from "./ct.png";
export default function Method() {
  return (
    <section id="method">
      <GridContainer>
        <GridNormal>
          <h1 className="text-4xl">4. Data and its visualization</h1>
        </GridNormal>
        <GridHighlight>
          <Gyeyu />
        </GridHighlight>
      </GridContainer>
    </section>
  );
}
