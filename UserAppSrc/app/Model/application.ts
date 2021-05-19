export class Application 
{
    private firstname!:string;
    private lastname!:string;
    private age!:string;
    private gender!:string;
    private maritalstatus!:string;
    private dependency!:string;
    private email!:string;
    private country!:string;
    private city!:string;
    private contactnumber!:string;
    private pannumber!:string;
    private aadharnumber!:string;
    private income!:string;
    private cardtype!:string;
    private referncenumber!:string;
    
    constructor(firstname:string,lastname:string,age:string,gender:string,maritalstatus:string,dependency:string,email:string,country:string,city:string,contactnumber:string,pannumber:string,aadharnumber:string,income:string,cardtype:string,referncenumber:string)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.gender=gender;
        this.maritalstatus=maritalstatus;
        this.dependency=dependency;
        this.email=email;
        this.country=country;
        this.city=city;
        this.contactnumber=contactnumber;
        this.pannumber=pannumber;
        this.aadharnumber=aadharnumber;
        this.income=income;
        this.cardtype=cardtype;
        this.referncenumber=referncenumber;
}
}
