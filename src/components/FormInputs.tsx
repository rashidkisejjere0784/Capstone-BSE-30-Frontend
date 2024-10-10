// // @ts-ignore
// // input element
// import {Input} from "@/components/ui/input.tsx";
//
// const FormInputs = ({formConfig, formData, setFormData})=>{
//     const formElement = (getFormElement)=>{
//         let element = <></>;
//         const value = formData[getFormElement.name]
//         switch (getFormElement.elementType){
//             case 'input':
//                 element = <>
//                     <div className={"rounded-md border border-input px-3 py-1 "}>
//                         <Input
//                             name={getFormElement.name}
//                             type={getFormElement.type}
//                             className={"w-full ring-0 border-0 outline-none focus:outline-none focus-visible:ring-0 shadow-none"}/>
//                             value={value}
//                             onChange={(e: { target: { value: string; }; })=>{
//                                 setFormData({
//                                     ...formData,
//                                     [getFormElement.name]: e.target.value
//                                 })
//                             }}
//
//                     </div>
//                 </>
//         }
//         return element
//     }
//     return (
//         <>
//             {
//                 formConfig.map((getFormElement)=>(
//                     formElement(getFormElement)
//                 ))
//             }
//         </>
//     )
// }
//
// export default FormInputs;