using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MapsAPI.Models
{
    public class resultado
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int id { get; set; }
        public double longitud { get; set; }
        public double latitud { get; set; }
        public double magnitud { get; set; }
    }
}