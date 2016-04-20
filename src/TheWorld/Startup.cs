using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace TheWorld
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // configure the dependency injection container

            // Add MVC to the services we can use in this app
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            // middleware is functionality that is accessed when a request comes in... It's opted into, not default behaviour.
            // app.UseDefaultFiles();
            app.UseStaticFiles();

            //turn on MVC
            app.UseMvc(config =>
            {
                // how to handle URI - map it to some code
                config.MapRoute(
                    name: "Default",
                    template: "{controller}/{action}/{id?}",
                    // if nothing supplied in URI, use the Index action in the App controller (id is optional anyway)
                    defaults: new {controller = "App", action = "Index"}
                    );
            });
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
