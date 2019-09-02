using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;

namespace DataLayer
{
    public static class DataUser
    {
        static tripsDbEntities1 db = new tripsDbEntities1();
        //* TODO move to static function that will try to create connection to db.


        public static Boolean Register(CommonClient user)
        {
            var result = (from c in db.Clients where c.Email == user.Email select c).ToList();
            
            if (result.Count() > 0)
                return false; //* User already exists
            Client client = Mapper.UserToDB(user);
            db.Clients.Add(client);
            
            String list = db.Clients.ToString();
            db.SaveChanges();
            return true;           
        } 
    }
}
