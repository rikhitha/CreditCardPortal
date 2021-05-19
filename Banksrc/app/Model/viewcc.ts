export class Viewcc
{
    public firstname!:string;
    public lastname!:string;
    public age!:string;
    public gender!:string;
    public maritalstatus!:string;
    public dependency!:string;
    public email!:string;
    public country!:string;
    public city!:string;
    public contactnumber!:string;
    public pannumber!:string;
    public aadharnumber!:string;
    public income!:string;
    public cardtype!:string;
    public referncenumber!:string;
    
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
