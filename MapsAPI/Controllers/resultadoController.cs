using MapsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MapsAPI.Controllers
{
    public class resultadoController : Controller
    {
        ApplicationDbContext db;
        // GET: resultado
        public ActionResult Index()
        {
            return View();
        }

        // GET: resultado/Details/5
        public ActionResult Details(int id)
        {
            
            return View();
        }

        // GET: resultado/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: resultado/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: resultado/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: resultado/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: resultado/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: resultado/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
