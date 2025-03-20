import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, "En az 4 karakter olmalıdır")
        .max(20, "Too Long!")
        .matches(/^[a-zA-Z0-9_-]+$/, "Geçersiz karakter")
        .required("Zorunlu alan"),
    password: Yup.string()
        .required("Şifre alanı boş bırakılamaz")
        .min(8, "Karakter sayısı en az 8 olmalıdır")
        .max(12, "Şifre en fazla 12 karakter olabilir")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Şifreniz en az bir harf, bir rakam ve bir özel karakter içermelidir"
        ),
    term: Yup.boolean()
        .oneOf([true], "Şartları kabul etmelisiniz")
        .required("Şartları kabul etmelisiniz"),
});

export default LoginFormSchema;
