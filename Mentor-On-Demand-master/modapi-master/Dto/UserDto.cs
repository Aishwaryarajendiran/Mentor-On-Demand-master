﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MentorOnDemand.Dto
{
    public class UserDto
    {
        public string Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public bool Active { get; set; }
        

    }
}
