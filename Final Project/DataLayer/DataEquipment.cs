using System;
using System.Collections.Generic;
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
            string equipment = (from e in db.Equipment where e.EquipmentId == equipmentId select e.Name).FirstOrDefault();
            return equipment;
        }
        public static int GetEquipmentIdByName(string equipmentName)
        {
            Equipment equipment = (from e in db.Equipment where e.Name == equipmentName select e).FirstOrDefault();
            return equipment.EquipmentId;

        }
    }
}
