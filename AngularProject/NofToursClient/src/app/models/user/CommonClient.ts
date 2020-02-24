export class CommonClient {
  ClientId:number;
  ContactName: string;
  Email: string;
  Phone1: string;
  Phone2: string;
  Password: string;
  LeavingAddress:string;
  NumPeople: string;
  constructor(clientId:number,contactName: string, email: string, phone1: string, phone2: string, password: string, leavingAddress:string,numPeople: string) {
    this.ClientId=clientId;
    this.ContactName = contactName;
    this.Email = email;
    this.Password = password;
    this.Phone1 = phone1;
    this.Phone2 = phone2;
    this.LeavingAddress=leavingAddress;
    this.NumPeople=numPeople;
  }
  getContactName() {
    return this.ContactName;
  }
}
