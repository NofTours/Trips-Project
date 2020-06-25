using CommonLayer;
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
        //static dbEntities db = new dbEntities();

        public static String GetEquipmentNameById(int equipmentId)
        {
            dbEntities db = new dbEntities();
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
            dbEntities db = new dbEntities();
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

        public static List<CommonEquipment> GetEquipment()
        {
            dbEntities db = new dbEntities();
            List<Equipment> eq = (from e in db.Equipment select e).ToList();
            List<CommonEquipment> ceq = new List<CommonEquipment>();
            foreach (var e in eq)
            {
                ceq.Add(Mapper.EquipmentToCommon(e));

            }
            return ceq;
                       
        }

    }
}
