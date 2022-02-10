type TValuesFormQR = {
    num: number;
    id: string;
    name: string;
    common_label?: string;
    label: string;
    maxLength: number;
    isDouble: boolean;    
    isAdditional?: boolean;
    show?: boolean;

}

export const values_form_qr: Array<TValuesFormQR> = [
    { num: 0, id: "firstName", name: "firstName", common_label: "Your name:", label: "First name (Required)", maxLength: 48, isDouble: true},
    { num: 1, id: "lastName", name: "lastName", label: "Last name (Required)", maxLength: 48, isDouble: true},
    { num: 2, id: "homePhone", name: "homePhone", common_label: "Contact:", label: "Mobile", maxLength: 255, isDouble: true},
    { num: 3, id: "workEmail", name: "workEmail", label: "your@email.com", maxLength: 255, isDouble: false},
    { num: 4, id: "workPhone", name: "workPhone", label: "Phone", maxLength: 48, isDouble: true},
    { num: 5, id: "workFax", name: "workFax", label: "Fax", maxLength: 48, isDouble: true},
    { num: 6, id: "organization", name: "organization", common_label: "Company:", label: "Company", maxLength: 48, isDouble: true},
    { num: 7, id: "title", name: "title", label: "Your job", maxLength: 48, isDouble: true},
    { num: 8, id: "city", name: "workAddress.city", common_label: "City:", label: "City", maxLength: 48, isDouble: true},
    { num: 9, id: "postalCode", name: "workAddress.postalCode", label: "ZIP", maxLength: 48, isDouble: true},
    { num: 10, id: "stateProvince", name: "workAddress.stateProvince", common_label: "Location:", label: "State", maxLength: 255, isDouble: true},
    { num: 11, id: "countryRegion", name: "workAddress.countryRegion", label: "Country", maxLength: 255, isDouble: false},
    { num: 12, id: "street", name: "workAddress.street", common_label: "Street:", label: "Street", maxLength: 255, isDouble: false},
    { num: 13, id: "workUrl", name: "workUrl", common_label: "Website:", label: "www.your-website.com", maxLength: 255, isDouble: false},
    // additional fields
    { num: 14, id: "nickname", name: "nickname", common_label: "Nickname:", label: "Nickname", maxLength: 255, isDouble: false, isAdditional: true},
    { num: 15, id: "birthday", name: "birthday", common_label: "Birthday:", label: "Birthday", maxLength: 255, isDouble: false, isAdditional: true},
    { num: 16, id: "linkedIn", name: "socialUrls.linkedIn", common_label: "LinkedIn:", label: "LinkedIn", maxLength: 255, isDouble: false, isAdditional: true},
    { num: 17, id: "github", name: "socialUrls.github", common_label: "Github:", label: "Github", maxLength: 255, isDouble: false, isAdditional: true},
];

export const req_fields_number = values_form_qr.filter(({isAdditional}) => isAdditional !== true).length;

export const init_aditional_checked = new Array(values_form_qr.slice(req_fields_number).length).fill(false);

export const default_example_size = 3;

export const default_theme = "light";

export const _workAddress = [ 
    "workAddress.city", 
    "workAddress.postalCode",
    "workAddress.stateProvince",
    "workAddress.countryRegion",
    "workAddress.street"        
];
export const _socialUrls = [
    "socialUrls.linkedIn",
    "socialUrls.github"
]