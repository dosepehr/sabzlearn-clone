import * as Yup from 'yup'


export const loginSchema = Yup.object().shape({
    username: Yup.string().required('نام کاربری الزامی است').min(6,'نام کاربری باید حداقل 6 کاراکتر باشد'),
    password:Yup.string().required('رمز عبور الزامی است').min(8,'رمز عبور باید حداقل 8 کاراکتر باشد')
})

export const registerSchema = Yup.object().shape({
    username: Yup.string().required('نام کاربری الزامی است').min(6,'نام کاربری باید حداقل 6 کاراکتر باشد'),
    name: Yup.string().required('نام و نام خانوادگی الزامی است').min(4,'نام باید حداقل 4 کاراکتر باشد'),
    password: Yup.string().required('رمز عبور الزامی است').min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد'),
    email:Yup.string().email('ایمیل اشتباه میباشد').required('ایمیل الزامی میباشد')
})