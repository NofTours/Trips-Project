using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
using DataLayer;

namespace BusinessLayer
{
    public static class UserManager
    {
        public static Boolean Register(CommonClient client)
        {
            if (client.Phone2 == "")//* Phone2 is optional
            {
                client.Phone2 = null;
            }
            if (DataUser.Register(client) == false)
            {
                Debug.WriteLine("User " + client.Email + " already exists.");
                return false;
            }
            Debug.WriteLine("User " + client.Email + " was added successfully.");
            return true;
        }

        public static Boolean Login(CommonClient client)
        {
            if (client.Email != "" /*&& client.Password != ""*/)//* Email & pswd cannot be empty.
            {
                if (DataUser.Login(client) == false)
                {
                    Debug.WriteLine("Email: " + client.Email + "or password are incorrect");
                    return false;
                }
                Debug.WriteLine("User: " + client.Email + " logged in successfully.");
                return true;
            }
        }
    }
}
