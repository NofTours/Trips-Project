export class CommonClient {
  contactName: string;
  email: string;
  phone1: string;
  phone2: string;
  password: string;
  constructor(contactName: string, email: string, phone1: string, phone2: string, password: string) {
    this.contactName = contactName;
    this.email = email;
    this.password = password;
    this.phone1 = phone1;
    this.phone2 = phone2;
  }
  getContactName() {
    return this.contactName;
  }
}
