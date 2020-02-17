function find(entity, searchParams = {}, options = {}) {
    return new Promise((resolve) => {
        const model = entity.find(searchParams);
        if (options.fields) { model.select(options.fields); }
        if (options.sort) { model.sort(options.sort); }
        if (options.start) { model.skip(options.start); }
        if (options.limit) { model.limit(options.limit); }
        model.exec((err, res) => {
            if (err || !res.length) {
                resolve({ Status: false, Data: [], Message: err ? err.message : 'Data not found' })
            }
            resolve({ Status: true, Data: res });
        })
    })
}
function findOne(entity, searchParams = {}) {
    return new Promise(resolve => {
        entity.findOne(searchParams, (err, result) => {
            if (err) resolve({ Status: false, Message: "Data not found" });
            resolve({ Status: true, Data: result })
        })
    })
}
function save(entity, data = {}, message) {

    return new Promise((resolve) => {
        entity.save((err, result) => {
            if (err) { resolve({ Status: false, Message: err.message }) };
            let msg = message || "Create Successfuly !";
            resolve({ Status: true, Data: { _id: result._id }, Message: msg });
        })
    })
}
function update(entity, data = {}, message) {
    return new Promise((resolve) => {
        entity.findById(data._id, (err, result) => {
            if (err) resolve({ Status: false, Message: err.message })
            save(entity, data, message).then(res => {
                resolve(res);
            })
        })
    })
}
function remove(entity, id, force = false) {
    return new Promise((resolve) => {
        if (force) {
            entity.findByIdAndRemove(id, (err) => {
                resolve({ Status: !!err, Message: err ? err.message : 'Deleted sucessfully.' });

            })
        }
        else {
            save(entity, { isdeleted: 1 }).then(res => {
                resolve({ Status: res.Status, Data: res.Data || [], Message: res.Status ? 'Deleted sucessfully.' : '' });
            })
        }
    })
}

function history(entity, data = {}) {
    save(entity, data);
}
module.exports = {
    find,
    save,
    history,
    remove,
    update
};