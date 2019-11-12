﻿using System;
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

        public static Boolean Login(string email, string password)
        {
          try
            {
                Clients cl = (from c in db.Clients where c.Email == email select c).FirstOrDefault();
                if (cl != null)
                    if (Hash.VerifyPassword(password, cl.HashedPassword, cl.Salt)==true)
                        return true;
            }
            catch(Exception e)
            {
                Debug.WriteLine(e.Message + " " + e.StackTrace);
            }
            return false;//* either email/pswd are incorrect / user doesn't exist
                
            
        }
    }
}
