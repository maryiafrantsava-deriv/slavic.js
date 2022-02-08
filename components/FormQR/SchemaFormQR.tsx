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