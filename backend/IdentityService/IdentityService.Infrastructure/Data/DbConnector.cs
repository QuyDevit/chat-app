using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Data;


namespace IdentityService.Infrastructure.Data
{
    public class DbConnector
    {
        private readonly IConfiguration _configuration;

        public DbConnector(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDbConnection CreateConnection()
        {
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            return new NpgsqlConnection(connectionString);
        }
    }
}
