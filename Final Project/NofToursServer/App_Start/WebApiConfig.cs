﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace NofToursServer
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
            name: "Action",
            routeTemplate: "api/{controller}/{action}/{id}"
        );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

          

            //config.Routes.MapHttpRoute(
            //    name: "Action",
            //    routeTemplate: "api/{controller}/{action}/{ id}",
            //     defaults: new { id = RouteParameter.Optional }
            //);

            var corsAttr = new EnableCorsAttribute("http://localhost:4200", "*", "*");
            config.EnableCors(corsAttr);
        }
    }
}
