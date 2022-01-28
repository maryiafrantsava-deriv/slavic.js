import * as Yup from "yup";

export type TInitialValuesRegister = Record<string, string>;

export const initialValuesRegister = {
    firstName: "",
    lastName: "",
    homePhone: "",
    workPhone: "",
    workFax: "",
    workEmail: "",
    organization: "",
    role: "",
    street: "",
    city: "",
    zip: "",
    state: "",
    country: "",
    website: "",
}

const testCard= {
    version: '3.0',
    firstName: 'Maryia', //++
    lastName: 'Frantsava', //++
    // middleName: 'MF',
    // nameSuffix: 'JR',
    // namePrefix: 'MR',
    // nickname: 'Test User',
    gender: 'F',
    organization: 'Deriv',//+
    workPhone: '+375292758656', //++
    homePhone: '',//+
    // cellPhone: '312-555-1414111',
    // pagerPhone: '312-555-1515222',
    // homeFax: '312-555-1616',
    workFax: '777-777-7777',//++
    // birthday: "20140112",
    // anniversary: "20140112",
    // title: 'Crash Test Dummy',
    role: 'frontend developer',//+
    email: 'mariya.frantsava7@gmail.com', //++
    workEmail: 'maryia.frantsava@deriv.com', //++
    state: '',
    city: 'Minsk',
    country: 'Belarus',
    ZIP: '220123',
    website: 'https://deriv.com',
    url: 'https://deriv.com',
    workAddress: {
        label: 'Work Address',
        street: 'Veri Horuzhei 25',
        city: 'Minsk',
        stateProvince: '',
        postalCode: '220123',
        countryRegion: 'Minsk',
    },
    // workUrl: 'http://acemecompany/johndoe',
    // homeAddress: {
    //     label: 'Home Address',
    //     street: '123 Main Street',
    //     city: 'Chicago',
    //     stateProvince: 'IL',
    //     postalCode: '12345',
    //     countryRegion: 'United States of America'
    // },

/*       workAddress: {
        label: 'Work Address',
        street: '123 Corporate Loop\nSuite 500',
        city: 'Los Angeles',
        stateProvince: 'CA',
        postalCode: '54321',
        countryRegion: 'California Republic'
    },*/
/*
    source: 'http://sourceurl',
    note: 'dddddd',*/
    socialUrls: {
        // facebook: 'johndoe',
        linkedIn: 'Maryia Frantsava',
        // twitter: 'johndoe',
        // flickr: 'johndoe',
        // skype:"test_skype",
        // custom: 'johndoe'
    }
};