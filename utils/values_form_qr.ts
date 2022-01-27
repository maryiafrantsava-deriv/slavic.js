type TValuesFormQR = {
    num: number;
    id: string;
    common_label?: string;
    label: string;
    maxLength: number;
    double: boolean;
}

export const values_form_qr: Array<TValuesFormQR> = [
    { num: 0, id: "firstName", common_label: "Your name:", label: "First name (Required)", maxLength: 48, double: true},
    { num: 1, id: "lastName", label: "Last name (Required)", maxLength: 48, double: true},
    { num: 2, id: "homePhone", common_label: "Contact:", label: "Mobile", maxLength: 255, double: false},
    { num: 3, id: "workPhone", label: "Phone", maxLength: 48, double: true},
    { num: 4, id: "workFax", label: "Fax", maxLength: 48, double: true},
    { num: 5, id: "workEmail", common_label: "Email:", label: "your@email.com", maxLength: 255, double: false},
    { num: 6, id: "organization", common_label: "Company:", label: "Company", maxLength: 48, double: true},
    { num: 7, id: "role", label: "Your job", maxLength: 48, double: true},
    { num: 8, id: "street", common_label: "Street:", label: "Street", maxLength: 255, double: false},
    { num: 9, id: "city", common_label: "City:", label: "City", maxLength: 48, double: true},
    { num: 10, id: "zip", label: "ZIP", maxLength: 48, double: true},
    { num: 11, id: "state", common_label: "State:", label: "State", maxLength: 255, double: false},
    { num: 12, id: "country", common_label:"Country:", label: "Country", maxLength: 255, double: false},
    { num: 13, id: "website", common_label: "Website:", label: "www.your-website.com", maxLength: 255, double: false},
];