import { PARTNERS_FILTER } from "../../../const";
import Partners from "../../Views/Partners";

const PartnersContainer = () => {
  return <Partners menuItems={PARTNERS_FILTER} />;
};

export default PartnersContainer;
