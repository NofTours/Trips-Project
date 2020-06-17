using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 
using System.Security.Cryptography;

namespace DataLayer
{
    
    class Hash
    {
        static dbEntities db = new dbEntities();
        private const int SaltByteSize = 24;
        private const int HashByteSize = 24;
        private const int HasingIterationsCount = 10101;

        internal static byte[] GenerateSalt(int saltByteSize = SaltByteSize)
        {
            using (RNGCryptoServiceProvider saltGenerator = new RNGCryptoServiceProvider())
            {
                byte[] saltBytes = new byte[saltByteSize];
                saltGenerator.GetBytes(saltBytes);               
                return saltBytes;
            }
        }

        internal static string ComputeHash(string password, byte[] salt, 
            int iterations = HasingIterationsCount, 
            int hashByteSize = HashByteSize)
        {
            using (Rfc2898DeriveBytes hashGenerator = new Rfc2898DeriveBytes(password, salt))
            {
                hashGenerator.IterationCount = iterations;
                byte[] hashBytes= hashGenerator.GetBytes(hashByteSize);
                string hash = Convert.ToBase64String(hashBytes);
                return hash;
            }
        }
        public static bool VerifyPassword(string enteredPassword, string storedHash, string storedSalt)
        {
            byte[] storedSaltBytes = Convert.FromBase64String(storedSalt);
            string hashedPswd = ComputeHash(enteredPassword, storedSaltBytes);
            return hashedPswd == storedHash;
        }
    }
}
