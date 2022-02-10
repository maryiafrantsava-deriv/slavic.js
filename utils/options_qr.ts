type TTextQR = {
    id: number;
    name: string;
}

export const options_qr: Array<TTextQR> = [
    { id: 0, name: "version: '3.0'"},
    { id: 1, name: "lastName: string,"},
    { id: 2, name: "firstName: string,"},
    { id: 3, name: "nickname: string,"},
    { id: 4, name: "organization: string, (as company)"},
    { id: 5, name: "workPhone: string, (as phone)"},
    { id: 6, name: "homePhone: string, (as mobile)"},
    { id: 7, name: "workFax: string, (as fax)"},
    { id: 8, name: "birthday: string,"},
    { id: 9, name: "title: string, (as your job)"},
    { id: 10, name: "workEmail: Array<string>, (as email)"},
    { id: 11, name: "workUrl: string, (as website)"},
    { id: 12, name: "workAddress: {}, (as obj with city, zip, state, country, street)"},
    { id: 13, name: "socialUrls: {}, (as obj with linkedIn & github)"},
];

export const about_vcard_qr: Array<TTextQR> = [
    { id: 0, name: "1) Take a cell phone with a camera."},
    { id: 1, name: "2) Run the program to scan the code."},
    { id: 2, name: "3) Point your camera lens at the code."},
    { id: 3, name: "4) Get a vCard contact information!"},
];