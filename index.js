<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DinoBlox Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            background: #0a0a1a;
            color: #fff;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
            color: #5865F2;
            margin-bottom: 30px;
        }
        .stats {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 40px;
            justify-content: center;
        }
        .card {
            background: #16213e;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            min-width: 150px;
            flex: 1;
        }
        .card h3 {
            font-size: 32px;
            color: #5865F2;
        }
        .commands {
            background: #16213e;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 40px;
        }
        .commands h2 {
            margin-bottom: 20px;
            border-left: 4px solid #5865F2;
            padding-left: 15px;
        }
        .cmd-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .cmd-item {
            background: #0f0f1a;
            padding: 8px 15px;
            border-radius: 8px;
            font-family: monospace;
        }
        .servers {
            background: #16213e;
            padding: 20px;
            border-radius: 10px;
        }
        .servers h2 {
            margin-bottom: 20px;
            border-left: 4px solid #5865F2;
            padding-left: 15px;
        }
        .server-item {
            background: #0f0f1a;
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        .badge {
            background: #5865F2;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #666;
        }
        @media (max-width: 768px) {
            .server-item {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🦖 DinoBlox Dashboard</h1>
        
        <div class="stats">
            <div class="card">
                <p>📊 Servers</p>
                <h3 id="serverCount">--</h3>
            </div>
            <div class="card">
                <p>👥 Users</p>
                <h3 id="userCount">--</h3>
            </div>
            <div class="card">
                <p>⚡ Commands</p>
                <h3 id="cmdCount">--</h3>
            </div>
            <div class="card">
                <p>🏓 Ping</p>
                <h3 id="ping">--ms</h3>
            </div>
        </div>
        
        <div class="commands">
            <h2>📋 Danh sách lệnh</h2>
            <div class="cmd-list" id="cmdList">
                <div class="cmd-item">/init</div>
                <div class="cmd-item">/verify</div>
                <div class="cmd-item">/update</div>
                <div class="cmd-item">/promote</div>
                <div class="cmd-item">/demote</div>
                <div class="cmd-item">/setrank</div>
                <div class="cmd-item">/rankbinds</div>
                <div class="cmd-item">/custombinds</div>
                <div class="cmd-item">/groupbinds</div>
                <div class="cmd-item">/xp</div>
                <div class="cmd-item">/xpbinds</div>
                <div class="cmd-item">/status</div>
                <div class="cmd-item">/getrole</div>
            </div>
        </div>
        
        <div class="servers">
            <h2>📊 Danh sách Server</h2>
            <div id="serverList">
                <div class="server-item">🔄 Đang tải dữ liệu...</div>
            </div>
        </div>
        
        <div class="footer">
            <p>🦖 DinoBlox Bot | Quản lý Roblox Group</p>
            <p>🔗 Dùng lệnh <span class="badge">/help</span> trong Discord để biết thêm chi tiết</p>
        </div>
    </div>

    <script>
        // Dữ liệu mẫu - sau này thay bằng API thật
        const data = {
            servers: 8,
            users: 1247,
            commands: 16,
            ping: 42,
            serverList: [
                { name: "🏰 DinoBlox Main", id: "123456789", members: 542 },
                { name: "🎮 Roblox Vietnam", id: "234567890", members: 1280 },
                { name: "⚔️ Game Hub", id: "345678901", members: 356 },
                { name: "💻 Developer Zone", id: "456789012", members: 189 }
            ]
        };
        
        // Cập nhật số liệu
        document.getElementById('serverCount').innerText = data.servers;
        document.getElementById('userCount').innerText = data.users.toLocaleString();
        document.getElementById('cmdCount').innerText = data.commands;
        document.getElementById('ping').innerText = data.ping + 'ms';
        
        // Cập nhật danh sách server
        const serverList = document.getElementById('serverList');
        serverList.innerHTML = data.serverList.map(s => `
            <div class="server-item">
                <span>${s.name}</span>
                <span>👥 ${s.members} thành viên</span>
                <span class="badge">ID: ${s.id}</span>
            </div>
        `).join('');
    </script>
</body>
</html>
