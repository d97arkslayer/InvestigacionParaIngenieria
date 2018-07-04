using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MapsAPI.Startup))]
namespace MapsAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
