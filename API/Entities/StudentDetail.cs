using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class StudentDetail
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string Branch { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string FathersName { get; set; }
        public string MothersName { get; set; }
        public string Hobbie { get; set; }

    }
}
