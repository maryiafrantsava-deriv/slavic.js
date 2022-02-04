type TValuesFormQR = {
    num: number;
    id: string;
    common_label?: string;
    label: string;
    maxLength: number;
    isDouble: boolean;    
    isAdditional?: boolean;
    show?: boolean;

}

export const values_form_qr: Array<TValuesFormQR> = [
    { num: 0, id: "firstName", common_label: "Your name:", label: "First name (Required)", maxLength: 48, isDouble: true},
    { num: 1, id: "lastName", label: "Last name (Required)", maxLength: 48, isDouble: true},
    { num: 2, id: "homePhone", common_label: "Contact:", label: "Mobile", maxLength: 255, isDouble: true},
    { num: 3, id: "workEmail", label: "your@email.com", maxLength: 255, isDouble: false},
    { num: 4, id: "workPhone", label: "Phone", maxLength: 48, isDouble: true},
    { num: 5, id: "workFax", label: "Fax", maxLength: 48, isDouble: true},
    { num: 6, id: "organization", common_label: "Company:", label: "Company", maxLength: 48, isDouble: true},
    { num: 7, id: "role", label: "Your job", maxLength: 48, isDouble: true},
    { num: 9, id: "city", common_label: "City:", label: "City", maxLength: 48, isDouble: true},
    { num: 10, id: "zip", label: "ZIP", maxLength: 48, isDouble: true},
    { num: 11, id: "state", common_label: "Location:", label: "State", maxLength: 255, isDouble: true},
    { num: 12, id: "country", label: "Country", maxLength: 255, isDouble: false},
    { num: 13, id: "street", common_label: "Street:", label: "Street", maxLength: 255, isDouble: false},
    { num: 14, id: "website", common_label: "Website:", label: "www.your-website.com", maxLength: 255, isDouble: false},
    // additional fields
    { num: 15, id: "nickname", common_label: "Nickname:", label: "Nickname", maxLength: 255, isDouble: false, isAdditional: true},
    { num: 16, id: "birthday", common_label: "Birthday", label: "Birthday", maxLength: 255, isDouble: false, isAdditional: true},
    { num: 17, id: "anniversary", common_label: "Start Date", label: "Start Date", maxLength: 255, isDouble: false, isAdditional: true},
    { num: 18, id: "linkedIn", common_label: "LinkedIn:", label: "LinkedIn", maxLength: 255, isDouble: false, isAdditional: true},
    { num: 19, id: "github", common_label: "Github", label: "Github", maxLength: 255, isDouble: false, isAdditional: true},
];

export const req_fields_number = values_form_qr.filter(({isAdditional}) => isAdditional !== true).length;

export const init_aditional_checked = new Array(values_form_qr.slice(req_fields_number).length).fill(false);