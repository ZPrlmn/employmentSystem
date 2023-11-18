export const cardDataInput = [
    {
        classColor: "bg-secondary" ,
        title: "Employee Attendance",
        content: ""
    },
    {
        classColor: "bg-warning",
        title: "Records",
        content: "",
    },
    {
        classColor: "bg-info",
        title: "Payroll",
        content: "",
    }
]

let idnum = 1;

const generateEmployeeID = () => {
    return idnum++;
};



