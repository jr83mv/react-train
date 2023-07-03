import { CAccordion,CAccordionItem,CAccordionHeader,CAccordionBody } from '@coreui/react';

function Accoridan(props:any){
    return(
        <CAccordion >
  <CAccordionItem itemKey={1}>
    <CAccordionHeader>{props.data.title}</CAccordionHeader>
    <CAccordionBody>
    {props.data.content}
    </CAccordionBody>
  </CAccordionItem>
  </CAccordion>
    )
}
export default Accoridan;