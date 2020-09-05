export interface Members {
    identification: number;
    names: string;
    surname: string;
    secondsurname: string;
    numberid: string;
    birthdate: string;
    address: string;
    email: string;
    phone: string;
    mobile: string;
    maritalstatus: {
        identification: number;
        name: string;
        status: number;
    };
    education: {
        identification: number;
        acronym: string;
        description: string;
    };
    livingplace: {
        identification: number;
        name: string;
    };
    baptized: number;
    promised: number;
    profession: string;
    eps: string;
    sisben: string;
    image: string;
    gethelp: string;
    whohelps: string;
    funeralservice: string;
    facebook: string;
    twitter: string;
    pension: string;
    spouse: string;
    pastorbaptized: string;
    numberchildren: number;
    neighborhood: string;
    occupation: string;
    manylives: number;
    baptismcity: string;
    placeofbirth: string;
    baptismdate: string;
    holyspiritdate: string;
    dependents: number;
    state: number;
}
