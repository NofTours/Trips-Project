using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public static class DataEquipment
    {
        static dbEntities db = new dbEntities();

        public static String GetEquipmentNameById(int equipmentId)
        {
            try { 
            string equipment = (from e in db.Equipment where e.EquipmentId == equipmentId select e.Name).FirstOrDefault();
                if(equipment!=null)
                   return equipment;
            }
            catch(Exception e)
            {
                Debug.WriteLine(e.Message + " " + e.StackTrace);
            }
            return "equipment not found";
        }
        public static int GetEquipmentIdByName(string equipmentName)
        {
            try { 
            Equipment equipment = (from e in db.Equipment where e.Name == equipmentName select e).FirstOrDefault();
                if (equipment!=null)
                    return equipment.EquipmentId;
            }
            catch(Exception e)
            {
                Debug.WriteLine(e.Message + " " + e.StackTrace);
            }

         return -1;
        }
    }
}
