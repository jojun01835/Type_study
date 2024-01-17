"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.emply = [];
    }
    static createEmployee(name) {
        return {
            name: name,
        };
    }
    addEmplu(employ) {
        this.emply.push(employ);
    }
    printEmpoly() {
        console.log(this.emply.length);
        console.log(this.emply);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID " + this.id);
    }
}
class AccountingD extends Department {
    get mostlastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error(" no report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please pass in valid");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingD("d2", []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.emply.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
    describe() {
        console.log("Accoung ID : " + this.id);
    }
}
const employ1 = Department.createEmployee("jojun0");
console.log(employ1, Department.fiscalYear);
const acc = new ITDepartment("d1", ["Max"]);
const accting = AccountingD.getInstance();
accting.mostRecentReport = "보고 안섭니다";
accting.addReport("보고 섭니다");
console.log(accting.mostlastReport);
accting.getReports();
acc.addEmplu("JO");
acc.addEmplu("MAX");
accting.describe();
//# sourceMappingURL=class.js.map