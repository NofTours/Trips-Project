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
        static dbEntities db = new dbEntities();
        //* TODO move to static function that will try to create connection to db.


        public static Boolean Register(CommonClient user)
        {
            var result = (from c in db.Clients where c.Email == user.Email select c).ToList();
            
            if (result.Count() > 0)
                return false; //* User already exists
            Clients client = Mapper.UserToDB(user);
            db.Clients.Add(client);
            
            String list = db.Clients.ToString();
            try
            {
                //db.Database.ExecuteSqlCommand(@"SET IDENTITY_INSERT [dbo].[Clients] ON");
                db.SaveChanges();
                //db.Database.ExecuteSqlCommand(@"SET IDENTITY_INSERT [dbo].[Clients] OFF");            
            }
            catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
            {
                Exception raise = dbEx;
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        string message = string.Format("{0}:{1}",
                            validationErrors.Entry.Entity.ToString(),
                            validationError.ErrorMessage);
                        // raise a new exception nesting
                        // the current instance as InnerException
                        raise = new InvalidOperationException(message, raise);
                    }
                }
                throw raise;
            }
            return true;           
        } 
    }
}
