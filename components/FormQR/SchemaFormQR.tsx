import * as Yup from "yup";

export type TInitialValuesRegister = Record<string, string | {}>;

export const initialValuesRegister: TInitialValuesRegister = {
    version: '3.0',
    lastName: "",
    firstName: "",
    nickname: "",
    organization: "",
    workPhone: "",
    homePhone: "",
    workFax: "",
    birthday: "",
    title: "",
    workEmail: "",
    workUrl: "",
    workAddress: {},
    socialUrls: {}
};

export const SchemaQR = Yup.object().shape(
    {
        lastName: Yup.string()
        .matches(
            /^[а-яА-ЯёЁa-zA-Z]{2,10}$/,
            "Please, enter correct last name!")
        .min(2, "Should be minimum 2 character long")
        .max(10, "should not exceed 10 characters"),

        firstName: Yup.string()
            .matches(
                /^[а-яА-ЯёЁa-zA-Z]{2,10}$/,
                "Please, enter correct first name!")
            .min(2, "Should be minimum 2 character long")
            .max(10, "should not exceed 10 characters"),

        nickname: Yup.string()
            .matches(
                /^[а-яА-ЯёЁa-zA-Z0-9]{2,10}$/,
                "Please, enter the correct nickname!")
            .min(2, "Should be minimum 2 character long")
            .max(10, "should not exceed 10 characters"),

        organization: Yup.string()
            .matches(
                /^[а-яА-ЯёЁa-zA-Z0-9]{2,15}$/,
                "Enter the correct name of company!")
            .min(2, "Should be minimum 2 character long")
            .max(15, "should not exceed 15 characters"),

        workPhone: Yup.string()
            .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 
            'Please, enter the correct № phone!'),

        homePhone: Yup.string()
            .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 
            'Please, enter the correct № mobile!'),

        workFax: Yup.number()
            .min(6, "Please, enter the correct fax!"),

        title: Yup.string()
            .matches(
                /^[а-яА-ЯёЁa-zA-Z0-9]{2,15}$/,
                "Please, enter the correct your job!"),

        workEmail: Yup.mixed()
            .when('isArray', {
                is: Array.isArray,
                then: Yup.array().of(Yup.string()),
                otherwise: Yup.string()
                    .matches(
                        /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
                        "Enter correct email(your@mail.ru)!"),
            }),

        workUrl: Yup.string()
            .matches(
                /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
                "Enter correct website(www.site.com)!"),

        socialUrls: Yup.object().shape({

            linkedIn: Yup
                .string()
                .min(2, "Please, enter the correct linkedIn name!")
                .max(60, "Please, enter the correct linkedIn name!"),

            github: Yup
                .string()
                .min(2, "Please, enter the correct github name!")
                .max(60, "Please, enter the correct github name!"),
        }),

        workAddress: Yup.object().shape({

            city: Yup
                .string()
                .matches(
                    /^[а-яА-ЯёЁa-zA-Z]{2,10}$/,
                    "Please, enter the correct city name!")
                .min(2, "Should be minimum 2 character long")
                .max(10, "should not exceed 10 characters"),

            postalCode: Yup
                .string(),

            stateProvince: Yup
                .string()
                .matches(
                    /^[а-яА-ЯёЁa-zA-Z]{2,15}$/,
                    "Please, enter the correct state name!")
                .min(2, "Should be minimum 2 character long")
                .max(15, "should not exceed 15 characters"),

            countryRegion: Yup
                .string()
                .matches(
                    /^[а-яА-ЯёЁa-zA-Z]{2,15}$/,
                    "Enter the correct country name!")
                .min(2, "Should be minimum 2 character long")
                .max(15, "should not exceed 15 characters"),

            street: Yup
                .string()
                .matches(
                    /^[а-яА-ЯёЁa-zA-Z0-9\s]{2,15}$/,
                    "Please, enter the correct street name!")
                .min(2, "Should be minimum 2 character long")
                .max(20, "should not exceed 20 characters"),
        })
    }
);