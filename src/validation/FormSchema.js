import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required([3],'A name for your order is required'),
    pizzaSize: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'extra large'], 'size is required'),
})