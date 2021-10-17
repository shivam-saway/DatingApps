using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class PresenceHub : Hub
    {
        public override async Task OnConnectedAsync()
        {
            await Clients.Others.SendAsync("UserIsOnline", Context.User.GetUserame());
        }
    }
}