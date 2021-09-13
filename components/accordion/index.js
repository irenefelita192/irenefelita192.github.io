// import styles from './styles'

// export default function Collapsible({ title, children }) {
//     return (
//         // <div className="collapsible">
//         //     <div className="collapsible-header">
//         //         <span>{title}</span>
//         //         <i />
//         //     </div>
//         //     <div className="collapsible-body">{children}</div>
//         //     <style jsx>{styles}</style>
//         // </div>
//         <>
//             <div className="tab">
//                 <input type="checkbox" className="dummy-checkbox" />
//                 <label className="tab-label" for="chck1">
//                     Item 1
//                 </label>
//                 <div className="tab-content">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                     Ipsum, reiciendis!
//                 </div>
//             </div>
//             <div className="tab">
//                 <input type="checkbox" className="dummy-checkbox" />
//                 <label className="tab-label" for="chck2">
//                     Item 2
//                 </label>
//                 <div className="tab-content">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
//                     in!
//                 </div>
//             </div>
//             <style jsx>{styles}</style>
//         </>
//     )
// }
import Accordion from './accordion'
import AccordionContainer from './accordion-container'
import AccordionBody from './accordion-body'
import AccordionHeader from './accordion-header'

Accordion.Container = AccordionContainer
Accordion.Body = AccordionBody
Accordion.Header = AccordionHeader

export default Accordion
