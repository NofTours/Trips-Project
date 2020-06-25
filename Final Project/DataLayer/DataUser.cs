using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
using System.Security;
namespace DataLayer
{
    public static class DataUser
    {
        public static Boolean Login(string email, string password)
        {
            dbEntities db = new dbEntities();
            try
            {
                Clients cl = (from c in db.Clients where c.Email == email select c).FirstOrDefault();
                if (cl != null)
                    if (Hash.VerifyPassword(password, cl.HashedPassword, cl.Salt) == true)
                        return true;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message + " " + e.StackTrace);
            }
            return false;//* either email/pswd are incorrect / user doesn't exist


        }

        public static Boolean UserExists(CommonClient user)
        {
            dbEntities db = new dbEntities();
            try
            {
                var result = (from c in db.Clients where c.Email == user.Email select c).FirstOrDefault();
                //* Try to select this user from db.
                if (result != null)
                    return true; //* User exists
            }
            catch(Exception e)
            {
                Debug.WriteLine(e.Message + " " + e.StackTrace);//* maybe rather throw back...
            }
            return false;
        }

        public static Boolean Register(CommonClient user)
        {
            dbEntities db = new dbEntities();
            if (UserExists(user))
                return false; //* If user exists-do not register again.                     
            
            Clients client = Mapper.UserToDB(user);
                         
            try
            {
                byte[] salt = Hash.GenerateSalt();
                string hashedPwd = Hash.ComputeHash(client.HashedPassword, salt);
                client.HashedPassword = hashedPwd;
                client.Salt = Convert.ToBase64String(salt);
                db.Clients.Add(client);
                db.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {
                Debug.WriteLine(dbEx.Message);
            }
            return true;//* User added succeessfully           
        }

        public static CommonClient GetUserByEmail(string email)
        {
            dbEntities db = new dbEntities();
            Clients client = (from c in db.Clients where c.Email == email select c).FirstOrDefault();
            return Mapper.UserToCommon( client);
        }

        public static CommonClient GetUserById(int id)
        {
            dbEntities db = new dbEntities();
            Clients client = (from c in db.Clients where c.ClientId == id select c).FirstOrDefault();
            CommonClient commonClient = Mapper.UserToCommon(client);
            return commonClient;
        }

        public static Boolean SaveAddressAndNum(Data data)
        {
            dbEntities db = new dbEntities();
            Clients client = (from c in db.Clients where c.Email == data.Email select c).FirstOrDefault();
            try { 
            client.NumPeople = data.NumOfPeople.ToString();
            client.LeavingAddress = data.Address;
            db.SaveChanges();
            }
            catch(Exception e)
            {
                return false;
            }
            return true;
        }
    }
}
