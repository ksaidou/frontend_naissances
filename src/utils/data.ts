const NAV_LINKS =[
    {
        to:'/private/declarations',
        label:'Les déclarations'
    },
    {
        to:'/private/demandes',
        label:'Les demandes'
    },
    {
        to:'/private/profiles',
        label:'Les personnes'
    },
    {
        to:'/private/notifications',
        label:'Les courriers'
    }
];

const UPDATE_DECLARATIONS ="UPDATE_DECLARATIONS";
const UPDATE_DECLARATION_STATUS ="UPDATE_DECLARATION_STATUS";
const INITIAL_STATE = { declarations:[] };
const SET_TOKEN = "SET_TOKEN";
const DELETE_TOKEN = "DELETE_TOKEN";
const UPDATE_TITLE ="UPDATE_TITLE";

export {
    DELETE_TOKEN,
    NAV_LINKS,
    INITIAL_STATE,
    SET_TOKEN,
    UPDATE_TITLE,
    UPDATE_DECLARATIONS,
    UPDATE_DECLARATION_STATUS
        };