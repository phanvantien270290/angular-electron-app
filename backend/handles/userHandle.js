const Promise = require("es6-promise").Promise;
const userModel = require('../models/User');

/**
 * @author Tien Phan
 * @description Get List User
 * @returns {Promise}
 */

module.exports = {
    getList(params = {}, options = {}) {
        let searchParams = {},
            _options = options; // limit:number,start:number,sort:object {username:-1}
        if (typeof params === 'string') {
            searchParams = {
                '$or': [
                    { username: new RegExp(params, 'i') },
                    { firstName: new RegExp(params, 'i') },
                    { lastName: new RegExp(params, 'i') },
                    { address: new RegExp(params, 'i') },
                    { area: new RegExp(params, 'i') }
                ]
            }
        }
    },
    getOne(username, options = {}) {
        let searchParams = {},
            _options = options; // limit:number,start:number,sort:object {username:-1}
        if (typeof params === 'string') {
            searchParams = {
                '$or': [
                    { username: new RegExp(params, 'i') },
                    { firstName: new RegExp(params, 'i') },
                    { lastName: new RegExp(params, 'i') },
                    { address: new RegExp(params, 'i') },
                    { area: new RegExp(params, 'i') }
                ]
            }
        }
        // if (typeof params === 'object') {
        //     for (let prop in params) {
        //         if (params[prop] && params[pro].isDate) {
        //             searchParams[prop] = new RegExp(params[prop], 'i');
        //             continue;
        //         }
        //         if (params[prop]) {
        //             searchParams[prop] = new RegExp(params[prop], 'i');
        //         }

        //     }
        // }
    }
}