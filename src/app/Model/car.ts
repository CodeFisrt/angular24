export class CAR {
    carId: number;
    brand : string;
    model: string;
    year: number;
    color: string;
    dailyRate: number;
    carImage: string;
    regNo: string;
    constructor() {
        this.brand = "";
        this.carId= 0;
        this.carImage= "";
        this.color = "";
        this.dailyRate= 0;
        this.regNo= "";
        this.model= "";
        this.year = 2012;
    }
}



export interface ICAR {
    carId: number,
    brand : string,
    model: string,
    year: number,
    color: string,
    dailyRate: number,
    carImage: string,
    regNo: string
}