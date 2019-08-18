using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Index.Models;

namespace Index.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;
        public HomeController(MyContext context)
        {
            dbContext = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [Route("RequestAccess")]
        public IActionResult RequestAccess()
        {
            if(TempData["Confirmed"] != null) 
            {
                ViewData["Thanks"] = "Request submitted successfully";
            }
            return View();
        }
        [HttpPost]
        [Route("GetAccess")]
        public IActionResult GetAccess(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(dbContext.Users.Any(u => u.emailAddress == newUser.emailAddress))
                {
                    ModelState.AddModelError("emailAddress", "Email is already in use!");
                    return View("RequestAccess");
                }
                else
                {
                    dbContext.Add(newUser);
                    dbContext.SaveChanges();
                    TempData["Confirmed"] = 1;
                    return RedirectToAction("RequestAccess");
                }
            }
            else 
            {
                return View("RequestAccess");
            } 
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
