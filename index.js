const express = require('express');
const bodyParser = require('body-parser');

class Program {
    static Load = () => {
        const app = express();
        require('dotenv').config();
        app.use(express.static('wwwroot'));
        const port = process.env.PORT;
        app.use(bodyParser.urlencoded({ extended: true }));

        app.listen(port, () => {
            console.log(`Service is running on: http://localhost:${port}.`);
        });

        const { Index, ListJobsHome } = require("./controllers/home.js");
        const { ListJobs, AddJob, UpdateJob, RemoveJob } = require("./controllers/cron.js");
        const { TriggerJobs, CleanJobs } = require("./controllers/operations.js");

        app.get('/', Index);
        app.get('/cron', ListJobsHome);

        app.get('/cron/list', ListJobs);
        app.post('/cron/add', AddJob);
        app.put('/cron/update', UpdateJob);
        app.delete('/cron/remove', RemoveJob);

        app.get('/opr/trigger', TriggerJobs);
        app.get('/opr/clean', CleanJobs);
    }
}

Program.Load();