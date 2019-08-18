using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace Index.Models
{
    public class User
    {
        [Key]
        public int userId { get; set; }
        [Required]
        [MinLength(2)]
        public string firstName { get; set; }
        [Required]
        [MinLength(2)]
        public string lastName { get; set; }
        [Required]
        [EmailAddress]
        public string emailAddress { get; set; }
        [Required]
        [MinLength(2)]
        public string chosenCity { get; set; }
        [Required]
        public string message { get; set; }
        public DateTime createdAt { get; set; } = DateTime.Now;
        public bool approved { get; set; } = false;
    }
}