using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
using DataLayer;

namespace BusinessLayer
{
    public static class UserManager
    {
        public static void TestFunc(CommonClient client)
        {
            Register(client);
        }
        public static Boolean Register(CommonClient client)
        {
            if (client.Phone2 == "")
            {
                client.Phone2 = null;
            }
            if (DataUser.Register(client) == false)
            {
                Console.WriteLine("User " + client.Email + " already exists.");
                return false;
            }
            Console.WriteLine("User " + client.Email + " was added successfully.");
            return true;
        }
    }
}
