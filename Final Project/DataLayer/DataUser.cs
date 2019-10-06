using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;

namespace DataLayer
{
    public static class DataUser
    {
        static dbEntities db = new dbEntities();
        //* TODO move to static function that will try to create connection to db.

        public static Boolean UserExists(CommonClient user)
        {
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

        //* TODO - check online how to validate db w EF - before any work with it - maybe add transactions...
        public static Boolean Register(CommonClient user)
        {
            if (UserExists(user))
                return false; //* If user exists-do not register again.                     
            
            Clients client = Mapper.UserToDB(user);
            
            db.Clients.Add(client);
            
            String list = db.Clients.ToString();
            try
            {
                db.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {
                Debug.WriteLine(dbEx.Message);
            }
            return true;//* User added succeessfully           
        } 

        public static Boolean Login(string email, string password)
        {
          try
            {
                var result = (from c in db.Clients where 
                             (c.Email == email && c.Password == password) select c).FirstOrDefault();
                //* Try to find this user in the db.
                if (result != null)
                    return true; //* email & password are correct
            }
            catch(Exception e)
            {
                Debug.WriteLine(e.Message + " " + e.StackTrace);
            }
            return false;//* either email/pswd are incorrect / user doesn't exist
                
            
        }
    }
}
