using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR_Chat.Hubs
{
    public class ChatHub : Hub
    {
        public static List<Client> ConnectedUsers { get; set; } = new List<Client>();
        public void Send(string name, string message)
        {
            Clients.All.broadcastMessage(name, message);
        }

        public void Connect(string username)
        {
            Client c = new Client()
            {
                Username = username,
                ID = Context.ConnectionId
            };
            ConnectedUsers.Add(c);
            Clients.All.updateUsers(ConnectedUsers.Count(), username);
           
        }
    }

    public class Client
    {
        public string Username { get; set; }

        public string ID { get; set; }
    }

}
