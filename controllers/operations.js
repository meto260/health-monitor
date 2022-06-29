module.exports.TriggerJobs = (q, s) => {
    //Triggering by cron-job.org
    return s.json({status:1});
}

module.exports.CleanJobs = (q, s) => {
    return s.json({status:1});
}